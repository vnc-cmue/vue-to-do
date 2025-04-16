<template>
  <div class="flex items-center justify-center h-screen px-4">
    <fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <legend class="fieldset-legend">Login</legend>

      <label class="fieldset-label">Email</label>
      <input type="email" class="input" placeholder="Email" v-model="userMail" />

      <label class="fieldset-label" >Password</label>
      <input type="password" class="input" placeholder="Password" v-model="userPassword" />

      <button class="btn btn-neutral mt-4" @click="handleLogin">Login</button>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useTodoStore } from '../stores/todo'

const { authUser } = useTodoStore()

const router = useRouter()


const userMail = ref<string>('')
const userPassword = ref<string>('')

const handleLogin = async () => {
  const { data, error } = await authUser(userMail.value, userPassword.value)
  if (error) {
    console.error('Login fehlgeschlagen:', error.message)
    alert('Login fehlgeschlagen: ' + error.message)
    return
  }

  router.push('/Home')
}

</script>
