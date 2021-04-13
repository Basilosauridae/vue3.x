// 1.readonly 只读系列 修改值 页面都不会更新 shalldowReadonly不修改第一层原始值
// 2.和const创建只读对象的区别 
<template>
  <div>
    <p>{{state.a}}</p>
    <p>{{state.bf.b}}</p>
    <p>{{state.bf.f.s}}</p>

    <p>{{value}}</p>

    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import {readonly,shallowReadonly,isReadonly} from 'vue'
export default {
  setup(){
    // let state = readonly({a:'a',bf:{b:'b',f:{s:'s'}}}) //readonly 递归只读 对象的每一层都只读 原始数据不变
    let state = shallowReadonly({a:'a',bf:{b:'b',f:{s:'s'}}}) //shallowReadonly 第一层只读 

    const value = {name:'hy',age:18}

    function fn() {
      state.a = 1
      state.bf.b = 2
      state.bf.f.s = 3  
      console.log( state )
      console.log( isReadonly(state) ) //true,isReadonly 判断数据是否是readonly类型 

      value.name = 'ls'
      value.age = 26
      console.log( value )//{name:'ls',age:26} const虽然也是创建一个只读对象，页面不更新，但原始数据会发生改变
    }

    return {state,fn,value}
  }
}
</script>

<style>

</style>