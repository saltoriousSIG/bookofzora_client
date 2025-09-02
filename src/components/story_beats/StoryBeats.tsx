import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { MessageSquare, Star } from "lucide-react";
import { Beat } from "@/types/beats.type";
import { useBooks } from "@/providers/BookProvider";
import { HydratedChapter } from "@/providers/BookProvider";

interface StoryBeatsProps {
    beats: Beat[]
}


const StoryBeats: React.FC<StoryBeatsProps> = ({ beats }) => {
    const { chapter_data } = useBooks();

    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">Recent Story Beats</h3>
                </div>
            </div>

            <div className="space-y-4">
                {chapter_data.map((beat, index) => (
                    <Card
                        key={index}
                        className="hover:shadow-lg transition-all duration-300 border-teal-200/50 bg-gradient-to-r from-white to-teal-50/30 dark:from-slate-800 dark:to-teal-950/30"
                    >
                        <CardContent className="p-4">
                            <div className="flex gap-3">
                                <img
                                    src={beat.avatar || "/placeholder.svg"}
                                    alt={beat.author}
                                    className="w-10 h-10 rounded-full border-2 border-teal-300"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-semibold text-foreground">{beat.author}</span>
                                        <span className="text-sm text-muted-foreground">{beat.timestamp.toDateString()}</span>
                                    </div>
                                    <p className="text-foreground leading-relaxed mb-3">{beat.text}</p>
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-teal-600 transition-colors">
                                            <Star className="w-4 h-4" />
                                            {beat.likes}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

    );
}

export default StoryBeats;