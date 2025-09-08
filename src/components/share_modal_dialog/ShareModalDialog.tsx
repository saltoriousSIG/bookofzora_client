import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { MessageSquare } from "lucide-react";

interface ShareModalDialogProps {
    beatTitle: string;
    open: boolean;
    setOpen: (state: boolean) => void;
}

const ShareModalDialog: React.FC<ShareModalDialogProps> = ({ beatTitle, open, setOpen }) => {

    const handleShareToFarcaster = () => {

    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full flex items-center justify-center">
                            <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <DialogTitle className="text-lg font-semibold text-purple-800 dark:text-purple-200">
                                Beat Submitted Successfully!
                            </DialogTitle>
                        </div>
                    </div>
                    <DialogDescription className="text-purple-700 dark:text-purple-300">
                        Your story beat "{beatTitle}" has been added to the collaborative tale. Share it with your
                        Farcaster community!
                    </DialogDescription>
                </DialogHeader>
                <div className="flex gap-3 pt-4">
                    <Button
                        onClick={handleShareToFarcaster}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Share on Farcaster
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                        className="border-purple-200 text-purple-700 hover:bg-purple-50"
                    >
                        Skip
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ShareModalDialog;