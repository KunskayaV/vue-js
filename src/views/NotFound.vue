<template>
  <div class="container">
    <h2>Page is not found</h2>
    <p class="home-link"><router-link to="/">Go Home</router-link></p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.home-link {
  margin-top: 12px;
  text-decoration: underline;
}
</style>
