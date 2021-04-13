/*
  使用customRef的原因:
  * 在企业开发中，获取的数据可能是本地，也可能是远程服务器中
  * 获取远程服务器数据，需要发送请求，是异步操作
  * 方法一：异步操作就需要在回调函数中拿到数据 如果业务逻辑复杂 就会出现大量回调函数嵌套
  * vue2的做法是让外部函数 setup加上async 但setup中只能是同步操作
  * 方法二：利用customRef 在setup之外封装发送网络请求的代码
  */
<template>
  <div>
    <ul>
      <li v-for="item in state" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
// import {customRef,ref} from 'vue'
import myRef from '../utils/myRef'

// 4.直接将下列工厂函数封装在单独文件中utils/myRef.js
//3.将请求写在get函数外
/*function myRef(value) {
  return customRef((track,trigger)=>{
    fetch(value)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        console.log( data )
        value = data //将模拟远程获取的值赋值给state
        trigger() //更新UI页面 
      })
      .catch((err)=>{
        console.log( err )
      })

    return{
      get(){
        track()
        console.log( value,'get')
        //2.不能在get方法中发送网络请求 调用get-发送请求-保存数据-更新页面-调用get 死循环：
        /*fetch('/public/data.json')
          .then((res)=>{
            return res.json()
          })
          .then((data)=>{
            console.log( data )
            value = data //将模拟远程获取的值赋值给state
            // trigger() //更新UI页面 
          })
          .catch((err)=>{
            console.log( err )
          })
        return value
      }
      set(){}
    }
  })
}*/
export default {
  name:'Reason',
  setup(){
    // 方法一:利用fetch方法获取数据 模拟远程服务器 返回promise对象 
    /*let state = ref([])
    fetch('/public/data.json')
          .then((res)=>{
            return res.json()
          })
          .then((data)=>{
            console.log( data )
            state.value = data //将模拟远程获取的值赋值给state
          })
          .catch((err)=>{
            console.log( err )
          })*/
    
    // 方法二:1.将异步的请求利用cutomRef放在工厂函数里
    let state = myRef('/public/data.json')
    return {state}
  }
}
</script>

<style>

</style>