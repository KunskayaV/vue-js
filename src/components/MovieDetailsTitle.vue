<template>
  <div class="title-container">
    <div class="title-wrapper">
      <span class="movie-title" date-testid="details-title">{{ props.title }}</span>
      <span class="movie-rating" date-testid="details-rating">{{ props.rating }}</span>
    </div>
    <span class="movie-genre" date-testid="details-genre">{{ props.genre }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; rating: number; genre: string }>()
</script>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.movie-title {
  font-size: 4rem;
  line-height: 5rem;
  color: #ffffff;
}

.movie-rating {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  font-size: 1.2rem;
  color: #a1e66f;
}

.movie-genre {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #ffffff;
}
</style>
