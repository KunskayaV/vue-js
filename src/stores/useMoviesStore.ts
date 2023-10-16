import { ESearchByFilter, ESortByValues } from '@/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMoviesStore = defineStore('moviesStore', () => {
  const searchValue = ref<string>('')
  const searchByValue = ref<ESearchByFilter>(ESearchByFilter.Title)
  const sortByValue = ref<ESortByValues>(ESortByValues.Date)

  function setSearchValue(value: string) {
    searchValue.value = value
  }
  function setSearchByValue(value: ESearchByFilter) {
    searchByValue.value = value
  }
  function setSortByValue(value: ESortByValues) {
    sortByValue.value = value
  }

  return {
    searchValue,
    searchByValue,
    sortByValue,
    setSearchValue,
    setSearchByValue,
    setSortByValue
  }
})
