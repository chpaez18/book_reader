export default defineNuxtRouteMiddleware((to, from) => {
    const { $userStore, $generalStore } = useNuxtApp()
    
    if ($generalStore.getType() !== 'admin') {
        // Si el usuario no es un admin, redirigimos a la página de acción no autorizada
        return navigateTo('/error/accion-no-autorizada');
    }
    
});
