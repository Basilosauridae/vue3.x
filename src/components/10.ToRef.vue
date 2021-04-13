<template>
  <div>
    <p>{{state}}</p>
    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import {ref, toRef} from 'vue'
export default {
  setup(){
    let obj = {name:'hy'}
    // let state = ref(obj)
    // let state = ref(obj.name) 
    // 利用ref将某一个对象中的属性变成响应式数据 修改响应式数据不会影响到原始数据的,reactive中的对象也一样,页面更新

    let state = toRef(obj,'name') //将obj对象中的属性name传入 不能写obj.name
    //利用toRef将某个对象中的属性变成响应式数据，若修改响应式数据 会影响到原始数据 页面不更新
    console.log( state ) 

    function fn() {
      state.value = 'zs' 
      console.log( obj ) //{name:'zs'}
    }

    return{state,fn}
  }
}
</script>

<style>

</style>  
// ref(obj.name) => 通过ref和reactive创建响应式数据 相当于复制 修改响应式数据不会影响原始数据 界面更新

// toRef(obj,'name') 相当于引用，修改响应式数据会影响原始数据 界面不更新

// toRef应用场景：让响应式数据和原始数据有关联，且更新响应式数据后不想更新UI