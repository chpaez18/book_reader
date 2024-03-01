<template>
	<NuxtLayout name="dashboard">
		<section class="flex items-center justify-center">
			<transition name="fade">
				<div class="container mx-auto px-4 py-12 max-w-7xl">
					<div class="flex flex-col items-center">
						<br>
						<div v-if="isLoading" class="spinner-wrapper">
							<span class="loader"></span>
							<h4 class="font-dela text-title text-xl">Cargando usuario...</h4>
							<br>
						</div>
						<div v-else>
							<h3 class="font-dela text-title text-2xl">Hola, {{user.name}}, el primer paso será válidar tu código</h3>
							<br>
						</div>
						<button class=" btn btn-primary text-white rounded-lg font-blokletters" onclick="my_modal.showModal()">¡Válida tu código!</button>
					</div>
				</div>
			</transition>

			<dialog id="my_modal" class="" style="background: transparent; max-height: 500px; max-width: 500px; width: 500px; ">
				<div class="modal-box w-11/12 max-w-5xl">
					<form method="dialog">
						<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<h3 class="font-dela text-title text-3xl">¡Hola!</h3>
					<p class="py-4 font-blokletters text-gray-600 mt-4 leading-relaxed" style="font-size: 20px">Para poder continuar, debemos válidar tu código de compra, porfavor, introducelo a continuación:</p>
					<br>
					<input
							class="font-blokletters text-lg p-4 h-12 border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out"
							id="codigo"
							v-model="code"
							type="text"
							placeholder="Código de compra"
					>
					<br>
					<br>
					<button class="w-full btn btn-primary text-white rounded-lg font-blokletters" @click="validateCode()"><Icon name="mdi:checkbox-marked-circle-outline" class="mr-2 mb-1 w-5 h-5" />  Válidar</button>

				</div>
			</dialog>

		</section>
	</NuxtLayout>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';
import Swal from 'sweetalert2';
import {useRouter} from "vue-router";
import { CodeService } from "@/services/codeService";
import { AuthService } from "@/services/authService";

//Stores
//--------------------------------------------------------------------------
	const { $generalStore, $userStore } = useNuxtApp()
//--------------------------------------------------------------------------

//Services
//--------------------------------------------------------------------------
	const codeService = new CodeService();
	const authService = new AuthService();
	const router = useRouter();
//--------------------------------------------------------------------------

//Variables Reactivas
//--------------------------------------------------------------------------
	const code = ref('');
	const user = ref({});
	const isLoading = ref(true);
//--------------------------------------------------------------------------


//Hooks
//--------------------------------------------------------------------------
	onBeforeMount(async () => {
		isLoading.value = true;
		await authService.init();
		isLoading.value = false;

		//Una vez inicializado el servicio de autenticación, obtenemos el usuario
		user.value =  $userStore.getUser()

	});
//--------------------------------------------------------------------------


//Funciones
//--------------------------------------------------------------------------
	let title, html, icon, button

	async function validateCode() {
		const response = await codeService.validateCode(code.value);
		const { status, message, detail } = response;

		document.getElementById('my_modal').close();
		code.value = '';

		const button = status === 'success' ? '¡Continuemos!' : 'Intentar de nuevo';

		Swal.fire({
			title: `<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">${message}</span>`,
			html: `<div class="py-4 font-blokletters text-gray-600 mt-4 leading-relaxed">${detail}</div>`,
			icon: status,
			confirmButtonText: button,
			didOpen: () => {
				const confirmButton = document.querySelector('.swal2-confirm');
				confirmButton.classList.remove('swal2-confirm', 'swal2-styled');
				confirmButton.classList.add('w-full', 'btn', 'btn-primary', 'text-white', 'rounded-lg', 'font-blokletters');
				confirmButton.removeAttribute('style');

				const customTitle = document.querySelector('.my-custom-title-class');
				const customText = document.querySelector('.my-custom-text-class');

				if (customTitle) customTitle.style.color = '#6633CC';

			}
		}).then((result) => {
			// Verificamos si el botón de confirmación fue clickeado
			if (result.isConfirmed && status === "success") {
				$generalStore.setCodeValidated(1);
				router.push('/dashboard');
			}
		});

	}
//--------------------------------------------------------------------------
</script>
