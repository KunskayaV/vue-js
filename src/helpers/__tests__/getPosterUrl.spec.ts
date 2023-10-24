import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { getPosterUrl } from '../getPosterUrl'

describe('getPosterUrl', () => {
  beforeEach(() => {
    vi.spyOn(Math, 'random').mockReturnValue(1)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return image url', () => {
    expect(getPosterUrl()).toBe(
      `https://loremflickr.com/g/320/240/poster,movie,film?random=567&lock=132`
    )
  })
})
