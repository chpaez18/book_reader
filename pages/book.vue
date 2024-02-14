<template>
  <NuxtLayout name="dashboard">
    <div class="dark-overlay"></div> <!-- Superposición oscura -->
    <section class="flex items-center justify-center">
      <StPageFlip :quotes="userBookInfo.quotes" :userBookInfo="userBookInfo.user_book_info" />
    </section>
  </NuxtLayout>
</template>

<script setup>
  definePageMeta({ middleware: ['auth', 'buyer'] })
  const { $userStore } = useNuxtApp()
  const userBookInfo = await $userStore.getUserBookInfo()
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
