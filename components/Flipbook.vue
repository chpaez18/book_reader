<template>
  <div id="flipbook">
    <div class="hard"> Portada </div>
    <div> Página 1 </div>
    <div> Página 2 </div>
    <div class="hard"> Contraportada </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  /* $('#flipbook').turn({
    width: 400,
    height: 300,
    autoCenter: true
  }); */
    $(document).ready(function(){
       alert("works!")
    });
});
</script>

<style scoped>
#flipbook {
  width: 400px;
  height: 300px;
}
</style>