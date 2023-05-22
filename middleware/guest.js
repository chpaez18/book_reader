import { useRouter } from 'vue-router';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const { $generalStore, $userStore } = useNuxtApp()

    const isLoggedIn = $userStore.getUserToken()
    if (isLoggedIn) {
        return navigateTo('/dashboard')
    }
})