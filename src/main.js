import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

/*vue2的创建方式
new Vue({
  el:'#app',
  store:store,
  router:router,
  render:c=>c(App)
}).$mount('#app')
*/