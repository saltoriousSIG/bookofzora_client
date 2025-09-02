import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { Scroll, Users, PenTool, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { useBooks } from "@/providers/BookProvider";
import { NavLink } from "react-router-dom";

interface CurrentBookProps { }

const CurrentBook: React.FC<CurrentBookProps> = () => {
    const { currentBook, hydrated_authors } = useBooks();
    console.log(hydrated_authors, "hydrated authors")
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Scroll className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Current Story</h3>
                </div>
            </div>

            <div className="space-y-6">
                <Card
                    className={`story-card border-2 border-border bg-card overflow-hidden animate-slide-up-mobile md:ml-12`}
                    style={{ animationDelay: `${0.6}s` }}
                >
                    <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <CardTitle className="text-xl mb-2 text-foreground font-bold">{currentBook?.title}</CardTitle>
                                <img src={currentBook?.cover_image} className="h-auto w-[200px] rounded shadow-lg" />
                            </div>
                            <Badge className="bg-primary text-white rounded-full px-3 py-1 ml-4">
                                <Star className="w-3 h-3 mr-1" />
                                Live
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <div className="text-base text-muted-foreground leading-relaxed">
                                    <span className="font-bold text-lg">
                                        First Beat:
                                    </span>
                                    &nbsp;
                                    {currentBook?.description}
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-muted-foreground font-medium">Chapters Written</span>
                                    <span className="font-bold text-primary">
                                        {currentBook?.chapters.length} / 10 chapters
                                    </span>
                                </div>
                                <div className="progress-scroll h-3 rounded-full overflow-hidden">
                                    <Progress
                                        value={100}
                                        className="h-full bg-transparent"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium text-foreground">
                                        {currentBook?.authors.length} authors
                                    </span>
                                </div>
                                <div>
                                    {hydrated_authors.map((author) => {
                                        return (
                                            <img key={author.fid} src={author.avatar} className="rounded-full h-[25px] w-[25px] outline-[1px] outline-blue-300" />
                                        )
                                    })}
                                </div>
                            </div>
                            <NavLink to="/add_beat">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-full shadow-lg mobile-tap touch-target ink-splash">
                                    <PenTool className="w-4 h-4 mr-2" />
                                    Add Your Chapter
                                </Button>
                            </NavLink>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>


    )
}

export default CurrentBook;