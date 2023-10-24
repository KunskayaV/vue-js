import { describe, it, expect } from 'vitest'
import { getYearFromDate } from '../getYearFromDate'

describe('getDuration', () => {
  it.each([
    ['2022-10-04', 2022],
    ['1999-05-15', 1999]
  ])('should return year of the date', (date: string, result: number) => {
    expect(getYearFromDate(date)).toBe(result)
  })
})
