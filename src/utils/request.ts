import axios, { AxiosError } from 'axios'
import type { Method } from 'axios'

import { useUserStore } from '@/stores'
import { showToast } from 'vant'
import router from '@/router'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: 'https://consult-api.itheima.net',
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const userStore = useUserStore()
    if (userStore.user?.token) {
      config.headers.Authorization = `Bearer ${userStore.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    if (res.data?.code !== 10000) {
      showToast(res.data.message)
      Promise.reject(res.data)
    }
    return res.data
  },
  (err: AxiosError) => {
    const userStore = useUserStore()
    userStore.clearUser()
    if (err.response?.status === 401) {
      router.push({
        path: '/login',
        query: {
          returnUrl: router.currentRoute.value.fullPath
        }
      })
    }
    return Promise.reject(err)
  }
)
type Data<T> = {
  code: number
  message: string
  data: T
}
export const request = <T>(url: string, method: Method, submitData: object) => {
  return instance.request<any, Data<T>>({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}
export default instance
