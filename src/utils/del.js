import {reactive} from 'vue'

function useRemoveStu() {
  let state=reactive({
    stus:[
      {id:1,name:'hy',age:18},
      {id:2,name:'zs',age:19},
      {id:3,name:'ls',age:17}
    ]
  })
  function delStus(index) {
    state.stus = state.stus.filter((item,idx)=>idx!==index)
  }
  return{state,delStus}
}
export default useRemoveStu;