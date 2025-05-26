import { cn } from "@/lib/utils";
import { Hint } from "./hint";
import { Play } from "lucide-react";

type HintProps = {
 status: 'online' | 'offline'
 label: string
 isRunning?: boolean
}
export const DotStatus = ({
    status, 
    label,
    isRunning= false

}: HintProps) => {
    return ( 
        <Hint label={label}>
            {
                !isRunning 
                ?(
                    <span
                        className={cn(
                            'size-5 rounded-full block',
                            status === 'online' ? 'bg-emerald-500' : 'bg-rose-500'
                        )}
                    />

                ):(
                    <div className="flex items-center gap-1">
                        <Play className="size-4 text-emerald-500"/> 
                        <p className="text-emerald-500 text-sm">Timer</p>
                    </div>
                )
            }
        </Hint>
    );
}