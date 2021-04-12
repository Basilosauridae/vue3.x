<template>
  <div>
    <p>{{state}}</p>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import { markRaw, reactive} from 'vue'
export default {
  name:'MarkRaw',
  setup(){
    let obj = {name:'hy',age:18}
    obj = markRaw(obj)//对原始对象进行markRaw标记，表示此原始对象永远不会被追踪
    console.log( obj )//{name: "hy", age: 18, __v_skip: true}
    let state = reactive(obj)
    
    function fn() {
      state.name = 'ls'
    }
    return{state,fn}
  }
}
</script>

<style>

</style>