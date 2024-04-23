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
                <div class="button-m-primary">
	              <button @click="initiateLogin" class="w-full btn btn-primary text-white rounded-lg font-blokletters"><Icon name="tabler:brand-google" class="mr-2 mb-1 w-5 h-5" /> Iniciar sesión con google</button>
                  <br>
                  <br>
	                <NuxtLink to="/auth/admin-login"><button class="w-full btn btn-primary text-white rounded-lg font-blokletters"><Icon name="charm:sign-in" class="mr-2 mb-1 w-5 h-5" /> Iniciar sesión como administrador</button></NuxtLink>
                </div>

                <br>
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
import { UserService } from '@/services/userService';
import { GoogleAuthService } from '@/services/googleAuthService';
import { useRouter } from 'vue-router';


//Stores
//--------------------------------------------------------------------------
	const { $generalStore, $userStore } = useNuxtApp()
//--------------------------------------------------------------------------


//Services
//--------------------------------------------------------------------------
	const googleAuthService = new GoogleAuthService();
	const userService = new UserService();
	const router = useRouter();
//--------------------------------------------------------------------------


//Funciones
//--------------------------------------------------------------------------
	const initiateLogin = () => {
		googleAuthService.login(handleLogin);
	};

	const handleLogin = async (response) => {
		try {

			//Validamos el token de google
			//--------------------------------------------------------------------------
				const res = await googleAuthService.verifyGoogleToken(response.access_token);
			//--------------------------------------------------------------------------


			//Informacion del usuario
			//--------------------------------------------------------------------------
				$userStore.setUserToken(res.data.access_token);
				const userData = await userService.getUserInfo();
				$userStore.setUser(userData)
			//----------------------------------------------------------------------


			//Informacion general de la app
			//--------------------------------------------------------------------------
				$generalStore.setIsLogged(true);
				$generalStore.setCodeValidated(userData.code_validated);
				$generalStore.setType('buyer');
			//----------------------------------------------------------------------


			//Redireccionamos al dashboard
			//--------------------------------------------------------------------------
				router.push('/dashboard');
			//--------------------------------------------------------------------------

		} catch (error) {
			console.error('Error al iniciar sesión: ', error);
		}
	};
//--------------------------------------------------------------------------


</script>

<style scoped>

  input:focus {
    outline: none;
  }

  .bg-custom {
    background-image: url('/login_mockup.png');
  }
</style>