import Header from "@/components/header/Header"
import StoryBeats from "@/components/story_beats/StoryBeats"
import { useBooks } from "@/providers/BookProvider"
import CurrentBook from "@/components/current_book/CurrentBook"
import Splash from "@/components/splash/Splash"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, Scroll } from "lucide-react"
import sdk from "@farcaster/frame-sdk"

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

                <section>
                    <div className="text-center">
                        <Card className="border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/50 dark:from-slate-800 dark:to-emerald-950/50 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5"></div>
                            <CardContent className="relative p-12 flex flex-col items-center justify-center">
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                                        <Scroll className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
                                    Collect each chapter
                                </h3>

                                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                                    Discover our full collection of collaborative masterpieces, complete with AI-generated illustrations
                                    and animations. Own a piece of literary history.
                                </p>

                                <a
                                    href="https://zora.co/collect/base:thebookofzora"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Button
                                        onClick={() => sdk.actions.openUrl("https://zora.co/@thebookofzora")}
                                        size="lg"
                                        className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 border-0"
                                    >
                                        <Coins className="w-5 h-5 mr-3" />
                                        Visit Book of Zora Collection
                                    </Button>
                                </a>

                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
        </div>
    )
}