<template>
  <div class="login">
    <el-form
      class="login-form"
      :model="loginForm"
      ref="loginFormRef"
      :rules="loginFormRules"
      label-width="100px"
      label-position="top"
    >
      <el-form-item prop="username" class="login-form__item" label="用户名">
        <el-input
          @keyup.enter="methods.onSubmitLoginForm"
          placeholder="请输入用户名"
          clearable
          v-model="loginForm.username"
        />
      </el-form-item>
      <el-form-item prop="password" class="login-form__item" label="密码">
        <el-input
          @keyup.enter="methods.onSubmitLoginForm"
          placeholder="请输入密码"
          clearable
          type="password"
          show-password
          v-model="loginForm.password"
        />
      </el-form-item>
      <el-button class="login-form__btn" type="primary" @click="methods.onSubmitLoginForm"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus'
import type { ToRefs } from 'vue'
import { ElForm } from 'element-plus'
import { login } from '@/api/user'
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'

interface ILoginPageState {
  loginForm: {
    username: string | null
    password: string | null
  }
  loginFormRules: FormRules
}

const { loginFormRules, loginForm }: ToRefs<ILoginPageState> = toRefs(
  reactive({
    loginForm: {
      username: null,
      password: null
    },
    loginFormRules: {
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }
  })
)

const loginFormRef = ref<InstanceType<typeof ElForm> | null>(null)
const userStore = useUserStore()
const router = useRouter()
const { query } = useRoute()
const methods = {
  async onSubmitLoginForm() {
    try {
      await loginFormRef.value?.validate()
      const { data, statusCode } = await login<string>(loginForm.value)
      if (statusCode === 200 && data) {
        userStore.setToken(data)
        await router.push({
          path: query.redirect as string
        })
      }
    } catch (e) {
      console.warn('login-form failed.')
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  background: $blue;
  min-height: 100vh;
  display: grid;
  place-content: center;

  &-form {
    padding: 20px;
    border-radius: 4px;
    width: 400px;
    background: #fff;

    &__btn {
      width: 100%;
    }
  }
}
</style>
