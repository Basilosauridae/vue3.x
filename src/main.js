// 引入的不再是Vue构造函数，是一个名为creatApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// 创建应用实例对象App并挂载,类似于vue2中的vm,但App比vm更轻
createApp(App).mount('#app')

// vue2的创建方式
/*new Vue({
  el:'#app',
  store,
  router,
  render:h => h(App)
}).$mount('#app')
*/