<template>
  <img :src="isologo" alt="" loading="lazy" :class="props.class">
</template>

<script setup lang="ts">
  const isologo = ref('/iso_blanco.png');
  const props = defineProps({
    class : {
        type: String
    }
  })
</script>

