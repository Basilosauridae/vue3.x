  <template>
  <div>
    <p>{{state.time}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name:'Reactive',
  setup(){
    //reactive只能传递对象，简单值返回的不是Proxy对象 不是响应式的
    // let num = reactive(8) 

    //传递对象或数组，返回的都是Proxy对象，页面和数据响应式变化
    // let state = reactive({num:8})
    // let state = reactive([1,2,3])

    // 传递的非对象和数组，直接修改对象无效 需要重新赋值  
    let state = reactive({
      time:new Date()
    })

    function myFn() {
      // num = 666
      // state.num=666
      // state[0]=666

      // 直接修改以前的值，界面不会更新，因为不是普通的传参对象
      // state.time.setDate(state.time.getDate()+1) 
      // 需要重新赋值
      const newTime = new Date(state.time.getTime())
      newTime.setDate(state.time.getDate()+1)
      state.time = newTime
      console.log( state.time ) 
    }
    return{state,myFn}
  }
}
</script>

<style>

</style>