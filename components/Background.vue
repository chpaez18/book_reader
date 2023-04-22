<template>
  <img :src="image" alt="" loading="lazy" class="h-full object-cover w-full absolute top-0 left-0 -z-10 animate-fade-in animate-duration-3000">
</template>

<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();
    const cdnUrl = runtimeConfig.public.CDN_URL;
    const image = ref(`${cdnUrl}/Fondo.svg`);
</script>
