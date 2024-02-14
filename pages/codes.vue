<template>
	<NuxtLayout name="dashboard">
		<br>
		<br>
		<br>
		<section class="flex items-center justify-center">
			<div>
				hola
			</div>
		</section>
	</NuxtLayout>
</template>

<script setup>
	definePageMeta({ middleware: ['auth', 'admin'] })
</script>