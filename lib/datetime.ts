export function getFormattedDateTime(): string {
  const now = new Date()

  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')

  return `${day}-${month}-${year} ${hours}:${minutes}`
}

export function getTimeDistanceFromNow(schedule: string): string {
  const dateTimeRegex = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/

  if (!dateTimeRegex.test(schedule)) {
    return 'Format tidak valid (harus dd-mm-yyyy hh:mm)'
  }

  const [datePart, timePart] = schedule.split(' ')
  const [day, month, year] = datePart.split('-').map(Number)
  const [hour, minute] = timePart.split(':').map(Number)

  const scheduleDate = new Date(year, month - 1, day, hour, minute)
  if (isNaN(scheduleDate.getTime())) {
    return 'Tanggal tidak valid'
  }

  const now = new Date()
  const diffMs = scheduleDate.getTime() - now.getTime()
  const diffMinutes = Math.floor(Math.abs(diffMs) / (1000 * 60))

  const days = Math.floor(diffMinutes / (60 * 24))
  const hours = Math.floor((diffMinutes % (60 * 24)) / 60)
  const minutes = diffMinutes % 60

  const timeString = [
    days > 0 ? `${days} hari` : '',
    hours > 0 ? `${hours} jam` : '',
    minutes > 0 && days === 0 ? `${minutes} menit` : '',
  ]
    .filter(Boolean)
    .join(', ')

  return diffMs > 0
    ? `${timeString} lagi`
    : `${timeString} yang lalu`
}

