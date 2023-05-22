<template>
  <div class="h-screen m-0 p-0">
    <div class="h-screen w-full flex">

      <!-- column 1 -->
      <div class="md: items-center w-full text-white p-4 min-h-screen flex items-start md:items-center justify-center">

        <div class="w-full max-w-3xl">
          <div class="grid grid-cols-1 animate__animated animate__bounce">
            <LogoPinkLogo style="width: 60%" class="mb-4 place-self-center"/>

            <div  class="mt-2">
              <div>
                <div class="font-dela text-title text-3xl text-center">
                  Olvide mi contraseña
                </div>

                <p class="font-blokletters text-paragraph text-base text-center mt-3">
                  Por favor introduce tu correo y te enviaremos un link para resetear la contraseña
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

                <br>

                <div class="button-m-primary">
                  <button class="w-full btn btn-primary text-white rounded-lg font-blokletters">Enviar Link</button>
                </div>

                <br>

                <div class="flex justify-center">
                  <h3 class="ml-2 text-gray-700 font-blokletters text-sm">¿¿Recordaste tu contraseña? &nbsp;</h3>
                  <nuxt-link to="/auth/login" class="text-primary font-blokletters text-sm font-semibold">Inicia Sesión</nuxt-link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

