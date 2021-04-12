// setup的使用时机和注意点
<template>
  <div>
    <p>{{name}}</p>
    <button @click="myFn1">按钮</button>

    <p>{{age}}</p>
    <button @click="myFn2">按钮</button>
  </div>
</template>

<script>
/*
beforeCreate:组件刚刚被创建出来，组件的data和methods还没有被初始化好；
setup:
created:组件刚刚被创建出来，组件的data和methods已经被创建好

setup注意点：
  1.setup还没有执行created生命周期方法，所以在setup中无法使data和methods
  2.setup函数内只能是同步不是异步，想要变成异步在前面加上async
*/
import {ref} from 'vue'
export default {
  name:'SetUp',
  data(){
    return{
      name:'vue2的optionAPI'
    }
  },
  methods:{
    myFn1(){
      alert('vue2的optionAPI')
   }
  },
  setup(){
    const age=ref('vue3的composition API')
    function myFn2() {
      alert('vue3的composition API')
    }
    // console.log( this,this.name )
    return{age,myFn2}
  }

}
</script>

<style>

</style>