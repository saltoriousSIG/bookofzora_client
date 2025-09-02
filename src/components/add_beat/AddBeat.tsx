import React, { useState, useCallback, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Zap, Sparkles, Send, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Textarea } from "../ui/textarea";
import useContract, { ExecutionType } from "@/hooks/useContract";
import { useBooks } from "@/providers/BookProvider";
import { useFrameContext } from "@/providers/FrameProvider";
import { USDC_ADDRESS, DIAMOND_ADDRESS } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import axios from "axios";

interface AddBeatProps { }

const AddBeat: React.FC<AddBeatProps> = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [isPurchasing, setIsPurchasing] = useState<boolean>(false);
    const [beatText, setBeatText] = useState("")
    const [beatTitle, setBeatTitle] = useState("")
    const [isAuthor, setIsAuthor] = useState<boolean>();
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [dialogTitle, setDialogTitle] = useState<string>();
    const [dialogContent, setDialogContent] = useState<string>();

    const { currentBook, bookOfZoraSettings, fetch_data } = useBooks();
    const { address, fUser } = useFrameContext();

    const maxLength = 280
    const maxTitleLength = 60
    const remainingChars = maxLength - beatText.length
    const remainingTitleChars = maxTitleLength - beatTitle.length
    const progressValue = (beatText.length / maxLength) * 100
    console.log(currentBook?.authors);

    const is_author = useContract(ExecutionType.READABLE, "Data", "is_author");
    const approve_usdc = useContract(ExecutionType.WRITABLE, "ERC20", "approve", USDC_ADDRESS)
    const check_allowance = useContract(ExecutionType.READABLE, "ERC20", "allowance", USDC_ADDRESS);
    const purchase_chapter = useContract(ExecutionType.WRITABLE, "Chapter", "purchase_chapter");
    const submit_chapter = useContract(ExecutionType.WRITABLE, "Chapter", "submit_chapter");

    useEffect(() => {
        if (!currentBook || !address) return;
        const load = async () => {
            const is_user_author = await is_author([currentBook.id, address]);
            setIsAuthor(is_user_author);
        }
        load();
    }, [currentBook, address, is_author]);

    const purchase = useCallback(async () => {
        if (!bookOfZoraSettings || !currentBook || !fUser) return;
        setIsPurchasing(true)
        try {
            const allowance = await check_allowance([address, DIAMOND_ADDRESS]);
            if (allowance < bookOfZoraSettings.chapter_price) {
                await approve_usdc([DIAMOND_ADDRESS, bookOfZoraSettings.chapter_price]);
            }
            await purchase_chapter([currentBook.id, fUser.fid]);
            setDialogTitle("Transaction Successful");
            setDialogContent("Your slot has been purchased. Continue writing below")
            setIsAuthor(true);
            setShowDialog(true);
        } catch (e: any) {
            console.log(e, e.message);
        } finally {
            await fetch_data();
            setIsPurchasing(false);
        }
    }, [bookOfZoraSettings, currentBook, fUser, approve_usdc, purchase_chapter, check_allowance]);


    const handleSubmit = useCallback(async () => {
        if (!currentBook || !fUser) return;
        setIsSubmitting(true)
        let res_hash;
        try {
            const { data: { hash } } = await axios.post('/api/post_cast', {
                text: beatText + ` - @${fUser.username}`
            });
            res_hash = hash;
            await submit_chapter([currentBook.id, beatTitle, hash]);
            setDialogTitle("Beat Submitted")
            setDialogContent("Your Beat has successfully been submitted");
            setShowDialog(true)
        } catch (e: any) {
            if (res_hash) {
                await axios.post("/api/delete_cast", {
                    target_hash: res_hash
                });
            }
        } finally {
            await fetch_data();
            setIsSubmitting(false);
        }
    }, [currentBook, fUser, beatText, beatTitle]);

    return (
        <>
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <DialogTitle className="text-lg font-semibold text-green-800 dark:text-green-200">
                                    {dialogTitle}
                                </DialogTitle>
                            </div>
                        </div>
                        <DialogDescription className="text-green-700 dark:text-green-300">
                            {dialogContent}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end pt-4">
                        <Button
                            onClick={() => setShowDialog(false)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                        >
                            Continue Writing
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
            {!currentBook?.authors.some((a) => a.author_address === address) ? (

                <Card className="border-teal-200/50 bg-gradient-to-br from-white to-teal-50/50 dark:from-slate-800 dark:to-teal-950/50">
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2 text-foreground">
                            <Zap className="w-5 h-5 text-teal-600" />
                            Your Story Beat
                        </CardTitle>
                        <CardDescription>
                            What happens next? Give it a title and keep the content under {maxLength} characters.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {!isAuthor && (
                                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/50 rounded-lg p-4 border border-teal-200/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                                            <Sparkles className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-teal-800 dark:text-teal-200 text-sm">
                                                Join the Story for $1
                                            </h3>
                                            <p className="text-xs text-teal-700 dark:text-teal-300">
                                                Unlock your creative voice and help shape this legendary tale
                                            </p>
                                        </div>
                                        <Button
                                            onClick={purchase}
                                            size="sm"
                                            className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xs px-3 py-1"
                                        >
                                            {isPurchasing ?
                                                (<>
                                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                    Purchasing Slot...
                                                </>)
                                                : "Unlock Access"}
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Beat title input field */}

                            <>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Beat Title</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="The Ancient Awakening"
                                            value={beatTitle}
                                            onChange={(e) => setBeatTitle(e.target.value)}
                                            className="w-full px-3 py-2 border rounded-md text-base border-teal-200 focus:border-teal-400 focus:ring-teal-400 focus:ring-1"
                                            maxLength={maxTitleLength}
                                        />
                                        <div className="absolute bottom-2 right-3 text-xs text-muted-foreground">
                                            {remainingTitleChars} remaining
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Beat Content</label>
                                    <div className="relative">
                                        <Textarea
                                            placeholder="The ground trembled as something ancient awakened beneath the library..."
                                            value={beatText}
                                            onChange={(e) => setBeatText(e.target.value)}
                                            className="min-h-[120px] text-base leading-relaxed resize-none border-teal-200 focus:border-teal-400 focus:ring-teal-400"
                                            maxLength={maxLength}
                                        />
                                        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                                            {beatText.length}/{maxLength}
                                        </div>
                                    </div>
                                </div>

                                {/* Character count progress */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Character Count</span>
                                        <span
                                            className={`font-medium ${remainingChars < 20 ? "text-amber-600" : remainingChars < 0 ? "text-red-600" : "text-teal-600"}`}
                                        >
                                            {remainingChars} remaining
                                        </span>
                                    </div>
                                    <Progress
                                        value={progressValue}
                                        className={`h-2 ${progressValue > 90 ? "bg-amber-100" : "bg-teal-100"}`}
                                    />
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    disabled={
                                        beatText.trim().length === 0 ||
                                        beatTitle.trim().length === 0 ||
                                        beatText.length > maxLength ||
                                        beatTitle.length > maxTitleLength ||
                                        isSubmitting ||
                                        !isAuthor
                                    }
                                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-3 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                            Submitting Beat...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Submit Story Beat
                                        </>
                                    )}
                                </Button>
                            </>

                        </div>
                    </CardContent>
                </Card>
            ) : (
                <Card className="border-teal-200/50 bg-gradient-to-br from-white to-teal-50/50 dark:from-slate-800 dark:to-teal-950/50">
                    <CardHeader>
                        <CardTitle>
                            Beat Submitted for this Book
                        </CardTitle>
                    </CardHeader>
                </Card>
            )}

        </>
    );
}

export default AddBeat;