export default defineNuxtRouteMiddleware((to, from) => {
  const { $generalStore } = useNuxtApp()
  
  if (!$generalStore.getIsLogged()) {
    // Si el usuario no está logueado, redirecciona a la página de login
    return navigateTo('/auth/login');
  }

});
