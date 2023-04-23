<template>
    <NuxtLayout>
        <SignUpForm />
    </NuxtLayout>
</template>

<script>
    import SignUpForm from '@/components/auth/SignUpForm.vue'

    export default {
        components: {
            SignUpForm
        }
    }
</script>