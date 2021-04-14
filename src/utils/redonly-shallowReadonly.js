//redonly系列 页面都不更新 原始数据所有层只读 - shallowReadonly 原始数据第一层只读
function shallowReadonly(obj) {
   return new Proxy(obj,{
     get(obj,key){
       return obj[key]
     },
     set(obj,key,value){
       console.warn(`${key}是只读，不能赋值`)
     }
   })
}
let obj = {a:'a',bf:{b:'b',f:{s:'s'}}}
let state = shallowReadonly(obj) 
state.a = 1 //输出a是只读 不能赋值 shallowReadonly只管第一层
state.bf.b = 2 