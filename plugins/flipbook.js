import FlipBook from "flipbook-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FlipBook", FlipBook);
});