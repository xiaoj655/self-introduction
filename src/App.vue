<template>
  <div class="wrapper">
  <div style="flex:2;"></div>
  <div style="flex:3;">
  <nav>
    <router-link to="/">个人介绍</router-link> | 
    <router-link to="/project-display">github仓库</router-link>
  </nav>
  <router-view/>
  </div>
  <div style="flex:2;"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  padding: 30px 0 300px 0 ;
}
.wrapper {
  display: flex;
}
</style>
