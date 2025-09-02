import Header from "@/components/header/Header"
import StoryBeats from "@/components/story_beats/StoryBeats"
import { useBooks } from "@/providers/BookProvider"
import CurrentBook from "@/components/current_book/CurrentBook"
import Splash from "@/components/splash/Splash"

export default function HomePage() {
    const { currentBook } = useBooks();
    console.log(currentBook);
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="max-w-6xl mx-auto px-4 py-6">
                <section>
                    <Splash />
                </section>

                <section className="mb-12 animate-slide-up-mobile" style={{ animationDelay: "0.5s" }}>
                    <CurrentBook />
                </section>

                <section className="relative z-[50]">
                    <StoryBeats beats={[]} />
                </section>

                {/* <section className="animate-slide-up-mobile" style={{ animationDelay: "0.8s" }}>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center">
                                <BookMarked className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Collect Chapters</h3>
                        </div>
                        <Badge className="bg-accent/10 text-accent border-accent/20 rounded-full px-3 py-1">
                            <Crown className="w-3 h-3 mr-1" />
                            On Zora
                        </Badge>
                    </div>

                </section> */}
            </main>
        </div>
    )
}