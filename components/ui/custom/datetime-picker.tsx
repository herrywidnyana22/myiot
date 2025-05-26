'use client'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useId } from 'react'

interface DateTimePickerProps {
  label?: string
  value?: string // ISO string like '2025-05-25T20:00:00'
  onChange?: (value: string) => void
  className?: string
  labelClassName?: string
  inputClassName?: string
  required?: boolean
  disabled?: boolean
}

export function DateTimePicker({
  label,
  value,
  onChange,
  className,
  labelClassName,
  inputClassName,
  required,
  disabled,
}: DateTimePickerProps) {
  const id = useId()

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <Label htmlFor={id} className={cn('text-sm font-medium', labelClassName)}>
          {label}
        </Label>
      )}
      <input
        id={id}
        type="datetime-local"
        step="1" // Enables seconds
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        disabled={disabled}
        className={cn(
          'border border-input rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring',
          inputClassName
        )}
      />
    </div>
  )
}
