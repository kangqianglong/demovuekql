// 导入 axios 实例对象
import request from '@/utils/request.js'

// 测试后端连通性 ——分页页面
export function test2() {
    return request({
        url: '/home/index',
        method: 'get'
    })
}