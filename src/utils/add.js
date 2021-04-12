import {reactive} from 'vue'
function useAddStu(state) {
  let state2=reactive({
    stu:{
      id:'',
      name:'',
      age:''
    }
  })
  function addStu(e) {
    e.preventDefault()
    const stu = Object.assign({},state2.stu)
    state.stus.push(stu)
  } 
  return{state2,addStu}
}
export default useAddStu