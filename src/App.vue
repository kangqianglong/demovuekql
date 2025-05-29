<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1>分布式系统前端框架vue2.0，小程序前后端数据交互</h1>

    <div class="card-row">
      <BaseCard
          icon="📚"
          label="学习"
          content="知识管理与学习资源"
          style="background-color: #3498db"
      />
      <BaseCard
          icon="📅"
          label="日历"
          content="日程安排与时间管理"
          style="background-color: #2ecc71"
      />
      <BaseCard
          icon="📋"
          label="任务"
          content="待办事项与项目跟踪"
          style="background-color: #9b59b6"
      />
      <BaseCard
          icon="💬"
          label="沟通"
          content="团队协作与消息通知"
          style="background-color: #e67e22"
      />
      <BaseCard
          icon="👥"
          label="用户"
          content="成员管理与权限设置"
          style="background-color: #2980b9"
      />
    </div>
    <div class="home-page">
    <h1 class="page-title">功能入口</h1>
    <div class="feature-container">
      <FeatureCard
          label="主页"
          to="/home"
          Style="background-color: #3498db"
      />
      <FeatureCard
          label="分页"
          to="/about"
          Style="background-color: #42b983"
      />
<!--      <FeatureCard
          label="页面详情"
          to="/pagination"
          Style="background-color: #42b983"
      />-->
      <FeatureCard
          label="彩票人工智能大模型预测"
          to="/caipiao"
          Style="background-color: #e74c3c"
      />
      <FeatureCard
          label="Word表格转换成Excel"
          to="/wordtoexcel"
          Style="background-color: #f39c12"
      />
      <FeatureCard
          label="运维统计数据"
          to="/ruizhong"
          Style="background-color: #9b59b6"
      />
    </div>
    </div>
<!--    <router-link to="/about">分页</router-link><br />
    <router-link to="/home">主页</router-link><br />
    <router-link to="/caipiao">彩票人工智能大模型预测</router-link><br/>
    <router-link to="/wordtoexcel">Word表格转换成Excel</router-link><br/>
    <router-link to="/ruizhong">运维统计数据</router-link><br />-->

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
import BaseCard from './views/BaseCard.vue';
import FeatureCard from "@/views/FeatureCard.vue"; // 导入即注册，无需显式 components
//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    FeatureCard,
   // HelloWorld
    BaseCard,
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

  // methods:{ // npm i axios vue-axios --> 两个依赖
  //   getData() {
  //     this.axios.get('http://127.0.0.1:8181/home/index1').then((resp)=>{
  //       this.datalist =resp.data // 上面用prop 接收 --> 第三步 给datalist 赋值
  //
  //       console.log(resp.data)
  //
  //     })
  //   }
  // }

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

.card-row {
  display: flex;        /* 横向布局 */
  flex-wrap: wrap;      /* 自动换行（小屏幕适配） */
  justify-content: space-around;  /* 均匀分布 */
  gap: 10px;            /* 卡片间距 */
  padding: 20px;
}

.home-page {
  padding: 40px;
  text-align: center;
}

.page-title {
  margin-bottom: 30px;
  color: #2c3e50;
}

.feature-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
