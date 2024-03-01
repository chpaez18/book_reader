<template>
    <NuxtLayout name="default">
        <AuthLoginForm />
    </NuxtLayout>
</template>
<script>
/* definePageMeta({ middleware: ["guest"] }) */
definePageMeta({ middleware: ['guest'] })
</script>