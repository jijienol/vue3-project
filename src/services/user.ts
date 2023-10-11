import { request } from '@/utils/request'
import type { User, UserInfo } from '@/types/user'
import type { PatientList } from '@/types/user'

// 密码登录
export const loginAsPassword = (mobile: string, password: string) => {
  return request<User>('/login/password', 'POST', { mobile, password })
}
// 验证码登录
export const loginAsCode = (mobile: string, code: string) => {
  return request<User>('/login', 'post', { mobile, code })
}
// login登录register注册changeMobile更换手机号forgetPassword找回密码,bindMobile绑定三方登录，区分验证码
type CodeType = 'login' | 'register' | 'changeMobile' | 'forgetPassword' | 'bindMobile'
export const getMobileCode = (mobile: string, type: CodeType) => {
  return request('/code', 'get', { mobile, type })
}
export const getUserInfo = () => {
  return request<UserInfo>('/patient/myUser', 'get')
}
export const getPatientList = () => {
  return request<PatientList>('/patient/mylist', 'get')
}
