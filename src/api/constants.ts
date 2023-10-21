import { DATE_PROPERTY, ESearchByFilter, ESortByValues, GENRE_PROPERTY, RATING_PROPERTY, TITLE_PROPERTY } from '@/constants'

export const BASE_URL = 'https://tame-erin-pike-toga.cyclic.app'

export const searchParamsMap = {
  [ESearchByFilter.Genre]: GENRE_PROPERTY,
  [ESearchByFilter.Title]: TITLE_PROPERTY
}

export const sortParamsMap = {
  [ESortByValues.Date]: DATE_PROPERTY,
  [ESortByValues.Rating]: RATING_PROPERTY
}
