<template>
  <div class="page-body">
    <header class="home-header">
      <img alt="App logo" class="logo" src="@/assets/logo.png" width="180" height="25" />
    </header>
    <main>
      <section class="search-block">
        <h2 class="page-header">Find your movie</h2>
        <form data-testid="search-form" class="row-wrapper" @submit.prevent="onSearch">
          <SearchInput v-model.trim="searchText" />
          <SearchButton label="Search" @click="onSearch" />
        </form>
        <SwitcherComponent
          title="Search by"
          :items="searchByFilters"
          v-model:currentValue="appState.searchByValue"
          @input="handleSearchByChange($event.target.value)"
        />
      </section>
      <section class="sort-bar">
        <ResultCount :count="movies.length" />
        <SwitcherComponent
          title="Sort by"
          :items="sortByItems"
          v-model:currentValue="appState.sortByValue"
          @input="handleSortByChange($event.target.value)"
        />
      </section>
      <div data-testid="loading-list" class="loading-container" v-if="!isMoviesDataLoaded">
        <span>LOADING...</span>
      </div>
      <div class="movies-list" v-else>
        <ResultsList :items="movies">
          <template v-slot:item="{ item }">
            <router-link :to="{ name: 'details', params: { id: item.id } }">
              <MovieCard :item="item" />
            </router-link>
          </template>
        </ResultsList>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import SearchButton from '@/components/SearchButton.vue'
import SearchInput from '@/components/SearchInput.vue'
import SwitcherComponent from '@/components/SwitcherComponent.vue'
import ResultCount from '@/components/ResultCount.vue'
import ResultsList from '@/components/ResultsList.vue'
import MovieCard from '@/components/MovieCard.vue'
import PageFooter from '@/components/PageFooter.vue'
import { useSearch } from '@/composables'
import { useMoviesStore } from '@/stores/useMoviesStore'
import { ESearchByFilter, ESortByValues, searchByFilters, sortByItems } from '@/constants'
import { useMovies } from '@/composables/useMovies'
import { SORT_KEY, searchParamsMap, sortParamsMap } from '@/api/constants'
import { getPartialMatchingParam } from '@/api/helpers'
import { removeSearchByFromQuery } from '@/router/helpers'

const props = defineProps<{
  sortQuery: ESortByValues | null
  searchByQuery: ESearchByFilter | null
  searchQuery: string
}>()

const router = useRouter()
const route = useRoute()
const appState = useMoviesStore()

const { movies, isMoviesDataLoaded, getMoviesData } = useMovies()

const searchText = ref('')
const searchValue = computed(() => appState.searchValue)
const searchByValue = computed(() => appState.searchByValue)
const sortByValue = computed(() => appState.sortByValue)

watch(
  [searchValue, searchByValue, sortByValue],
  ([newSearchValue, newSearchByValue], [prevSearchValue, prevSearchByValue]) => {
    if (newSearchByValue !== prevSearchByValue && !newSearchValue && !prevSearchValue) {
      return
    }
    getMoviesData()
  }
)
const handleSearchByChange = (value: ESearchByFilter) => {
  if (searchValue.value) {
    router.replace({
      query: {
        ...removeSearchByFromQuery(route.query),
        [getPartialMatchingParam(searchParamsMap[value])]: searchValue.value
      }
    })
  }
}

const handleSortByChange = (value: ESortByValues) => {
  router.replace({
    query: {
      ...route.query,
      [SORT_KEY]: sortParamsMap[value]
    }
  })
}

onMounted(() => {
  if (props.sortQuery && props.sortQuery !== sortByValue.value) {
    appState.setSortByValue(props.sortQuery)
  }
  if (props.searchByQuery && props.searchByQuery !== searchByValue.value) {
    appState.setSearchByValue(props.searchByQuery)
  }
  if (props.searchQuery) {
    searchText.value = props.searchQuery
    appState.setSearchValue(props.searchQuery)
  }
})

const { handleSearch } = useSearch()
const onSearch = () => {
  handleSearch(searchText.value)

  if (searchText.value) {
    router.replace({
      query: {
        ...route.query,
        [getPartialMatchingParam(searchParamsMap[searchByValue.value])]: searchText.value
      }
    })
  } else {
    router.replace({
      query: removeSearchByFromQuery(route.query)
    })
  }
}
</script>

<style scoped>
.page-body {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-width: 960px;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.home-header {
  display: flex;
  justify-content: flex-start;
  background-color: #030303;
  padding-top: 20px;
  padding-inline: 5%;
}

.page-header {
  margin-block: 24px;
  font-size: 2rem;
  line-height: 1.5;
  letter-spacing: 1.5;
  text-transform: uppercase;
  color: #ffffff;
}

.search-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-block: 32px;
  padding-inline: 10%;
  margin: 0 auto;
  background-color: #030303;
}

.row-wrapper {
  display: flex;
  flex-direction: 'row';
  justify-content: space-between;
  gap: 12px;
}

.sort-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 24px;
  padding-inline: 10%;
}

.loading-container {
  display: flex;
  justify-content: center;
  padding-top: 5%;
  height: 20%;
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: 1.5;
  color: white;
}

.movies-list {
  background-color: #232323;
}
</style>
