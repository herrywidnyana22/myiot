import { Skeleton } from "../skeleton"
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Hint } from "./hint"

type LabelProps = {
    icon: LucideIcon
    label?: string
    size?: number
    iconColor?: string 
    fontColor?: string 
    className?: string
    hintLabel: string
}

export const Label = ({
    icon: Icon,
    label,
    size,
    hintLabel,
    iconColor = 'text-sky-400',
    fontColor = 'text-black',
    className,
}: LabelProps) => {
    return (
        <Hint label={hintLabel}>
            <div className={cn('flex gap-1 items-center', className)}>
                <Icon size={size} className={cn(iconColor)} />
                    {label !== undefined 
                    ? (
                        <p
                            className={cn('font-semibold leading-none', fontColor)}
                            style={{ fontSize: `${size}px` }}
                        >
                            {label}
                        </p>
                    ) : (
                        <Skeleton className="h-6 w-20 rounded" />
                    )
                }
            </div>

        </Hint>
    )
}