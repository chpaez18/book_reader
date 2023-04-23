<template>
  <img :style="props.style" :class="props.class" :src="pinkLogo" />
</template>

<script setup lang="ts">
  const pinkLogo = ref('/logo_1.svg');
  const props = defineProps({
    style : {
        type: String
    },
    class : {
        type: String
    }
  })
</script>

