<template>
  <div class="h-screen m-0 p-0">
    <div class="h-screen w-full flex">

      <!-- column 1 -->
      <div class="md: items-center w-full md:w-1/2 text-white p-4 min-h-screen flex items-start md:items-center justify-center">

        <div class="w-full max-w-xl">
          <div class="grid grid-cols-1 animate__animated animate__bounce">
            <LogoPinkLogo style="width: 60%" class="mb-4 place-self-center"/>

            <div  class="mt-2">
              <div>
                <div class="font-dela text-title text-3xl text-center">
                  Crea una cuenta
                </div>

                <p class="font-blokletters text-paragraph text-base text-center mt-3">
                  Rellena los siguientes datos para crear tu cuenta
                </p>

                <div class="mt-3 bg-primary" style="height:1px"></div>
              </div>

              <div>
                <div class="mt-10">
                  <input
                    style="border-color: lightgray"
                    class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary font-blokletters text-sm"
                    id="name"
                    type="text"
                    placeholder="Nombre completo"
                  >
                </div>
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

                <div class="button-m-primary">
                  <button class="w-full btn btn-primary text-white rounded-lg font-blokletters">Registrarme</button>
                </div>

                <br>

                <div class="flex justify-center">
                  <h3 class="ml-2 text-gray-700 font-blokletters text-sm">¿Ya tienes una cuenta? &nbsp;</h3>
                  <nuxt-link to="/auth/login" class="text-primary font-blokletters text-sm font-semibold">Inicia Sesión</nuxt-link>
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

  const column2Image = computed(() => ({
    backgroundImage: `url(/login_mockup.png)`
  }))

</script>
