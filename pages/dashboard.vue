<template>

  <NuxtLayout name="dashboard">
    <div class="container mx-auto">
      dashboard
    </div>
  </NuxtLayout>

</template>

<script>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'isAdministrator'
})
</script>

<style>

</style>