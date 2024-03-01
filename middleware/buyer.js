export default defineNuxtRouteMiddleware((to, from) => {
    const { $generalStore } = useNuxtApp()
    
    if ($generalStore.getType() === 'buyer') {
        
        if ($generalStore.getCodeValidated() === 0) {
            // Si el código no está validado, redirigimos a la página de validacion de código
            return navigateTo('/validate-code');
        }

    } else {
        
        // Si el usuario no es un buyer, redirigimos a la página de acción no autorizada
        return navigateTo('/error/accion-no-autorizada');
    }
});
