/*
1.vue3响应式数据本质
  *在vue2中通过defineProperty来实现响应式数据
  *vue3中通过Proxy来实现响应式数据：obj操作的对象，key操作的属性，value新赋予的值
   当调用get方法就是获取监听对象obj,调用set方法就是对obj进行了操作
2.Proxy方法中，若在set中多次设置，且未告知set上次操作的结果是否成功，set就不会往下执行
  Proxy不仅可以接收对象，也可以是数组
*/
let obj = {name:'hy', age:18}
let state = new Proxy(obj,{
  get(obj,key){
    console.log( obj,key ) //{ name: 'hy', age: 18 } name(key是根据Proxy外的state.key决定 => 用于判断外界对哪个值操作)
    return obj[key] //'hy'
  },
  set(obj,key,value){
    console.log(obj,key,value ) // obj name ls
  }
})
// console.log( state.age )
state.name = 'ls'



let arr = [1,2,3]
let state2 = new Proxy(arr,{
  get(arr,key){
    console.log( arr,key ) //arr, 1 
    return arr[key]
  },
  set(arr,key,value){
    console.log( arr,key,value )
    //外界state2.push(7)执行了两次，但此时控制台报错
    //[ 1, 2, 3 ] 3 7，第一次给下标为3的位置加了7
    //[ 1, 2, 3 ] length 4，第二次给数组的长度变为4
    return true //不报错了 此步告诉了set方法执行结果成功
  }
})
// console.log( state2[1] ) //2
state2.push(7)
