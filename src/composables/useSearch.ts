import { type Ref, computed, type ComputedRef, ref, onMounted } from "vue";
import type { TMovie } from "@/types";

type TUseSearchResult = {
  filteredItems: ComputedRef<TMovie[]>;
  handleSearch(value: string): void;
}

export function useSearch(items: TMovie[], searchBy: Ref<string>): TUseSearchResult {
  const searchValue = ref('');

  const handleSearch = (value: string) => {
    searchValue.value = value;
  }
  const filteredItems = computed(() => {
    return items.filter(movie => {
      const filterProperty = searchBy.value == 'title' ? 'name' : 'genre';

      return movie[filterProperty].toLowerCase().includes(searchValue.value.toLowerCase());
    });
  });

  return {
    filteredItems,
    handleSearch,
  };
}