export function getPosterUrl(): string {
  const random = Math.floor(Math.random() * 567)
  const lock = Math.floor(Math.random() * 132)

  return `https://loremflickr.com/g/320/240/poster,movie,film?random=${random}&lock=${lock}`
}
