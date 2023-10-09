import { request } from '@/utils/request'
import type { User } from '@/types/user'

export const loginAsPassword = (mobile: string, password: string) => {
  return request<User>('/login/password', 'POST', { mobile, password })
}
