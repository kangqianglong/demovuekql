// 导入 axios 实例对象
import request from '@/utils/request.js'

// 测试后端连通性
export function test1() {
    return request({
        url: '/system/home/test1',
        method: 'get'
    })
}