<script>
// const dayjs = require('dayjs')
// const newTime = dayjs().format('YYYY-MM-DD')
//
// const after = dayjs().subtract(-1, 'day').format('YYYY-MM-DD')    //获取后一天时间
//
// const before = dayjs().subtract(1, 'day').format('YYYY-MM-DD')    //获取前一天时间
import axios from "axios";
import qs from 'qs';

export default {
  data() {
    return {
      times:'',//格式化之后的当前时间
      counts:'',
      nowcounts:'',
      quecounts:'',
      qbaocounts:'',
      user: {
        yunweitype: 1,
        qbaocounts: '',
        createdate: '20240403'
      }
    };
  },
  created() {
    this.getTimes()
    this.getCountData()
    this.getnowcounts()// 调用方法 --> 手动刷新
    this.postDates()
  },

  mounted() {
    this.getTimesInterval();
    this.getCountData();

  },
  // 在Vue实例销毁前，清除我们的定时器
  beforeDestroy() {
    if (this.times) {
      clearInterval(this.getTimesInterval);
    }
    if (this.counts) {
      clearInterval(this.getCountData);
    }
  },
  methods: {
    getTimes(){
      setInterval(this.getTimesInterval, 1000);
    },
    getTimesInterval:function() {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //拼接格式化当前时间
      _this.times = '现在是' + year + '年'+month +'月'+ day +'号'+ hours + '点' + minutes + '分';
     // return '现在是' + year + '年'+month +'月'+ day +'号'+ hours + '点' + minutes + '分';
    },
    getCountData: function (){
      var that = this
      // eslint-disable-next-line no-undef
      axios.get("shiro/system2/about2/questionCounts").then(response => {
        that.counts = response.data
      })
          .catch(error => {
            console.error(error);
            alert('获取数据失败，请稍后重试');
          });
    },
    getnowcounts:function (){
      axios.get('/shiro/system2/about2/qianbaoCounts').then(response => {
            this.nowcounts = response.data;
          })
          .catch(error => {
            console.error(error);
            alert('获取数据失败，请稍后重试');
          });
    },
    handleSubmit() {
      var data = {quecounts: this.quecounts, qianbaocounts: this.qbaocounts}
      axios.post("/shiro/system2/about2/add", JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
          .then(response => {
        console.log(response)
            return response;
      })
    }
  }
};
</script>
<template>
<div id="app">
  <form @submit.prevent="handleSubmit">
  <p>
    当前时间:  {{times}}
  </p>
  <p>
    目前当月问题件数目: {{counts}}
  </p>
<p1>
  新增生产问题件数目: <input type="questcounts"  v-model="quecounts" placeholder="请输入" />
</p1>
<p>
  目前当月签报数目: {{nowcounts}}
</p>
<p>
  签报数目: <input type="qianbaocounts" v-model="qbaocounts" placeholder="请输入" />
</p>

  <button type="submit" >提交数据</button>
  </form>
</div>

</template>
