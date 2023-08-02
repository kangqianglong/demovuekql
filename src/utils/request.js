// 导入 axios
import axios from 'axios'

// 调用 axios.create() 函数, 创建一个 axios 的实例对象, 用 request 来接收.
const request = axios.create({

    // 如果后端是soa架构，那么多个服务都有不同的端口，这里该如何书写？
    // 如果后端是soa，那么这里写的是网关的端口，之后通过网关的负载均衡来拉取不同的后端服务

    baseURL: 'http://182.92.210.145:8181' // 指定请求的根路径
})

export default request