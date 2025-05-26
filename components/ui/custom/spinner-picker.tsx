'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => i)

interface TimeSpinnerPickerProps {
  value?: string // "HH:mm:ss"
  onChange?: (value: string) => void
  className?: string
}

export function SpinnerPicker({
  value = '00:00:00',
  onChange,
  className,
}: TimeSpinnerPickerProps) {
  const [hour, setHour] = useState<number>(() => parseInt(value.split(':')[0]))
  const [minute, setMinute] = useState<number>(() => parseInt(value.split(':')[1]))
  const [second, setSecond] = useState<number>(() => parseInt(value.split(':')[2]))

  const handleChange = (type: 'hour' | 'minute' | 'second', val: number) => {
    const newTime = {
      hour,
      minute,
      second,
      [type]: val,
    }
    const timeString = [
      String(newTime.hour).padStart(2, '0'),
      String(newTime.minute).padStart(2, '0'),
      String(newTime.second).padStart(2, '0'),
    ].join(':')

    if (type === 'hour') setHour(val)
    if (type === 'minute') setMinute(val)
    if (type === 'second') setSecond(val)

    onChange?.(timeString)
  }

  const SpinnerColumn = ({
    label,
    values,
    selected,
    onSelect,
  }: {
    label: string
    values: number[]
    selected: number
    onSelect: (val: number) => void
  }) => (
    <div className="flex flex-col items-center">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="h-36 overflow-y-scroll no-scrollbar rounded-md border">
        <ul className="flex flex-col items-center justify-center py-2 gap-1">
          {values.map((val) => (
            <li
              key={val}
              onClick={() => onSelect(val)}
              className={cn(
                'w-10 py-1 text-center rounded-md cursor-pointer transition',
                val === selected
                  ? 'bg-sky-400 text-white font-semibold'
                  : 'text-muted-foreground hover:bg-accent'
              )}
            >
              {String(val).padStart(2, '0')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className={cn('flex gap-4', className)}>
      <SpinnerColumn
        label="Hour"
        values={range(0, 23)}
        selected={hour}
        onSelect={(val) => handleChange('hour', val)}
      />
      <SpinnerColumn
        label="Minute"
        values={range(0, 59)}
        selected={minute}
        onSelect={(val) => handleChange('minute', val)}
      />
      <SpinnerColumn
        label="Second"
        values={range(0, 59)}
        selected={second}
        onSelect={(val) => handleChange('second', val)}
      />
    </div>
  )
}
