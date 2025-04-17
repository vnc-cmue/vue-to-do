<template>
  <div class="flex items-center justify-center h-screen px-4">
    <fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <legend class="fieldset-legend">Login</legend>

      <label class="fieldset-label">Email</label>
      <input type="email" class="input" placeholder="Email" v-model="userMail" />

      <label class="fieldset-label">Password</label>
      <input type="password" class="input" placeholder="Password" v-model="userPassword" />

      <button
        class="btn btn-neutral mt-4 w-full flex justify-center items-center gap-2"
        @click="handleLogin"
        :disabled="loading"
      >
        <span>Login</span>
        <span v-if="loading" class="loading loading-spinner loading-sm"></span>
      </button>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoStore } from '../stores/todo'

const { authUser } = useTodoStore()

const router = useRouter()
const loading = ref(false)

const userMail = ref<string>('')
const userPassword = ref<string>('')

const handleLogin = async () => {

  loading.value = true
  const loginStart = Date.now()

  const { data, error } = await authUser(userMail.value, userPassword.value)

  const elapsed = Date.now() - loginStart
  const delay = Math.max(0, 2000 - elapsed)
  await new Promise((resolve) => setTimeout(resolve, delay))
  loading.value = false

  if (error) {
    console.error('Login fehlgeschlagen:', error.message)
    alert('Login fehlgeschlagen: ' + error.message)
    return
  }

  router.push('/Home')
}
</script>
