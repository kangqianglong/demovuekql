const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //基本路径
  publicPath: './',//默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  parallel:false,
  indexPath: 'index.html',

  devServer: {
    proxy: {
      '/api': {    //这里的/api表示的意思是以/api开头的才生效 ->刷下面的重点
        target: "http://182.92.210.145:8181",//springboot项目的阿里云服务器地址和端口
        changOrigin: true,   //如果接口跨域这里就要这个参数配置
        pathRewrite: {
          //'^/api': '/api'  //实际请求地址是http://baidu.com/api/news/list
          '^/api': '/'  //实际请求地址是http://baidu.com/news/list
          // 我的理解就是http://baidu.com替换了/api/news/list里面的/api
        }
      }
    },
  },
  transpileDependencies: true,
  lintOnSave:false
})
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {    //这里的/api表示的意思是以/api开头的才生效 ->刷下面的重点
//         target: "http://127.0.0.1:8181",
//         changOrigin: true,   //如果接口跨域这里就要这个参数配置
//         pathRewrite: {
//           //'^/api': '/api'  //实际请求地址是http://baidu.com/api/news/list
//           '^/api': '/'  //实际请求地址是http://baidu.com/news/list
//           // 我的理解就是http://baidu.com替换了/api/news/list里面的/api
//         }
//       }
//     },
//   },
//   transpileDependencies: true,
//   lintOnSave:false
// }

