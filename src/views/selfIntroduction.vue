<template>
  <n-h3 style="text-align: center">
    <h1 :class="{ 'shake':animation1 }" style="display: inline-block;" @click="animation1 = !animation1">22级计科三班江凯龙</h1>
    <span style="margin-left: 40px;">
      <img src="../../public/GitHub.svg" style="height: 30px; width: 30px;" id="githubIcon" @click="goGithub"/>
      &lt;--去我的github看看
    </span>
  </n-h3>
  <n-divider />
  <n-tabs type="segment">
      <n-tab-pane name="chap1" tab="起步" >
      <n-h4>
      3月初开始学习前端，有些时候会学到深夜一点多，我觉得我找到了一个可以为之奋斗的方向。<br><br>
      3月30日，第一个略微大一点的项目，经典的todoList，当时还是在码云上提交
      </n-h4>
      <todolistCarousel /><br>
      <n-button type="info">
      <a href="http://47.120.41.52:8080/TodoList.html" target="_blank" @click="()=> show1 = true">试一下</a> </n-button>
      <span v-if="show1">emm。。相当简陋</span>
    </n-tab-pane>
    <n-tab-pane name="chap2" tab="第一个项目的改进">
      <n-h4>
      然后，二十天后，我又写出了一份todoList，使用的纯原生JS，那个时候根本不知道还有js框架或者ui组件库这种东西可用。
      </n-h4>
      <br>
      <br>
      <todolistCarousel2 /><br>
      <n-button type="info">
      <a href="http://47.120.41.52:8081" target="_blank">去看一下！</a> 
      </n-button>
    </n-tab-pane>
    <n-tab-pane name="chap4" tab="第三个项目">
      <n-h4>
      这是一个手机项目,仿京东到家的一个手机网页。用到了vue以及它的vuex，router。<br>
      </n-h4>
      <n-button type="info">
      <a href="http://47.120.41.52:8082" target="_blank">去看一下！</a>
      </n-button>
      <jdCarousel />
    </n-tab-pane>
    <n-tab-pane name="chap3" tab="个人性格/追求">
      <n-h4>
      <br>
      这学期看过了星际迷航，嫌疑人X的献身。我开始学会了惜时。
      <br><br>
      所以开始想做一个能高效率做事的人
      <br><br>
      是一个比较喜欢直来直去的人
      <br><br>
      未来想做的事就是：通过自己的技术为社会创造一些价值，然后顺便在这个过程中赚点钱
      </n-h4>
    </n-tab-pane>
  </n-tabs>
</template>

<script>
import { NTabPane, NTabs, NDivider, NH3, NButton, NH4 } from 'naive-ui'
import todolistCarousel from './todolistCarousel.vue'
import todolistCarousel2 from './todolistCarousel2.vue'
import jdCarousel from './jdCarousel.vue'
import { ref } from 'vue'

export default {
  name:'selfIntroduction',
  components: { NTabPane, NTabs, NDivider, NH3, todolistCarousel, todolistCarousel2, NButton, NH4, jdCarousel },
  setup () {
    const show1 = ref(false)
    const animation1 = ref(true)
    const goGithub = () => {
      window.open('https://github.com/xiaoj655','_blank')
    }
    return { show1, goGithub, animation1 }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
#githubIcon:hover {
  cursor: pointer;
}

h1 {
  background: linear-gradient(to right, #D5054C, #E74F1D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px) scale(1.25);
  }
  50% {
    transform: translateX(5px) scale(1.5);
  }
  75% {
    transform: translateX(-5px) scale(1.25);
  }
  100% {
    transform: translateX(0);
  }
}
.shake {
  animation: shake .5s linear 3;
}
</style>
