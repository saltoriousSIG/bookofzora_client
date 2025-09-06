import React from "react"
import { BookOpen, Feather, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFrameContext } from "@/providers/FrameProvider"
import { Badge } from "@/components/ui/badge"

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    const { fUser, isConnected, connect } = useFrameContext();
    return (
        <header className="border-b border-border bg-background/80 backdrop-blur-sm top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 animate-bounce-in">
                        <div className="relative">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg rotate-12 ink-splash">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center animate-float">
                                <Feather className="w-2 h-2 text-white" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-primary-gradient">Book of Zora</h1>
                            <p className="text-sm text-muted-foreground">Collaborative Stories</p>
                        </div>
                    </div>

                    {!isConnected ? (
                        <Button onClick={() => connect()} className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full shadow-lg mobile-tap touch-target">
                            <Zap className="w-4 h-4 mr-2" />
                            Connect
                        </Button>
                    ) : (
                        <div className="flex items-center gap-1 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border border-emerald-200/50 rounded-lg px-2 py-1 shadow-sm">
                            <div className="absolute top-3 right-2">
                                <Badge className="bg-emerald-100 text-emerald-700 text-xs px-1.5 py-0.5">

                                    <Feather className="w-3 h-3 mr-1" />
                                    10
                                </Badge>
                            </div>
                            <div className="relative">
                                <img
                                    src={fUser?.pfpUrl || "/placeholder.svg"}
                                    alt={fUser?.displayName}
                                    className="w-8 h-8 rounded-full border-2 border-emerald-300"
                                />
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>

                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="font-medium text-foreground text-sm">{fUser?.username}</span>

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </header>
    )
}

export default Header;