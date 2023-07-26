<template>
  <div id="item">
<!--    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->
<!--    <script src="JS/vue.js"></script>-->
    <h1>这是about21分页</h1>
    <button @click="sub">分页按钮的都</button>
<!--    <ul>-->
<!--      <li v-for="n in names" :key="n.id">{{n}}</li>-->
<!--      <li v-for="i in ids" :key="i.id">{{i}}</li>-->
<!--    </ul>-->
    <ul>
<!--      <li v-for="user in users" :key="user.id">-->
<!--        {{ user.name }}-->
<!--        <h2> 康强龙 测试</h2>-->
<!--      </li>-->
      <ul>
        <li v-for="dataItem in arrayDate " :key="dataItem.id">
          {{ dataItem }}
        </li>
      </ul>
      <h2> 康强龙 测试</h2>
      <p>{{ stringDate }}</p>
    </ul>
  </div>

</template>

<script>
/*var item = new Vue({
  el:'#item',
  data:{
    names:'nai',
    ids:'none'
  },
  mounted () {
    axios({
      url:'http://localhost:8080/AjaxTry/TextServlet'
    }).then(res=>{
      item.names=res.data.name;
      item.ids=res.data.id;
      console.log(res.data);
    })
  }
})*/

import { test2 } from "@/api/about";
import axios from "axios";
export default {
data() {
  return {
    stringDate: '',
    arrayDate: [],
  };
},
  created:function(){

    // this.timer = window.setInterval(() => {setTimeout(this.getData(), 0); }, 3000); // 每3秒自动刷新一次

    this.getData() // 调用方法 --> 手动刷新
    this.getData2() // 调用方法 --> 手动刷新
  },

mounted() {
  this.getData();
  this.getData2();

},

  methods: {
    sub() {
      test2();
    },
    getData() {
      // axios.get('http://127.0.0.1:8181/home/index').then(resp) => {
      //   this.datalist =resp.data // 上面用prop 接收 --> 第三步 给datalist 赋值
      //
      //   console.log(resp.data)
      //
      // }

      axios
          .get('http://127.0.0.1:8181/home/index')
          .then(response => {
            //alert("111");
            // 从响应中获取数据
            this.stringDate = response.data;
            console.log(response.data);
            // this.oftenGoods=response.data;
          })
          .catch(error => {
            console.error(error);
            alert('访问后台失败，网络错误，不能访问');
          });
    },
    getData2: function () {
      axios
          .get('http://127.0.0.1:8181/home/index1')
          .then(response => {
            // 从响应中获取数据
            this.arrayDate= response.data;
            console.log(response.data);
            // this.oftenGoods=response.data;
          })
          .catch(error => {
            console.error(error);
            alert('访问后台失败，网络错误，不能访问');
          });
    },
  },
};

</script>


<style>
</style>