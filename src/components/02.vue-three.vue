// vue3实现的功能
<template>
  <div class="vue-three">
    <input type="text" v-model="state2.stu.id">
    <input type="text" v-model="state2.stu.name">
    <input type="text" v-model="state2.stu.age">
    <input type="submit" @click="addStu">

    <ul>
      <li 
      v-for="(item,index) in state.stus" 
      :key="item.id"
      @click="delStus(index)">{{item.name}}-{{item.age}}</li>
    </ul>
  </div>
</template>

<script>
// import { reactive } from 'vue'
import useRemoveStu from '../utils/del.js'
import useAddStu from '../utils/add.js'
export default {
  name:'VueThree',
  setup(){
    let {state,delStus} =  useRemoveStu()
    let{state2,addStu} = useAddStu(state)
    
    return{state,state2,delStus,addStu}
  }
}
// 删除功能 function useRemoveStu() {...}
// 添加功能  function delStus(index){...}


</script>