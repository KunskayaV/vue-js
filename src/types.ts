import { ESortByValues, ESearchByFilter } from './constants'

export type TMovie = {
  id: number
  year: string
  genres: string[]
  ratings: number[]
  poster: string
  contentRating: string
  duration: string
  releaseDate: string
  averageRating: number
  storyline: string
  actors: string[]
  imdbRating: number
  posterurl: string
  title: string
}

export type TRequestParams = {
  sortBy: ESortByValues
  searchBy: ESearchByFilter
  filter: string
}
