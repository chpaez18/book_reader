<template>
  <!-- <img :src="image" alt="" loading="lazy" class="max-w-none xs:h-full object-cover xs:w-full  2xl:h-full 2xl:w-full absolute xs:mt-6 xs:top-12 md:mt-6 17in:w-full  top-0 left-0 -z-10 animate-fade-in animate-duration-3000"> -->
  <img :src="image" alt="" loading="lazy" class="fixed top-0 left-0 h-screen w-screen object-cover -z-10 animate-fade-in animate-duration-3000">
</template>

<script setup lang="ts">
    /* const runtimeConfig = useRuntimeConfig();
    const cdnUrl = runtimeConfig.public.CDN_URL;
    const image = ref(`${cdnUrl}/Fondo.svg`); */
    const image = ref(`/Fondo.svg`);
</script>
