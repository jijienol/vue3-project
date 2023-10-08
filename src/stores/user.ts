import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/types/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<User>()
    const setUser = (u: User) => {
      user.value = u
    }
    const clearUser = () => {
      user.value = undefined
    }
    return {
      user,
      setUser,
      clearUser
    }
  },
  {
    persist: true
  }
)
