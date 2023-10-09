import { request } from '@/utils/request'
import type { User } from '@/types/user'

export const loginAsPassword = (mobile: string, password: string) => {
  return request<User>('/login/password', 'POST', { mobile, password })
}
// login登录register注册changeMobile更换手机号forgetPassword找回密码,bindMobile绑定三方登录，区分验证码
type CodeType =
  | 'login'
  | 'register'
  | 'changeMobile'
  | 'forgetPassword'
  | 'bindMobile'
export const getMobileCode = (mobile: string, type: CodeType) => {
  return request('/code', 'get', { mobile, type })
}
