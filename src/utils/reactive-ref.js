/* 1.在vue3中，想监听谁，就用proxy监听
   2.reactive和ref递归监听，需要判断监听的内容是否为对象*/
function ref(val) {
  return reactive({value:val})
}

function reactive(obj) {
  if(typeof obj === 'object'){
    if(obj instanceof Array){
      //如果是一个数组，取出数组中的每一个元素
      //判断每一个元素是否又是一个对象，若又是对象就包装成Proxy
      obj.forEach((item,index)=>{
        if(typeof item === 'object'){
          obj[index] = reactive(item)
        }
      })
    }else{
      //如果是一个对象 取出对象属性的取值
      //判断对象属性的取值是否又是一个对象，是就包装成Proxy
      for (let key in obj) {
        let item = obj[key]
        if (typeof item === 'object') {
          obj[key] = reactive(item)
        }
      }
    }

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
  }else{
    console.warn(`${obj} is not object`)
  }
}

// let obj = {name:'hy',age:18}
let arr = [{name:'zs',age:18},{name:'ww',age:20}]
let state = reactive(arr)

state[0].name = 'ls'
state[1].age = 26 //更改了两次 页面也更新了两次 实现了reactive