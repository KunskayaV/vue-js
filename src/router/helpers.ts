import { getPartialMatchingParam } from '@/api/helpers'
import { GENRE_PROPERTY, TITLE_PROPERTY } from '@/constants'
import type { LocationQuery } from 'vue-router'

export function removeSearchByFromQuery(query: LocationQuery): LocationQuery {
  const newQuery = { ...query }
  delete newQuery[getPartialMatchingParam(GENRE_PROPERTY)]
  delete newQuery[getPartialMatchingParam(TITLE_PROPERTY)]

  return newQuery
}

export function getSearchByKeyFromQuery(query: LocationQuery): string {
  if (getPartialMatchingParam(GENRE_PROPERTY) in query) {
    return GENRE_PROPERTY
  } else {
    return TITLE_PROPERTY
  }
}
