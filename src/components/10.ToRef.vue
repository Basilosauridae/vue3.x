<template>
  <div>
    <p>{{state}}</p>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    let obj = {name:'hy'}
    // let state = ref(obj)
    let state = ref(obj.name)
    // 利用ref将某一个对象中的属性变成响应式数据 修改响应式数据不会影响到原始数据的,reactive中的对象也一样

    function fn() {
      state.value = 'zs' 
      console.log( obj ) //{name:'hy'}
      console.log( state ) // RefImpl {_rawValue: "zs", _shallow: false, __v_isRef: true, _value: "zs"}
    }

    return{state,fn}
  }
}
</script>

<style>

</style>