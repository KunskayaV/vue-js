<template>
  <div class="page-body">
    <header>
      <img alt="App logo" class="logo" src="@/assets/logo.png" width="100" height="30" />
    </header>
    <main>
      <section class="search-block">
        <h2 class="page-header">{{ msg }}</h2>
        <form class="row-wrapper" @submit.prevent="onSearch">
          <SearchInput v-model.trim="searchText" />
          <SearchButton label="Search" @click="onSearch"/>
        </form>
      <SwitcherComponent title="Search by" :items="searchByItems" v-model:currentValue="searchByValue" />
      </section>
      <section class="sort-bar">
        <ResultCount :count="searchResultCount"/>
        <SwitcherComponent title="Sort by" :items="sortItems" v-model:currentValue="sortValue" />
      </section>
        <ResultList :items="resultMovies">
          <template v-slot:item="{item}" >
            <MovieCard :item="item"/>
          </template>
        </ResultList>
    </main>
    <footer class="page-footer">
      <img alt="Footer logo" class="logo" src="@/assets/logo.png" width="100" height="30" />
    </footer>
  </div>
</template>


<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';

import SearchButton from '@/components/SearchButton.vue';
import SearchInput from '@/components/SearchInput.vue';
import SwitcherComponent from '@/components/SwitcherComponent.vue';
import ResultCount from '@/components/ResultCount.vue';
import ResultList from '@/components/ResultList.vue';
import MovieCard from '@/components/MovieCard.vue';
import { useSearch } from '@/composables';

import { mockedSearchByItems, mockedSortItems, mockedMovieItems } from '@/mocks/index';

withDefaults(defineProps<{ msg: string }>(), { msg: 'Find your movie' })

const searchByItems = mockedSearchByItems;
const sortItems = mockedSortItems;
const movies = mockedMovieItems;

const searchText = ref('');
const searchByValue = ref(searchByItems[0].value)
const sortValue = ref(sortItems[0].value)

const { handleSearch, filteredItems } = useSearch(movies, searchByValue);
const onSearch = () => handleSearch(searchText.value);

const resultMovies = computed(() => {
  return [...filteredItems.value].sort((a,b) => {
    const property = sortValue.value == 'rating' ? 'rating' : 'date';

    if (a[property] < b[property]) {
      return 1;
    } else {
      return -1;
    }
  });
});

const searchResultCount = computed(() => resultMovies.value.length);

watch(searchByValue, (newValue, oldValue)  => {
  if (newValue !== oldValue) {
    searchText.value = '';
  }

  onSearch();
});

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

  header {
    display: flex;
    justify-content: flex-start;
    background-color: #030303;
  }

  .page-header {
    margin-block: 24px;
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 1.5;
    text-transform: uppercase;
    color: #FFFFFF;
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

  .page-footer {
    display: flex;
    justify-content: center;
    padding-block: 24px;
  }
</style>
