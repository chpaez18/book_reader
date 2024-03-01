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
                  Inicia sesión en tu cuenta de Aministrador
                </div>
                <div class="divider bg-primary" style="height:1px"></div>
              </div>

              <div>
                 <div class="mt-10">
                  <input
                    class="font-blokletters text-sm border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:border-primary-500 focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out"
                    id="email"
                    v-model="email"
                    type="text"
                    placeholder="Correo"
                  >
                </div>
                <div class="mt-10">
                  <input
                    class="font-blokletters text-sm border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:border-primary-500 focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out"
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="Contraseña"
                  >
                </div>

                <br>
	            <button @click="login()" class="w-full btn btn-primary text-white rounded-lg font-blokletters"><Icon name="charm:sign-in" class="mr-2 mb-1 w-5 h-5" /> Iniciar sesión</button>

	            <br>
	            <br>
	              <NuxtLink to="/auth/login"><button class="w-full btn btn-primary text-white rounded-lg font-blokletters"><Icon name="vaadin:arrow-backward" class="mr-2 mb-1 w-5 h-5" /> Regresar</button></NuxtLink>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

//Stores
//--------------------------------------------------------------------------
    const { $generalStore, $userStore, $axios } = useNuxtApp()
	const router = useRouter();
//--------------------------------------------------------------------------

//Variables Reactivas
//--------------------------------------------------------------------------
	const email = ref('');
	const password = ref('');
//--------------------------------------------------------------------------

//Funciones
//--------------------------------------------------------------------------
    async function login() {

	    if (email.value === '') {
		    alert('Debes indicar un correo electronico')
		    return;
	    }
		if (password.value === '') {
		    alert('Debes indicar una contraseña')
		    return;
	    }

	  try {
		  const response = await $axios.post('/login', {
			  email: email.value,
			  password: password.value,
		  });

		  if (response && response.data.data.token) {

			  $userStore.setUserToken(response.data.data.token);

			  //Informacion general de la app
			  //----------------------------------------------------------------------
				  $generalStore.setIsLogged(true);
				  $generalStore.setType('admin');
			  //----------------------------------------------------------------------

			  //Redireccionamos a la pantalla principal
			  //----------------------------------------------------------------------
			      router.push('/codes');
			  //----------------------------------------------------------------------
		  }
	  } catch (error) {

		  Swal.fire({
			  title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">¡Oops!</span>',
			  html: '<div class="my-custom-text-class font-vibur primary text-1xl uppercase">Credenciales inválidas. Por favor, intentalo de nuevo.</div>',
			  icon: 'warning',
			  confirmButtonText: '¡Vale!',
			  didOpen: () => {
				  const confirmButton = document.querySelector('.swal2-confirm');
				  confirmButton.classList.remove('swal2-confirm', 'swal2-styled');
				  confirmButton.classList.add('w-full', 'btn', 'btn-primary', 'text-white', 'rounded-lg', 'font-blokletters');
				  confirmButton.removeAttribute('style');

				  const customTitle = document.querySelector('.my-custom-title-class');
				  const customText = document.querySelector('.my-custom-text-class');

				  if (customTitle) customTitle.style.color = '#6633CC';

			  }
		  })
	  }
  }

//--------------------------------------------------------------------------

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