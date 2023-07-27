<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1>分布式系统前端框架vue3.0</h1>

    <router-link to="/about">分页</router-link><br />
    <router-link to="/home">主页</router-link><br />

    <router-view />

    <el-card class="show-card" shadow="never">
      <el-table :data="datalist" stripe style="width: 100%;"><!-- 第一步--指定数据源  data="datalist"-->
        <el-table-column type="index" lable="#"></el-table-column> <!--为每行增加编号-->
        <el-table-column prop="instId" label="instId"></el-table-column> <!-- 第二步 prop 动态接收数据-->
        <el-table-column prop="ts" label="ts"></el-table-column>
      </el-table>
    </el-card>


  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
   // HelloWorld
  },

  data(){
    return{
      datalist: [] // 定义数据
    }
  },

  created:function(){

    // this.timer = window.setInterval(() => {setTimeout(this.getData(), 0); }, 3000); // 每3秒自动刷新一次

    this.getData() // 调用方法 --> 手动刷新
  },

  methods:{ // npm i axios vue-axios --> 两个依赖
    getData() {
      this.axios.get('http://127.0.0.1:8181/home/index1').then((resp)=>{
        this.datalist =resp.data // 上面用prop 接收 --> 第三步 给datalist 赋值

        console.log(resp.data)

      })
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
