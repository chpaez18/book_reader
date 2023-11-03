<template>
    <div id="book" style="margin-top: 100px">
        <div class="my-page" data-density="hard">
            <img src="https://ts1.github.io/flipbook-vue/images/1.jpg">
        </div>
        <div class="my-page">
            <img src="https://ts1.github.io/flipbook-vue/images/2.jpg">
        </div>
        <div class="my-page">
            <img src="https://ts1.github.io/flipbook-vue/images/3.jpg">
        </div>
        <div class="my-page">
            <img src="https://ts1.github.io/flipbook-vue/images/4.jpg">
        </div>
        <div class="my-page">
            <img src="https://ts1.github.io/flipbook-vue/images/5.jpg">
        </div>
        <div class="my-page" data-density="hard">
            Last page
        </div>
    </div>
</template>

<script setup>
import { PageFlip } from 'page-flip';
onMounted(() => {

    const pageFlip = new PageFlip(document.getElementById('book'), {
        showCover: true,
        width: 400, // required parameter - base page width
        height: 700, // required parameter - base page height
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
});
</script>
<style scoped>
.solid-container {
  height: 100vh;
  width: 100vh;
}
</style>