// toRaw 获取ref/reactive的原始数据 直接更改原始数据 阻止页面响应式更新
<template>
  <div>
    <p>{{obj1}}</p>
    <p>{{state}}</p>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import {reactive,toRaw,ref} from 'vue'
export default {
  name:'ToRaw',
  setup(){
    let obj = {name:'hy',age:18}
   
    let state = reactive(obj) // 4.state的取值根据对obj地址的引用 obj原始值一旦修改 state就无法找到正确的内存地址
    let obj2 = toRaw(state)

    let obj1 = ref({name:'zs',age:20}) 
    let obj3 = toRaw(obj1.value) //6.在ref类型中 要告诉toRaw获取的是.value的值

    function fn() {
      obj.name = 'ls'  
      console.log( obj ) //1.{name:'ls',age:18} 直接对原始数据修改 虽然控制台name改变了 但页面UI不会更新

      state.name = 'ls'
      console.log( state ) //2.Proxy{name:'ls',age:18} 对reactive的state改变 页面UI也不会更新

      // 3.只有去掉函数内第一步obj.name = 'ls',即对原始数据的直接修改 响应式更新才生效 
      // 4.为什么先修改了原始数据 响应式就不生效？let state = reactive(obj)
      // 5.toRaw的引用如下
      obj2.name = 'ww'
      console.log( obj2 ) //{name: "ww", age: 18} 修改了原始值后无法实现响应式更新

      obj3.name = '叽里咕噜'//6,ref获取到原始数据类型修改 对响应式不生效
      console.log( obj3,111 );

      
    }

    return{obj1,state,fn}
  }
}
</script>

<style>

</style>