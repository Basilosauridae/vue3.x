// 组合API的本质理解
<template>
  <div class="understand">
    <p>{{name}}</p>
    <button @click="myFn1">按钮</button>

    <p>{{age}}</p>
    <button @click="myFn2">按钮</button>
  </div>
</template>

<script>
/*composition API和option API可以混合使用
  composition API的本质就是组合/注入式API，return出来的变量相当于option API中return出去的，理解即可
*/
import {ref} from 'vue'
export default {
  name:'understand',
  // vue2中的optionAPI
  data(){
    return{
      name:'hy'
    }
  },
  methods:{
    myFn1(){
      alert('Option API')
    }
  },

  // vue3中的composition API 
  setup(){
    let age=ref(18)
    function myFn2() {
      alert('composition API')
    }
    return{age,myFn2}
  }

}
</script>

<style>

</style>