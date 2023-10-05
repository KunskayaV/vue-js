export enum ESearchByFilter {
  Title = 'title',
  Genre = 'genre'
}

export const TITLE_PROPERTY = 'title'
export const GENRE_PROPERTY = 'genres'
export const RATING_PROPERTY = 'averageRating'
export const DATE_PROPERTY = 'year'

export const searchByFilters = [
  {
    name: 'searchBy',
    value: ESearchByFilter.Title,
    label: 'Title'
  },
  {
    name: 'searchBy',
    value: ESearchByFilter.Genre,
    label: 'Genre'
  }
]

export enum ESortByValues {
  Date = 'date',
  Rating = 'rating'
}

export const sortByItems = [
  {
    name: 'sortBy',
    value: ESortByValues.Date,
    label: 'Release date'
  },
  {
    name: 'sortBy',
    value: ESortByValues.Rating,
    label: 'Rating'
  }
]

export const MATCH_MOVIES_LENGTH = 6
