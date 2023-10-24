import { describe, it, expect } from 'vitest'
import { getDuration } from '../getDuration'

describe('getDuration', () => {
  it.each([
    ['PT120M', '120'],
    ['PT90M', '90'],
    ['PT240M', '240'],
    ['30', '']
  ])(
    'should return duration string or empty string as fallback',
    (duration: string, result: string) => {
      expect(getDuration(duration)).toBe(result)
    }
  )
})
