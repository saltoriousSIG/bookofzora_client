import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Sparkles, Palette, Coins, ArrowRight, Star, MessageSquare } from "lucide-react"
import Header from "@/components/header/Header"
import { NavLink } from "react-router-dom"
interface HowItWorksPageProps {
    handleGoBack: () => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ handleGoBack }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-emerald-950 dark:to-teal-950 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-40 right-8 sm:right-20 w-1 h-1 bg-teal-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
                <div className="absolute bottom-40 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-300 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-30 animation-delay-3000"></div>
            </div>

            <Header />

            <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
                <div className="mb-4">
                    <Button onClick={handleGoBack}>
                        <ArrowLeft />
                        <span>Back</span>
                    </Button>
                </div>
                <div className="text-center mb-8 sm:mb-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
                    <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-emerald-200/50 shadow-2xl shadow-emerald-500/10">
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                                    <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full flex items-center justify-center">
                                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent mb-4 sm:mb-6 text-balance">
                            How It Works
                        </h1>
                        <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                            Discover how collaborative storytelling transforms individual ideas into legendary tales
                        </p>
                    </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    {/* Step 1 */}
                    <Card className="border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/50 dark:from-slate-800 dark:to-emerald-950/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                        <CardContent className="p-4 sm:p-8">
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
                                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="space-y-2 sm:space-y-3 flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. Drop Your Story Beat</h2>
                                        <Badge className="bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-sm w-fit">
                                            280 characters
                                        </Badge>
                                    </div>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        Share your creative vision in a short, tweet-like story beat. Each beat is a plot point that shapes
                                        how the collaborative story unfolds. Think of it as adding your unique voice to an ever-evolving
                                        narrative.
                                    </p>
                                    <div className="bg-emerald-50/50 dark:bg-emerald-950/50 p-3 sm:p-4 rounded-lg border-l-4 border-emerald-500">
                                        <p className="text-xs sm:text-sm text-muted-foreground italic">
                                            "The ancient door creaks open, revealing a library where books write themselves. Sarah steps
                                            inside, and the stories begin whispering her name."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Arrow */}
                    <div className="flex justify-center">
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                    </div>

                    {/* Step 2 */}
                    <Card className="border-teal-200/50 bg-gradient-to-br from-white to-teal-50/30 dark:from-slate-900 dark:to-teal-950/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
                        <CardContent className="p-4 sm:p-8">
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25">
                                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="space-y-2 sm:space-y-3 flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. AI Transforms Your Beat</h2>
                                        <Badge className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-sm w-fit">
                                            800 words
                                        </Badge>
                                    </div>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        Our AI takes your story beat and weaves it into a full chapter, maintaining narrative flow while
                                        honoring your creative contribution. Each beat becomes a rich, detailed part of the larger story.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div className="bg-teal-50/50 dark:bg-teal-950/50 p-3 sm:p-4 rounded-lg">
                                            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Your Beat</h4>
                                            <p className="text-xs sm:text-sm text-muted-foreground">
                                                "Sarah discovers the library's secret..."
                                            </p>
                                        </div>
                                        <div className="bg-emerald-50/50 dark:bg-emerald-950/50 p-3 sm:p-4 rounded-lg">
                                            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">AI Chapter</h4>
                                            <p className="text-xs sm:text-sm text-muted-foreground">
                                                "A full 800-word chapter exploring Sarah's discovery..."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Arrow */}
                    <div className="flex justify-center">
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                    </div>

                    {/* Step 3 */}
                    <Card className="border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/50 dark:from-slate-800 dark:to-emerald-950/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                        <CardContent className="p-4 sm:p-8">
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
                                    <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="space-y-2 sm:space-y-3 flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. Storyboard Art is Created</h2>
                                        <Badge className="bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-sm w-fit">
                                            AI-generated
                                        </Badge>
                                    </div>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        Each chapter gets beautiful AI-generated storyboard artwork that brings the narrative to life
                                        visually. These illustrations capture key moments and emotions from the collaborative story.
                                    </p>
                                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                        <div className="aspect-square bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-800 to-teal-800 rounded-lg flex items-center justify-center">
                                            <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <div className="aspect-square bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-800 to-emerald-800 rounded-lg flex items-center justify-center">
                                            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 dark:text-teal-400" />
                                        </div>
                                        <div className="aspect-square bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-800 to-teal-800 rounded-lg flex items-center justify-center">
                                            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Arrow */}
                    <div className="flex justify-center">
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                    </div>

                    {/* Step 4 */}
                    <Card className="border-teal-200/50 bg-gradient-to-br from-white to-teal-50/30 dark:from-slate-900 dark:to-teal-950/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
                        <CardContent className="p-4 sm:p-8">
                            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25">
                                    <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="space-y-2 sm:space-y-3 flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Unlock the Complete Experience</h2>
                                        <Badge className="bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-sm w-fit">
                                            $1-5
                                        </Badge>
                                    </div>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        Purchase a storyboard NFT on Zora to unlock the complete chapter experience: the full written story,
                                        all artwork, and AI-generated animations. Plus, you gain the ability to contribute your own story
                                        beats!
                                    </p>
                                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/50 dark:to-emerald-950/50 p-3 sm:p-4 rounded-lg border border-teal-200/50 dark:border-teal-800/50">
                                        <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">What You Get:</h4>
                                        <ul className="text-xs sm:text-sm text-foreground space-y-1">
                                            <li>• Complete written chapter</li>
                                            <li>• High-resolution storyboard art</li>
                                            <li>• AI-generated animations</li>
                                            <li>• Ability to submit story beats</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8 sm:mt-12 text-center">
                    <Card className="border-emerald-200/50 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/50 dark:to-teal-950/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                        <CardContent className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ready to Shape the Story?</h3>
                            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                                Join our collaborative storytelling community and help create the next legendary tale. Every beat
                                matters, every voice counts.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                                <NavLink to="/add_beat">
                                    <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 shadow-lg shadow-emerald-500/25">
                                        <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Drop Your Story Beat
                                    </Button>
                                </NavLink>
                                <NavLink to="/">
                                    <Button
                                        variant="outline"
                                        className="w-full sm:w-auto border-emerald-300 text-foreground hover:bg-emerald-50 dark:border-emerald-700 dark:text-foreground dark:hover:bg-emerald-950/50 px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent"
                                    >
                                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        View Current Story
                                    </Button>
                                </NavLink>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default HowItWorksPage;