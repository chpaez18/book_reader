<template>
  <NuxtLayout name="dashboard">
    <div class="dark-overlay"></div> <!-- Superposición oscura -->
    <section class="flex items-center justify-center">
      <StPageFlip :quotes="quotes" />
    </section>
  </NuxtLayout>
</template>

<script setup>
import {useAsyncData} from "nuxt/app";

definePageMeta({ middleware: ['auth', 'buyer'] })
import { ref } from "vue";
import { UserService } from "~/services/userService";

//Variables reactivas
//--------------------------------------------------------------------------
	const quotes = ref([]);
//--------------------------------------------------------------------------


//Stores
//--------------------------------------------------------------------------
	const { $userStore } = useNuxtApp()
//--------------------------------------------------------------------------

//Services
//--------------------------------------------------------------------------
	const userService = new UserService();
//--------------------------------------------------------------------------

//Inicializacion del libro
//--------------------------------------------------------------------------
	const { data: data, error } = await useAsyncData(
			'userBookInfo',
			() => userService.getUserBookInfo()
	);
	//const userBookInfo = await userService.getUserBookInfo()
	$userStore.setUserBookInfo(data.value.user_book_info);

	quotes.value = data.value.quotes;
//--------------------------------------------------------------------------

</script>

<style>
/* Estilo para la superposición oscura */
.dark-overlay {
  position: fixed; /* Posición fija para cubrir toda la pantalla */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Color negro con opacidad */
  z-index: -1; /* Detrás del contenido pero encima del fondo */
}
</style>
