import { useRouter } from 'vue-router';
export default function ({ store, redirect }) {


  const router = useRouter();
  const { $generalStore } = useNuxtApp()

    const isLoggedIn = $generalStore.isLogged
    console.log(isLoggedIn)
    if (isLoggedIn) {
        return navigateTo('/dashboard')
    }
  }
