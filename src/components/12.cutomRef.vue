<template>
  <div>
    <h3>{{age}}</h3>
    <button @click="fn">+1</button>
  </div>
</template>

<script>
import {customRef, ref} from 'vue'

/*customRef写法:
1.在export default外面自定义一个工厂函数 参数是setup中定义的值
2.函数内返回一个customRef() 参数此方法的执行结果 是一个回调函数
3.回调函数内 要return出一个对象，包含set/get方法，此时控制台可打印 但页面不更新
4.要使页面更新 在customRef的回调函数的参数中传入track和trigger
5.get的开头track(),告诉vue这个函数需要追踪变化
  set的结尾trigger()，告诉vue触发界面更新

*/
function myRef(value) {
  return customRef((track,trigger)=>{
    return{
      get(){
        track()
        console.log( value,'get' )//get接收myRef(value)的value
        return value
      },
      set(newvalue){
        console.log( newvalue,'set' )//set接收value改变后的值
        value = newvalue
        trigger()
      }
    }
  })
}

export default {
  name:'CustomRef',
  setup(){
    let age = myRef(18) //原写法let age = ref(18),此方法自定义了一个ref函数
    function fn() {
      age.value += 1
    }
    return{age,fn}
  }
}
// ref写法 点击值+1
/*export default {
  name:'CustomRef',
  setup(){
    let age = ref(18)
    function fn() {
      age.value += 1
      console.log( age )
    }

    return {age,fn}
  }
}*/
</script>

