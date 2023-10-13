import { describe, it, expect } from 'vitest'
import { getItemGenreLine } from '../getItemGenreLine'

describe('getPosterUrl', () => {
  it.each([
    [['Crime', 'Drama'], 'Crime & Drama'],
    [['Action'], 'Action'],
    [[], '']
  ])('should return genre string', (genres: string[], result: string) => {
    expect(getItemGenreLine(genres)).toBe(result)
  })
})
