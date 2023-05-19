<template>
  <n-divider />
  <n-h3 style="text-align: center">
    22级计科三班江凯龙
  </n-h3>
  <n-tabs type="segment">
    <n-tab-pane name="chap1" tab="个人信息">
      <n-h4>
      3月初开始学习前端，有些时候会学到深夜一点多，我觉得我找到了一个可以为之奋斗的方向。<br><br>
      3月30日，第一个略微大一点的项目，经典的todoList，当时还是在码云上提交
      </n-h4>
      <todolistCarousel /><br>
      <n-button type="info">
      <a href="http://sztu.fun:8081/TodoList.html" target="_blank" @click="()=> show1 = true">试一下</a> </n-button>
      <span v-if="show1">emm。。相当简陋</span>
      <br><br><br>
      <n-divider />
      <br>
      <n-h4>
      然后，二十天后，我又写出了一份todoList，使用的纯原生JS，那个时候根本不知道还有js框架或者ui组件库这种东西可用。
      </n-h4>
      <br>
      <br>
      <todolistCarousel2 /><br>
      <n-button type="info">
      <a href="http://sztu.fun:8082" target="_blank">试一下</a> 
      </n-button>
      <n-divider />
      <br>
      <br>
      <n-h4>
      最后，这是我的github账号
      <n-button type="info">
      <a href="https://github.com/xiaoj655" target="_blank">去看一下吧</a> 
      </n-button>
      </n-h4>
    </n-tab-pane>
    <n-tab-pane name="chap2" tab="个人性格/追求">
      <br>
      崇尚高效率做事
      <br><br>
      特别是在这学期看过了星际迷航，嫌疑人X的献身。我也开始学会了惜时。
      <br><br>
      是一个比较喜欢直来直去的人
      <br><br>
      未来想做的事就是：通过自己的技术为社会创造一些价值，然后顺便在这个过程中赚点钱
    </n-tab-pane>
  </n-tabs>
</template>

<script>
import { NTabPane, NTabs, NDivider, NH3, NButton, NH4 } from 'naive-ui'
import todolistCarousel from './todolistCarousel.vue'
import todolistCarousel2 from './todolistCarousel2.vue'
import { ref } from 'vue'

export default {
  name:'selfIntroduction',
  components: { NTabPane, NTabs, NDivider, NH3, todolistCarousel, todolistCarousel2, NButton, NH4 },
  setup () {
    const show1 = ref(false) 
    return { show1 }
  }
}
</script>

<style>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
a {
  text-decoration: none;
  color: white;
}
</style>
