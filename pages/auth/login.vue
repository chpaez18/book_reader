<template>
    <NuxtLayout name="Auth">
        <LoginForm />
    </NuxtLayout>
</template>

<script>
    import LoginForm from '@/components/auth/LoginForm.vue'

    export default {
        components: {
            LoginForm
        }
    }
</script>