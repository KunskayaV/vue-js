import type { TMovie } from '@/types'
import apiClient from './apiClient'
import queryString from 'query-string'

import type { TRequestParams } from '@/types'
import { searchParamsMap, sortParamsMap } from './constants'

export async function getMovies(params: TRequestParams): Promise<TMovie[]> {
  const searchParam = searchParamsMap[params.searchBy]
  const sortParam = sortParamsMap[params.sortBy]

  const query = queryString.stringify({
    _sort: sortParam,
    _order: 'asc'
  })

  const response = await apiClient.get(
    `/movies?${query}${params.filter && `&${searchParam}_like=${params.filter}`}`
  )

  return response.data
}
