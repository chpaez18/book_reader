export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $generalStore, $userStore } = useNuxtApp()
    
    const rol = $userStore.getUserRol()
    const  isLogged = $generalStore.getIsLogged()

    if (isLogged) {
        if (rol == 'Buyer') {
            return true
        } else  {
            return navigateTo('/error/accion-no-autorizada')
        }
    } else {
        return navigateTo('/auth/login')
    }
    
})