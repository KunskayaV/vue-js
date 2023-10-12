<template>
  <div class="page-body">
    <header class="home-header">
      <img alt="App logo" class="logo" src="@/assets/logo.png" width="180" height="25" />
    </header>
    <main>
      <section class="search-block">
        <h2 class="page-header">{{ msg }}</h2>
        <form class="row-wrapper" @submit.prevent="onSearch">
          <SearchInput v-model.trim="searchText" />
          <SearchButton label="Search" @click="onSearch" />
        </form>
        <SwitcherComponent
          title="Search by"
          :items="searchByFilters"
          v-model:currentValue="appState.searchByValue"
        />
      </section>
      <section class="sort-bar">
        <ResultCount :count="appState.movies.length" />
        <SwitcherComponent
          title="Sort by"
          :items="sortByItems"
          v-model:currentValue="appState.sortByValue"
        />
      </section>
      <div class="loading-container" v-if="!appState.isMoviesDataLoaded">
        <span>LOADING...</span>
      </div>
      <div class="movies-list" v-else>
        <ResultsList :items="appState.movies">
          <template v-slot:item="{ item }">
            <MovieCard :item="item" />
          </template>
        </ResultsList>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import SearchButton from '@/components/SearchButton.vue'
import SearchInput from '@/components/SearchInput.vue'
import SwitcherComponent from '@/components/SwitcherComponent.vue'
import ResultCount from '@/components/ResultCount.vue'
import ResultsList from '@/components/ResultsList.vue'
import MovieCard from '@/components/MovieCard.vue'
import PageFooter from '@/components/PageFooter.vue'
import { useSearch } from '@/composables'
import { useMoviesStore } from '@/stores/useMoviesStore'
import { searchByFilters, sortByItems } from '@/constants'

withDefaults(defineProps<{ msg: string }>(), { msg: 'Find your movie' })

const appState = useMoviesStore()
const searchText = ref('')

onMounted(() => {
  appState.getMoviesData()
})

const { handleSearch } = useSearch()
const onSearch = () => handleSearch(searchText.value)
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
