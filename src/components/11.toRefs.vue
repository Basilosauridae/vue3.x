<template>
  <div>
    <!-- <p>{{name}}-{{age}}</p> -->
    <p>{{state}}</p>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import {toRef,toRefs} from 'vue'
export default {
  name:'ToRefs',

  // 利用toRef将对象中的多个属性变成响应式数据 由于toRef只能传递两个参数 写法麻烦 如下
  /*setup(){
    let obj = {name:'hy',age:18}
    let name = toRef(obj,'name')
    let age = toRef(obj,'age')

    function fn() {
      name.value = 'zs'  
      age.value = 17
      console.log( obj )
    }

    return{name,age,fn}
  }*/

  // 直接使用toRefs 
  setup(){
    let obj = {name:'hy',age:18}
    let state = toRefs(obj)
    console.log( state ) //可以打印看一下属性 再在函数中改变响应数据值

    function fn() {
      state.name.value = 'ls'
      state.age.value = 17
      console.log( obj ) //{name:'ls',age:17} 原始数据改变了 页面未更新
    }
    
    return{state,fn}
  }
  
}
</script>

<style>

</style>