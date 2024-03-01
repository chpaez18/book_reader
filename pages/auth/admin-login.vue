<template>
	<NuxtLayout name="default">
		<AuthAdminLoginForm />
	</NuxtLayout>
</template>
<script>
/* definePageMeta({ middleware: ["guest"] }) */
definePageMeta({ middleware: ['guest'] })
</script>