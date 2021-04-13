<template>
  <div ref="box">我是内容</div>
</template>

<script>
import {ref,onMounted} from 'vue'
export default {
  setup(){
    /*vue2中获取ref元素的方法 console.log( this.$refs.box ) 
    *vue3中 setup是在beforeCreate和create之间的 无法获取元素 最早能拿到dom元素的是mounted 
    *只能引入一个onMounted 调用此函数 传入回调
    */
    let box = ref(null)
    
    onMounted(()=>{
      console.log( 'onMounted',box.value ) // <div>我是内容</div>
    })

    console.log( box.value ) //null，直接在setup内是无法获取的

    return{box}
  }
}
</script>

<style>

</style>