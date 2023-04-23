<template>
    <NuxtLayout name="default">
        <AuthLoginForm />
    </NuxtLayout>
</template>
<script>
definePageMeta({
  middleware: ["guest"]
})
</script>