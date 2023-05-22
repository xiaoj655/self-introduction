<template>
  <div>
  <n-carousel autoplay draggable :slides-per-view="2" class="imgJd" :interval="1500"> 
    <img
      class="carousel-img"
      src="../../public/jd1.png"
    >
    <img
      class="carousel-img"
      src="../../public/jd2.png"
    >
    <img
      class="carousel-img"
      src="../../public/jd3.png"
    >
    <img
      class="carousel-img"
      src="../../public/jd4.png"
    >
    <img
      class="carousel-img"
      src="../../public/jd5.png"
    >
  </n-carousel>
</div>
</template>

<script>
import { NCarousel } from 'naive-ui';
export default {
  name: 'jdCarousel',
  components: { NCarousel }
}
</script>

<style scoped>
.carousel-img {
  width: 100%;
  /* height: 240px; */
  object-fit: cover;
}
div {
  position: absolute;
  top: 270px;
  left: 50%;
  width: 816px;
  height: 715px;
  transform: translateX(-50%);
}
.imgJd {
  position: absolute;
  top: 0;
}
</style>