//shallowReactive,shallowRef 只监听第一层，非递归监听

function shallowRef(val) {
   return shallowReactive({value:val}) //参数就是obj结构
}

function shallowReactive(obj) {
  return new Proxy(obj,{
    get(obj,key){
      return obj[key]
    },
    set(obj,key,value){
      obj[key] = value
      console.log( '页面已更新' )
      return true
    }
  })
}
let obj = {a:'a',bf:{b:'b',f:{s:'s'}}}
/*let state = shallowReactive(obj)
state.a = 1 //隐藏第一层 无法进入set 不能打印页面已更新
state.bf.b = 2
state.bf.f.s = 3*/

let state = shallowRef(obj)
// 以下写法错误 shallowRef的第一层是value，而不是state.value.a
/*state.value.a = 1
state.value.bf.b = 2
state.value.bf.f.s = 3*/
state.value={a:'1',bf:{b:'2',f:{s:'3'}}} //正确写法，不隐藏第一层打印页面已更新