export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $generalStore, $userStore } = useNuxtApp()
    
    const rol = $userStore.getUserRol()
    const  type = $generalStore.getType()
    const  codeValidated = $generalStore.getCodeValidated()
    const user = $userStore.getUser()

    if (type == 'buyer') {
        if (rol == 'Buyer') {
            
            if ((codeValidated == 0) && (user.code_validated == 0)) {
                return navigateTo('/error/validate-code')
            } else {
                
                return
            
            }
        } else  {
            return navigateTo('/error/accion-no-autorizada')
        }
    } else if (rol == 'Admin') {
        return navigateTo('/error/accion-no-autorizada')
    } else {
        return false
    }
    
})