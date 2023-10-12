export function getDuration(duration: string): string {
  return duration.match(/PT(\d+)M/)?.[1] || ''
}
