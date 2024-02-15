<template>
  <div class="h-screen m-0 p-0">

    <div class="h-screen w-full flex">

      <!-- column 1 -->
      <div class="md: items-center w-full md:w-1/2 text-white p-4 min-h-screen flex items-start md:items-center justify-center">

        <div class="w-full max-w-xl">
          <div class="grid grid-cols-1 animate__animated animate__bounce">
            <LogoPinkLogo/>

            <div  class="mt-2">
              <div>
                <div class="font-dela text-title text-3xl text-center">
                  Inicia sesión en tu cuenta
                </div>

                <p class="font-blokletters text-paragraph text-base text-center mt-3">
                  Usa la siguiente opción para iniciar sesión
                </p>

                <div class="divider bg-primary" style="height:1px"></div>
              </div>

              <div>
                <!-- <div class="mt-10">
                  <input
                    class="input-material font-blokletters text-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    id="email"
                    type="text"
                    placeholder="Correo"
                  >
                </div>
                <div class="mt-10">
                  <input
                    class="font-blokletters text-sm border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:border-primary-500 focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out"
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                  >
                </div>

                <br>

                <div class="block sm:flex justify-between items-center">
                    <div class="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                        <input type="checkbox" id="remember" name="remember" class="checkbox checkbox-primary" />
                        <label for="remember" class="ml-2 text-gray-700 font-blokletters text-sm">Recuérdame</label>
                    </div>
                    <nuxt-link to="/auth/forgot-password" class="text-primary font-blokletters text-sm font-semibold w-full sm:w-auto text-center sm:text-right">¿Olvidaste tu contraseña?</nuxt-link>
                </div>

                <br>-->

                <div class="button-m-primary">
                  <!-- <button @click=" $event => login() " class="w-full btn btn-primary text-white rounded-lg font-blokletters"><Icon name="tabler:brand-google" class="mr-2 mb-1 w-5 h-5" /> Iniciar sesión con google</button> -->
                  <!-- <button @click="signIn('google')" class="w-full btn btn-primary text-white rounded-lg font-blokletters"><Icon name="tabler:brand-google" class="mr-2 mb-1 w-5 h-5" /> Iniciar sesión con google</button> -->
                  <a :href="googleUrl" @click="login()"><button class="w-full btn btn-primary text-white rounded-lg font-blokletters"><Icon name="tabler:brand-google" class="mr-2 mb-1 w-5 h-5" /> Iniciar sesión con google</button></a>
                  <br>
                  <br>
	              <a href="/auth/admin-login"><button class="w-full btn btn-primary text-white rounded-lg font-blokletters"><Icon name="charm:sign-in" class="mr-2 mb-1 w-5 h-5" /> Iniciar sesión como administrador</button></a>
                </div>

                <br>

                <!-- <div class="flex justify-center">
                  <h3 class="ml-2 text-gray-700 font-blokletters text-sm">¿No tienes una cuenta? &nbsp;</h3>
                  <nuxt-link to="/auth/signup" class="text-primary font-blokletters text-sm font-semibold">Registrate</nuxt-link>
                </div> -->
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- columna 2 -->
      <div class="w-1/2 bg-custom bg-cover bg-no-repeat text-white p-4 min-h-screen hidden md:block" >
      </div>

    </div>
  </div>
</template>

<script setup>

  import { useRouter } from 'vue-router';

  const router = useRouter();
  const { $userStore, $axios, $generalStore} = useNuxtApp()


/* $generalStore.setIsLogged(false)
$userStore.resetUser() */
  //const google = await $axios.get('/auth/get-google-login-url')
  const googleUrl = await $userStore.getGoogleUrl()

  function login() {
	  $generalStore.setType('buyer');
  }

</script>

<style scoped>

  input:focus {
    outline: none;
  }
  .input-material {
    border-width: 2px;
    border-color: rgba(207, 207, 207, 0.836);
  }


  .input-material:focus {
    border-bottom-color: #DE1E98 !important;
    border-bottom-width: 2px;
    transition: all 0.4s ease;
  }

  .input-material:focus::after {
    width: 100%;
    transition: width 0.3s ease;
  }

  .bg-custom {
    background-image: url('/login_mockup.png');
  }
</style>