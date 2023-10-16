import queryString from 'query-string'

import type { TMovie } from '@/types'
import apiClient from '../client/apiClient'

import type { TRequestParams } from '@/types'
import { ORDER_KEY, SORT_KEY, searchParamsMap, sortParamsMap } from '../constants'
import { getPartialMatchingParam } from '../helpers'

export async function getMovies(params: TRequestParams): Promise<TMovie[]> {
  const searchParam = searchParamsMap[params.searchBy]
  const sortParam = sortParamsMap[params.sortBy]

  const query = queryString.stringify({
    [SORT_KEY]: sortParam,
    [ORDER_KEY]: 'asc'
  })

  const response = await apiClient.get(
    `/movies?${query}${
      params.filter && `&${getPartialMatchingParam(searchParam)}=${params.filter}`
    }`
  )

  return response.data
}
