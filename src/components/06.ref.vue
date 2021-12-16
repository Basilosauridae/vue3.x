<template>
  <div>
    <p>{{msg}}</p>

    <p>{{state.a}}</p>
    <p>{{state.gf.b}}</p>
    <p>{{state.gf.f.c}}</p>
    <p>{{state.gf.f.s.d}}</p>
    <button @click="Fn">按钮</button>
  </div>
</template>

<script>
import {isRef,isReactive, reactive} from 'vue'
import {ref} from 'vue'
export default {
  name:'Ref',
  setup(){
    let msg = ref(18)
    let state = reactive({
      a:'a',
      gf:{
        b:'b',
        f:{
          c:'c',
          s:{
            d:'d'
          }
        }
      }
    })
    function Fn() {
      // msg = 666
      /* 不使用ref赋值 vue3就无法实现响应式
         使用ref赋值的打印出来 是一个RefImpl{..} reference implement 引用实现对象
      */
      // console.log( msg ) //ref传参在vue中获取值不需要.value,控制台可在msg=666情况下打印666 

      msg.value = 666 //ref传参在JS中需要.value，因为底层还是reactive，需要对对象的键值名重新赋值
      console.log( isRef(msg) ) //true 判断当前数据为ref类型
      console.log( isReactive(msg) ) //false,判断当前数据不是reactive

      // reactive是递归式监听 ref也是 即可监听对象中的每一层数据 但是非常消耗性能
      state.a=1,
      state.gf.b=2,
      state.gf.f.c=3,
      state.gf.f.s.d=4
      
      // 即vue内部将每一层都包装成Proxy对象，进行监听
      // console.log( state );
      // console.log( state.gf);
      // console.log( state.gf.f );
      // console.log( state.gf.f.s );
    }

    return{msg,Fn,state}
  }
}
</script>

<style>

</style>