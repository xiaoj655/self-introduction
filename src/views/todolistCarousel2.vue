<template>
  <n-carousel autoplay showarrow draggable :interval="1500"> 
    <img
      class="carousel-img"
      src="../../public/primaryTodolist.png"
    >
    <img
      class="carousel-img"
      src="../../public/primaryTodolist__display.png"
    >
  </n-carousel>
</template>

<script>
import { NCarousel } from 'naive-ui';
export default {
  name: 'todolistCarousel2',
  components: { NCarousel }
}
</script>

<style scoped>
.carousel-img {
  max-width: 100%;
  height: auto;
  /* object-fit: cover; */
}
</style>