import { useRouter } from 'vue-router';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $userStore, $generalStore } = useNuxtApp()

  const route = useRoute();
  const router = useRouter();


  var  isLogged = $generalStore.isLogged
  var  userToken = $userStore.getUserToken()

  if ((route.query.token) && (!isLogged)) {
    const token = route.query.token;
    $generalStore.setIsLogged(true)

    const userData = await $userStore.getUserInfo(token)
    $userStore.setUser(userData.data)
    $userStore.setUserToken(token)

    isLogged = $generalStore.getIsLogged()


    if (isLogged) {

      return navigateTo('/dashboard')
    }
    //return navigateTo('/dashboard')
  }

  if (!isLogged && !userToken) {
    return navigateTo('/auth/login')
  }
})