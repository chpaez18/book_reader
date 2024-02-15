export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $generalStore, $userStore } = useNuxtApp()
    
    const rol = $userStore.getUserRol()
    const  type = $generalStore.getType()

    if (type == 'buyer') {
        if (rol == 'Buyer') {
            return
        } else  {
            return navigateTo('/error/accion-no-autorizada')
        }
    } else if (rol == 'Admin') {
        return navigateTo('/error/accion-no-autorizada')
    } else {
        return false
    }
    
})