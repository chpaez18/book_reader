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

//Stores
//--------------------------------------------------------------------------
	const { $generalStore, $userStore } = useNuxtApp()
//--------------------------------------------------------------------------

//Variables Reactivas
//--------------------------------------------------------------------------
	const href = ref('')
//--------------------------------------------------------------------------


const type = $generalStore.getType()
if (type == "admin") {

		href.value = '/codes'

	} else if (type == "buyer") {

		href.value = '/dashboard'
	}
</script>