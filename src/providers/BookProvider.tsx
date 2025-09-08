import { createContext, useState, useContext, useEffect, useCallback } from "react";
import useContract, { ExecutionType } from "@/hooks/useContract";
import axios from "axios";

interface Author {
    author_address: string;
    fid: number;
}

export interface HydratedAuthor extends Author {
    author: string;
    avatar: string;
}

interface Chapter {
    author: Author;
    title: string;
    content_hash: string;
}

export interface HydratedChapter extends Omit<Chapter, "author"> {
    text: string;
    likes: number;
    avatar: string;
    author: string;
    author_address: string;
    timestamp: Date;
}

interface Book {
    id: number;
    title: string;
    description: string;
    cover_image: string;
    chapters: Chapter[];
    authors: Author[];
}

interface Settings {
    usdc_token: string;
    chapter_price: bigint;
    book_count: bigint;
}

interface BookContextValue {
    fetch_data: () => Promise<void>;
    currentBook?: Book;
    bookOfZoraSettings?: Settings;
    //TODO: change this to a real type
    chapter_data: HydratedChapter[];
    hydrated_authors: HydratedAuthor[];
}

const BookContext = createContext<BookContextValue | undefined>(undefined);

export function useBooks() {
    const context = useContext(BookContext);
    if (context === undefined) {
        throw new Error("useBooks must be used within a BookProvider");
    }
    return context;
}

export function BookProvider({ children }: { children: React.ReactNode }) {
    const [currentBook, setCurrentBook] = useState<Book>();
    const [bookOfZoraSettings, setBookOfZoraSettings] = useState<Settings>();
    const [chapterData, setChapterData] = useState<HydratedChapter[]>([]);
    const [hydratedAuthors, setHydratedAuthors] = useState<HydratedAuthor[]>([]);

    const fetch_current_book = useContract(ExecutionType.READABLE, "Data", "fetch_current_book");
    const fetch_book_data = useContract(ExecutionType.READABLE, "Data", "fetch_book_data")
    const fetch_book_chapters = useContract(ExecutionType.READABLE, "Data", "fetch_book_chapters");
    const fetch_book_authors = useContract(ExecutionType.READABLE, "Data", "fetch_book_authors");
    const fetch_settings = useContract(ExecutionType.READABLE, "Data", "fetch_settings");

    const fetch_data = useCallback(async () => {
        const current_book = await fetch_current_book([]);
        const book_data = await fetch_book_data([current_book]);
        const chapters = await fetch_book_chapters([current_book]);
        const authors = await fetch_book_authors([current_book]);
        setCurrentBook({
            id: parseInt(current_book.toString()),
            title: book_data.title,
            description: book_data.description,
            cover_image: book_data.cover_image_uri,
            chapters,
            authors
        });
    }, [
        fetch_current_book,
        fetch_book_data,
        fetch_book_chapters,
        fetch_book_authors
    ]);

    useEffect(() => {
        const load = async () => {
            await fetch_data();
            const settings = await fetch_settings([]);
            setBookOfZoraSettings(settings);
        }
        load();
    }, [
        fetch_data,
        fetch_settings
    ]);

    useEffect(() => {
        if (!currentBook) return;
        console.log(currentBook.authors);

        const load = async () => {
            const hydrated_authors = await Promise.all(
                currentBook.authors.map(async (author) => {
                    const { data: { user } } = await axios.post("/api/fetch_user", {
                        fid: author.fid.toString()
                    });
                    return {
                        ...author,
                        author: user.display_name,
                        avatar: user.pfp_url
                    }

                })
            )
            setHydratedAuthors(hydrated_authors);
        }

        load();

    }, [currentBook]);

    useEffect(() => {
        if (!currentBook) return;

        const load = async () => {
            const beats = await Promise.all(
                currentBook.chapters.map(async (chapter) => {
                    if (chapter.content_hash) {
                        const { data } = await axios.post("/api/fetch_cast", {
                            cast_hash: chapter.content_hash
                        });
                        const { data: { user } } = await axios.post("/api/fetch_user", {
                            fid: chapter.author.fid.toString()
                        })
                        return {
                            ...chapter,
                            text: data.text,
                            likes: data.reactions.likes_count,
                            avatar: user.pfp_url,
                            author: user.display_name,
                            author_address: chapter.author.author_address,
                            timestamp: new Date(data.timestamp)
                        }
                    }
                })
            );
            const res = beats.filter((u) => u);
            setChapterData(res as any);
        }

        load();
    }, [currentBook]);

    return (
        <BookContext.Provider value={{
            fetch_data,
            currentBook,
            bookOfZoraSettings,
            chapter_data: chapterData,
            hydrated_authors: hydratedAuthors
        }}>
            {children}
        </BookContext.Provider>
    );
}