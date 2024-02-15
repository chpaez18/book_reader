<template>
	<NuxtLayout name="dashboard">
		<section class="flex items-center justify-center">
			<div class="container mx-auto px-4 py-12 max-w-7xl">
				<div class="flex flex-col items-center">

					<div>
						<h3 class="font-dela text-title text-2xl">Hola, {{user.name}}, el primer paso será válidar tu código</h3>
						<br>
						<br>
					</div>
					<button class=" btn btn-primary text-white rounded-lg font-blokletters" onclick="my_modal.showModal()">¡Válida tu código!</button>
				</div>
			</div>

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
	import { ref } from 'vue';
	import Swal from 'sweetalert2';
	import {useRouter} from "vue-router";
	const router = useRouter();

	const { $generalStore, $userStore, $axios } = useNuxtApp()
	const user = $userStore.getUser()
	const code = ref('');

	let title, html, icon, button

	async function validateCode() {
		const response = await $userStore.validateCode(code.value);
		if (response === "El código no existe") {
			title = "El código no existe"
			html = "Vaya, parece que el código que ingresaste no existe, porfavor, verifica que sea el correcto."
			icon = "warning"
			button = "Intentar de nuevo"

		} else if (response === "Código invalido") {
			title = "Código inválido"
			html = "Vaya, el código que ingresaste se encuentra inactivo, contacta con el administrador."
			icon = "warning"
			button = "Intentar de nuevo"

		} else if (response === "Este código ya ha sido válidado") {
			title = "Código utilizado"
			html = "Vaya, el código que ingresaste ya ha sido utilizado, porfavor, prueba con otro."
			icon = "warning"
			button = "Intentar de nuevo"
		} else if (response === "Código válido") {
			title = "¡Genial!"
			html = "Hemos válidado tu código correctamente, puedes continuar y disfrutar de la experiencia."
			icon = "success"
			button = "¡Continuemos!"
		}

		document.getElementById('my_modal').close();
		code.value = '';

		Swal.fire({
			title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">'+title+'</span>',
			html: '<div class="py-4 font-blokletters text-gray-600 mt-4 leading-relaxed">'+html+'</div>',
			icon: icon,
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
			if (result.isConfirmed && response === "Código válido") {
				$generalStore.setCodeValidated(1);
				router.push('/dashboard');
			}
		});

	}
</script>