export enum ESearchByFilter {
  Title = 'title',
  Genre = 'genre'
}

export const TITLE_PROPERTY = 'title'
export const GENRE_PROPERTY = 'genres'
export const RATING_PROPERTY = 'averageRating'
export const DATE_PROPERTY = 'year'

export const SEARCH_BY_TYPE = 'searchBy'
export const SORT_BY_TYPE = 'sortBy'

export const searchByFilters = [
  {
    name: SEARCH_BY_TYPE,
    value: ESearchByFilter.Title,
    label: 'Title'
  },
  {
    name: SEARCH_BY_TYPE,
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
    name: SORT_BY_TYPE,
    value: ESortByValues.Date,
    label: 'Release date'
  },
  {
    name: SORT_BY_TYPE,
    value: ESortByValues.Rating,
    label: 'Rating'
  }
]

export const MATCH_MOVIES_LENGTH = 6
