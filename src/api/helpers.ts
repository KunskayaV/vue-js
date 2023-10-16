import { PARTIAL_MATCH_TAIL } from './constants'

export function getPartialMatchingParam(param: string): string {
  return `${param}${PARTIAL_MATCH_TAIL}`
}

export function removePartialMatchingTail(param: string): string {
  return param.replace(PARTIAL_MATCH_TAIL, '')
}
