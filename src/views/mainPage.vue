<template>
  <div class="divider">1</div>
 <nav>
  <router-link to="/">个人介绍</router-link>
  <router-link to="/projectDisplay">项目展示</router-link>
 </nav>
</template>

<script>
export default {
  name: 'mainPage'
}
</script>

<style lang="scss" scoped>
.divider {
  width: 100px;
  height: 1px;
  border-bottom: 2px solid green;
}
</style>