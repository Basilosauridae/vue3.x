// vue2实现的功能
<template>
  <div class="vue-two">
    <input type="text" v-model="stu.id">
    <input type="text" v-model="stu.name">
    <input type="text" v-model="stu.age">
    <input type="submit" @click="addStu">

    <ul>
      <li v-for="(item,index) in stus" :key="item.id" @click="delStu(index)">{{item.name}}-{{item.age}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VueTwo',
  data() {
    return {
      stu:{
        id:'',
        name:'',
        age:''
      },
      stus:[
        {id:1,name:'hy',age:18},
        {id:2,name:'lt',age:19},
        {id:3,name:'zs',age:17}
      ]
    }
  },
  methods:{
    addStu(e){
      e.preventDefault()
      const stu= Object.assign({},this.stu)
      this.stus.push(stu)
      this.stu.id='',
      this.stu.name='',
      this.stu.age=''
    },
    delStu(index){
      this.stus=this.stus.filter((item,idx)=>idx!==index)
      // console.log( index,'点击的stus的下标' );
      // console.log( item,'遍历得到stus的所有对象的Proxy集合' )
      // console.log( idx,'遍历当前点击的所有下标的集合' );   
    }
  }
}
</script>
