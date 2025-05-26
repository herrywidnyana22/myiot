'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils' // Make sure you have this

type HintProps = {
  label: string
  children: ReactNode
  className?: string
}

export function Hint({ label, children, className }: HintProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
            asChild
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onTouchStart={(e) => {
            e.preventDefault()
            setOpen((prev) => !prev)
            }}
        >
            {children}
        </PopoverTrigger>
        <PopoverContent
            side="top"
            align="center"
            sideOffset={6}
            className={cn(
                'px-3 py-1.5 rounded-md text-sm shadow-md border z-50 animate-fade-in max-w-fit w-auto break-words bg-black text-neutral-200',
                className
            )}
        >
            {label}
        </PopoverContent>

    </Popover>
  )
}
