import type { FieldRule } from 'vant'

export const mobileRules: FieldRule[] = [
  {
    required: true,
    message: '请输入手机号'
  },
  {
    pattern: /^1[3-9]\d{9}$/,
    message: '手机号格式不正确'
  }
]
export const passwordRules: FieldRule[] = [
  {
    required: true,
    message: '请输入密码'
  },
  {
    pattern: /^\w{8,24}$/,
    message: '密码格式不正确'
  }
]
