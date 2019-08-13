import request from '../utils/request'

export function selectList() {
    return request({
        url: '/select',
        method: 'get'
    })
}