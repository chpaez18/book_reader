
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $userStore, $generalStore } = useNuxtApp()

  const route = useRoute();


  var  isLogged = $generalStore.isLogged
  var  userToken = $userStore.getUserToken()
  var  type = $generalStore.getType()
  

  //caso del inicio de sesion como comprador
  //------------------------------------------------------------------
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
  //------------------------------------------------------------------
  
  //caso del inicio de sesion como administrador
  //------------------------------------------------------------------
    if ((!isLogged) && (type == 'admin')) {

      $generalStore.setIsLogged(true)
      const userData = await $userStore.getUserInfo(userToken)
      $userStore.setUser(userData.data)
      
      isLogged = $generalStore.getIsLogged()
      
      if (isLogged) {
        return navigateTo('/codes')
      }
    }

    if (isLogged) {
      return;
    }
    /*if (isLogged) {
      const token = $userStore.getUserToken();
      const userData = await $userStore.getUserInfo(token)
      if (userData.data.rol == "Admin") {
        return navigateTo('/codes')
        
      } else {
        return true
      }
    }*/
  //------------------------------------------------------------------

  if (!isLogged && !userToken) {

    return navigateTo('/auth/login')
  }
  

})