import { searchParamsMap, sortParamsMap } from '@/api/constants'

export const swapOobject = (object: Record<string, string>) => {
  return Object.entries(object).reduce(
    (acc, [k, v]) => {
      acc[v] = k

      return acc
    },
    {} as Record<string, string>
  )
}

export const searchQueryMap = swapOobject(searchParamsMap)
export const sortQueryMap = swapOobject(sortParamsMap)
