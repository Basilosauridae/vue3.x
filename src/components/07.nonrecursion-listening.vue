// 非递归式监听，shallowReactive和shallowRef/triggerRef
<template>
  <div>
    <p>{{state.a}}</p>
    <p>{{state.gf.b}}</p>
    <p>{{state.gf.f.c}}</p>
    <p>{{state.gf.f.s.d}}</p>

    <button @click="fn">按钮</button>
  </div>
</template>

<script>
import {shallowReactive,shallowRef,triggerRef} from 'vue'
export default {
  name:'NoncursionListening',
  setup(){
    let state = shallowRef({
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
    function fn() {
      // 一.shallowRef的应用：写法一是不生效的 因为在shallowRef中是对.value的监听
      // state.value.a=1,
      // state.value.gf.b=2,
      // state.value.gf.f.c=3,
      // state.value.gf.f.s.d=4
      // 写法二：正确写法,直接在赋值上实现对state.value的改动
      /*state.value={
        a:'1',
        gf:{
          b:'2',
          f:{
            c:'3',
            s:{
              d:'4'
            }
          }
        }
      }*/

      // vue3只提供了triggerRef方法，没有提供triggerReactive方法，故若是reactive类型的数据，无法主动触发页面更新
      // 需求：只更改一个数据
      state.value.gf.f.s.d=4
      triggerRef(state)

      console.log( state );
      console.log( state.value );
      console.log( state.value.gf );
      console.log( state.value.gf.f );
      console.log( state.value.gf.f.s );


      // 二.shallowReactive的应用：
      // state.a=1, //非递归式监听中，只能监听对象的第一层，但这并不代表其他层数据不改变
      // state.a=1,//只要第一层对象写了，其他层会根据第一层联动改变
      // state.gf.b=2,
      // state.gf.f.c=3,
      // state.gf.f.s.d=4 

      // 打印为Proxy对象的第一层改变 其他层没有改变 节省了性能消耗(shallowReactive)
      // console.log( state ); 
      // console.log( state.gf);
      // console.log( state.gf.f );
      // console.log( state.gf.f.s );
      
    }
    return{ state,fn }
  }

}
</script>

<style>

</style>