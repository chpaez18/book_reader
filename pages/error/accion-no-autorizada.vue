<template>
	<NuxtLayout name="dashboard">
		<section class="flex items-center justify-center">
			<div class="container mx-auto px-4 py-12 max-w-7xl">
				<div class="flex flex-col items-center">

					<div>
						<h3 class="font-dela text-title text-4xl">Acción no autorizada</h3>
						<br>
						<br>
						<a :href="href"><button class="w-full btn btn-primary text-white rounded-lg font-blokletters"> Regresar </button></a>
					</div>
				</div>
			</div>
		</section>
	</NuxtLayout>
</template>
<script setup>
	import { ref } from 'vue';
	const { $generalStore, $userStore } = useNuxtApp()

	const rol = $userStore.getUserRol()
	const isLogged = $generalStore.getIsLogged()
	const href = ref('')
	if (rol == "Admin") {

		href.value = '/codes'

	} else if (rol == "Buyer") {

		href.value = '/dashboard'
	}
</script>