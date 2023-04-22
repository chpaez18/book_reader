<template>
  <div class="h-screen m-0 p-0">
    <div class="h-screen w-full flex">

      <!-- column 1 -->
      <div class="md: items-center w-full md:w-1/2 text-white p-4 min-h-screen flex items-start md:items-center justify-center">

        <div class="w-full max-w-xl">
          <div class="grid grid-cols-1 animate__animated animate__backInDown">
            <img style="width: 60%" class="mb-4 place-self-center" :src="logo" />

            <div  class="mt-2">
              <div>
                <div class="font-dela text-title text-3xl text-center">
                  Inicia sesión en tu cuenta
                </div>

                <p class="font-blokletters text-paragraph text-base text-center mt-3">
                  Por favor introduce tus credenciales para iniciar sesión
                </p>

                <div class="mt-3 bg-primary" style="height:1px"></div>
              </div>

              <div>
                <div class="mt-10">
                  <input
                    style="border-color: lightgray"
                    class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary font-blokletters text-sm"
                    id="email"
                    type="text"
                    placeholder="Correo"
                  >
                </div>
                <div class="mt-10">
                  <input
                    style="border-color: lightgray"
                    class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary font-blokletters text-sm"
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
                    <a href="#" class="text-primary font-blokletters text-sm font-semibold w-full sm:w-auto text-center sm:text-right">¿Olvidaste tu contraseña?</a>
                </div>

                <br>

                <div class="button-m-primary">
                  <button class="w-full btn btn-primary text-white rounded-lg font-blokletters">Iniciar sesión</button>
                </div>

                <br>

                <div class="flex justify-center">
                  <h3 class="ml-2 text-gray-700 font-blokletters text-sm">¿No tienes una cuenta? &nbsp;</h3> <a href="#" class="text-primary font-blokletters text-sm font-semibold">Registrate</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- columna 2 -->
      <div class="w-1/2 bg-custom bg-cover bg-no-repeat text-white p-4 min-h-screen hidden md:block" :style="column2Image">
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
  const runtimeConfig = useRuntimeConfig();
  const cdnUrl = runtimeConfig.public.CDN_URL;

  const logo = ref(`${cdnUrl}/logo_1.svg`);
  const column2Image = computed(() => ({
    backgroundImage: `url(${cdnUrl}/login_mockup.png)`
  }))

</script>
