<script setup lang="ts">
import { mobileRules, passwordRules, codeRules } from '@/utils/rules'
import { ref } from 'vue'
import { showToast } from 'vant'
import { loginAsPassword } from '@/services/user'
import { useUserStore } from '@/stores'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()
const mobile = ref('13230000066')
const password = ref('abc12345')
const code = ref('')
const agree = ref(false)
const isPassword = ref(true)
const userStore = useUserStore()
const login = async () => {
  if (!agree.value) return showToast('请勾选协议')
  const res = await loginAsPassword(mobile.value, password.value)
  userStore.setUser(res.data)
  router.push((route.query.returnUrl as string) || '/user')
}
</script>

<template>
  <div class="login-page">
    <cp-nav-bar
      right-text="注册"
      @click-right="$router.push('/register')"
    ></cp-nav-bar>
    <!-- 头部 -->
    <div class="login-head">
      <h3>{{ isPassword ? '密码登录' : '短信验证码登录' }}</h3>
      <a href="javascript:;" @click="isPassword = !isPassword">
        <span>{{ !isPassword ? '密码登录' : '短信验证码登录' }}</span>
        <van-icon name="arrow"></van-icon>
      </a>
    </div>
    <!-- 表单 -->
    <van-form autocomplete="off" @submit="login">
      <van-field
        placeholder="请输入手机号"
        type="tel"
        :rules="mobileRules"
        v-model="mobile"
      ></van-field>
      <van-field
        v-if="isPassword"
        placeholder="请输入密码"
        type="password"
        :rules="passwordRules"
        v-model="password"
      ></van-field>
      <van-field
        v-else
        placeholder="请输入验证码"
        :rules="codeRules"
        v-model="code"
      >
        <template #button>
          <span class="btn-send">获取验证码</span>
        </template>
      </van-field>
      <div class="cp-cell">
        <van-checkbox v-model="agree">
          <span>我已同意</span>
          <a href="javascript:;">用户协议</a>
          <span>及</span>
          <a href="javascript:;">隐私条款</a>
        </van-checkbox>
      </div>
      <div class="cp-cell">
        <van-button block round type="primary" native-type="submit"
          >登 录
        </van-button>
      </div>
      <div class="cp-cell">
        <a href="javascript:;">忘记密码？</a>
      </div>
    </van-form>
    <!-- 底部 -->
    <div class="login-other">
      <van-divider>第三方登录</van-divider>
      <div class="icon">
        <img src="@/assets/qq.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  &-page {
    padding-top: 46px;
  }

  &-head {
    display: flex;
    padding: 30px 30px 50px;
    justify-content: space-between;
    align-items: flex-end;
    line-height: 1;

    h3 {
      font-weight: normal;
      font-size: 24px;
    }

    a {
      font-size: 15px;
    }
  }

  &-other {
    margin-top: 60px;
    padding: 0 30px;

    .icon {
      display: flex;
      justify-content: center;

      img {
        width: 36px;
        height: 36px;
        padding: 4px;
      }
    }
  }
}

.van-form {
  padding: 0 14px;

  .cp-cell {
    height: 52px;
    line-height: 24px;
    padding: 14px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    .van-checkbox {
      a {
        color: var(--cp-primary);
        padding: 0 5px;
      }
    }
  }

  .btn-send {
    color: var(--cp-primary);

    &.active {
      color: rgba(22, 194, 163, 0.5);
    }
  }
}
</style>
