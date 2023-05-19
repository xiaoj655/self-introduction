<template>
  <n-carousel autoplay showarrow draggable> 
    <img
      class="carousel-img"
      src="../../public/firstGenTodoList.png"
    >
    <img
      class="carousel-img"
      src="../../public/firstGenTodoList__display.png"
    >
  </n-carousel>
</template>

<script>
import { NCarousel } from 'naive-ui';
export default {
  name: 'todolistCarousel',
  components: { NCarousel }
}
</script>

<style scoped>
.carousel-img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>