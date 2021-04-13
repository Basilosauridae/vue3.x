import {customRef} from 'vue'

function myRef(value) {
  return customRef((track,trigger)=>{
    //fetch函数如果写在get函数中 会陷入死循环
    fetch(value)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        console.log( data ) //fetch返回的promise对象res.json()的内容 就是json文件的内容
        value = data //json内容赋值给data
        trigger() //更新UI界面需要追踪
      })
      .catch((err)=>{
        console.log( err )
      })

    return{
      get(){
        track()
        console.log( value,'get' )//得到上述的json文件内容
        return value
      },
      set(){}
    }
  }) 
}

export default myRef