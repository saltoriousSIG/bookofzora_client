import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Sparkles, Clock, TrendingUp } from "lucide-react"
import Header from "@/components/header/Header"
import { useBooks } from "@/providers/BookProvider"
import AddBeat from "@/components/add_beat/AddBeat"

const tips = [
    "Build on the previous beat - read what came before",
    "Keep it under 280 characters like a tweet",
    "Add plot twists, character moments, or world-building",
    "Think cinematically - what would look great illustrated?",
]

interface AddBeatPageProps {
    handleGoBack: () => void;

}

const AddBeatPage: React.FC<AddBeatPageProps> = ({ handleGoBack }) => {
    const { currentBook, chapter_data } = useBooks();

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-emerald-950 dark:to-teal-950 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
                <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
            </div>

            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 relative z-10">
                <div className="mb-4">
                    <Button onClick={handleGoBack} className="flex items-center justify-center">
                        <ArrowLeft />
                        &nbsp;
                        <span>Back</span>
                    </Button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main submission area */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Current story context */}
                        <Card className="border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/50 dark:from-slate-800 dark:to-emerald-950/50">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl text-foreground">{currentBook?.title}</CardTitle>
                                    <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200">
                                        <Sparkles className="w-3 h-3 mr-1" />
                                        Active
                                    </Badge>
                                </div>

                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-muted-foreground font-medium">Story Progress</span>
                                            <span className="font-bold text-emerald-700">
                                                {currentBook?.chapters.length} / 10 chapters
                                            </span>
                                        </div>
                                        <Progress
                                            value={(currentBook?.chapters.length || 0 / 10) * 100}
                                            className="h-2 bg-emerald-100 dark:bg-emerald-900"
                                        />
                                    </div>

                                    <div className="bg-emerald-50/50 dark:bg-emerald-950/50 rounded-lg p-4">
                                        <p className="text-sm text-muted-foreground mb-2">Story Context:</p>
                                        <p className="text-foreground leading-relaxed">{currentBook?.description}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Beat submission form */}

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6 mb-6">
                        {/* Recent beats */}
                        <Card className="border-cyan-200/50 bg-gradient-to-br from-white to-cyan-50/50 dark:from-slate-800 dark:to-cyan-950/50">
                            <CardHeader>
                                <CardTitle className="text-lg text-foreground flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-cyan-600" />
                                    All Story Beats
                                </CardTitle>
                                <CardDescription>Read the full story progression</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4 max-h-96 overflow-y-auto">
                                    {chapter_data.map((beat, index) => (
                                        <div key={index} className="border-l-2 border-cyan-200 pl-3 py-2">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full font-medium">
                                                    Beat {chapter_data.length - index}
                                                </span>
                                                <span className="text-sm font-medium text-foreground">{beat.author}</span>
                                                <span className="text-xs text-muted-foreground">{beat.timestamp.toDateString()}</span>
                                            </div>
                                            <h4 className="text-sm font-semibold text-foreground mb-1">{beat.title}</h4>
                                            <p className="text-sm text-foreground leading-relaxed">{beat.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <AddBeat />

                        {/* Writing tips */}
                        <Card className="border-amber-200/50 bg-gradient-to-br from-white to-amber-50/50 dark:from-slate-800 dark:to-amber-950/50">
                            <CardHeader>
                                <CardTitle className="text-lg text-foreground flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-amber-600" />
                                    Writing Tips
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {tips.map((tip, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm">
                                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-foreground leading-relaxed">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddBeatPage;