import { useRouter } from 'vue-router';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const router = useRouter();
  const { $generalStore } = useNuxtApp()

    const isLoggedIn = $generalStore.getIsLogged()
    const type = $generalStore.getType()
  
    //Si el usuario ya inicio sesion, lo redirigimos al dashboard
    if (isLoggedIn) {
        if(type === 'admin'){
          
            return navigateTo('/codes')
          
        } else {
          
          return navigateTo('/dashboard')
        }
    }
})