import React from "react";
import { Button } from "../ui/button";
import { Users, Heart, Feather, PenTool, BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";

interface SplashProps { }

const Splash: React.FC<SplashProps> = () => {

    return (
        <div className="text-center mb-4 animate-bounce-in">
            <div className="relative p-8 md:p-12">
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-xl -rotate-6 animate-wiggle">
                            <Users className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <Heart className="w-4 h-4 text-white" />
                        </div>
                        <div
                            className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md animate-float"
                            style={{ animationDelay: "1s" }}
                        >
                            <Feather className="w-3 h-3 text-white" />
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Build Stories Together</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-muted-foreground mb-6 text-balance">
                    With Your Community
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
                    Start with a title → Community adds 600 words each → AI creates illustrated masterpiece → Everyone shares
                    profits from NFT sales
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <NavLink to='/add_beat' className="h-full w-full">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-xl mobile-tap touch-target w-full sm:w-auto ink-splash border-0"
                        >
                            <PenTool className="w-5 h-5 mr-3" />
                            Start Writing Now
                        </Button>

                    </NavLink>
                    <NavLink to="/how_it_works" className="h-full w-full">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-full mobile-tap touch-target w-full sm:w-auto bg-white/80"
                        >
                            <BookOpen className="w-5 h-5 mr-3" />
                            How It Works
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>

    );

}

export default Splash;
