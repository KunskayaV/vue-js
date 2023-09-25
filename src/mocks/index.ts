import type { TMovie } from "@/types";

export const mockedSearchByItems = [
  {
    name: 'searchBy',
    value: 'title',
    label: 'Title'
  },
  {
    name: 'searchBy',
    value: 'genre',
    label: 'Genre'
  }
];

export const mockedSortItems = [
  {
    name: 'sortBy',
    value: 'date',
    label: 'Release date'
  },
  {
    name: 'sortBy',
    value: 'rating',
    label: 'Rating'
  }
];

export const mockedMovieItems: TMovie[] = [
  {
    id: 1,
    posterUrl: 'https://loremflickr.com/g/320/240/poster,movie,film?random=1&lock=1',
    name: 'Four rooms',
    description: 'some long movie',
    shortDescription: 'some movie',
    genre: 'Action & Adventure',
    date: "2004-12-22",
    rating: 12,
  },
  {
    id: 2,
    posterUrl: 'https://loremflickr.com/g/320/240/poster,movie,film?random=2&lock=2',
    name: 'Jackie Brown',
    description: 'some long movie',
    shortDescription: 'some movie',
    genre: 'Action & Adventure',
    date: "2003-12-22",
    rating: 1,
  },
  {
    id: 3,
    posterUrl: 'https://loremflickr.com/g/320/240/poster,movie,film?random=3&lock=3',
    name: 'Kill Bill: Vol 2',
    description: 'some long movie',
    shortDescription: 'some movie',
    genre: 'Oscar winning movie',
    date: "1994-12-22",
    rating: 9,
  },
  {
    id: 4,
    posterUrl: 'https://loremflickr.com/g/320/240/poster,movie,film?random=4&lock=4',
    name: 'Pulp Fiction',
    description: 'some long movie',
    shortDescription: 'some movie',
    genre: 'Action & Adventure',
    date: "2004-12-22",
    rating: 8,
  },
  {
    id: 5,
    posterUrl: 'https://loremflickr.com/g/320/240/poster,movie,film?random=5&lock=5',
    name: 'Kill Bill: Vol 1',
    description: 'some long movie',
    shortDescription: 'some movie',
    genre: 'Action & Adventure',
    date: "2003-12-22",
    rating: 5,
  },
  {
    id: 6,
    posterUrl: 'https://loremflickr.com/g/320/240/poster,movie,film?random=6&lock=6',
    name: 'Reservoir dogs',
    description: 'some long movie',
    shortDescription: 'some movie',
    genre: 'Oscar winning movie',
    date: "1994-12-22",
    rating: 2,
  },
];
