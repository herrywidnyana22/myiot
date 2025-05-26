export function stringConverter(stringValue: string) {
  if (!stringValue) return 'Dashboard'

  return stringValue
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}