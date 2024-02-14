
export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $generalStore, $userStore } = useNuxtApp()
    
    const rol = $userStore.getUserRol()
    var  isLogged = $generalStore.isLogged
    
    if (isLogged) {
        if (rol == 'Admin') {
            return true
        } else {
            return navigateTo('/error/accion-no-autorizada')
        }
    } else {
        return navigateTo('/auth/login')
    }

})