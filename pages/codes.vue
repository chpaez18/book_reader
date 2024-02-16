<template>
	<NuxtLayout name="dashboard">
		<br>
		<br>
		<br>
		<section class="flex items-center justify-center">
			<div>
				<div class="flex flex-col h-full min-h-table" style="max-width: 1331px; width: 1331px">
					<div class="text-right">
						<button class=" btn btn-primary text-white rounded-md font-blokletters btn-sm mb-2" onclick="my_modal_create.showModal()"><Icon name="mdi:plus-thick" class="mr-2 mb-1 w-5 h-5" /> Nuevo Código</button>
					</div>
				<VueGoodTable
						:columns="columns"
						:rows="items"
						compactMode
						styleClass="vgt-table striped condensed"
						theme="polar-bear"
						:search-options="{
						    enabled: true,
						    placeholder: 'Búsqueda'
						}"
						:pagination-options="{
						    enabled: true,
						    mode: 'pages',
						    perPage: 10,
						    nextLabel: 'Siguiente',
						    prevLabel: 'Anterior',
						    rowsPerPageLabel: 'Registros por página',
						    ofLabel: 'de',
						    pageLabel: 'página', // for 'pages' mode
						    allLabel: 'Todo'
						}"
				>
					<template v-slot:table-row="{ row, column }">
						<div v-if="column.field === 'action'">
							<a v-if="row.status === 1" class="hover:cursor-pointer" @click="changeStatus(row.email)" title ="Desactivar Código"> <Icon name="fe:disabled" style="width: 18px; height: 18px; color: #E00DA0;"/></a>
							<a v-if="row.status === 0" class="hover:cursor-pointer" @click="changeStatus(row.email)" title ="Activar Código"> <Icon name="mdi:checkbox-marked-circle-outline" style="width: 18px; height: 18px; color: #E00DA0;"/></a>
							&nbsp; <a class="hover:cursor-pointer" @click="deleteCode(row.id)" title ="Eliminar Código"> <Icon name="mdi:trash-can-outline" style="width: 18px; height: 18px; color: #E00DA0;"/></a>
						</div>

						<div v-else-if="column.field === 'status'">
							<span class="badge" :title="{'Desactivar Código': row.status === 1, 'Activar Código': row.status === 0}" :class="{'badge-primary': row.status === 1, 'badge-secondary': row.status === 0}"> {{ row.status === 1 ? 'Activo' : 'Inactivo' }}</span>
						</div>
						<div v-else>
							{{ row[column.field] }}
						</div>
					</template>
					<template #emptystate>
						<span class="flex items-center justify-center">¡No se han encontrado registros!</span>
					</template>
				</VueGoodTable>
				</div>
			</div>

			<dialog id="my_modal_create" class="" style="background: transparent; max-height: 500px; max-width: 500px; width: 500px; ">
				<div class="modal-box w-11/12 max-w-5xl">
					<form method="dialog">
						<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
					<h3 class="font-dela text-title text-2xl">Generador de Códigos</h3>
					<p class="py-4 font-blokletters text-gray-600 mt-4 leading-relaxed" style="font-size: 20px">Porfavor introduce los siguientes datos, para poder generar un código nuevo:</p>
					<br>
					<input
							class="font-blokletters text-lg p-4 h-12 border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out"
							id="name"
							v-model="name"
							type="text"
							placeholder="Nombre del Comprador"
							required
					>
					<br>
					<br>
					<input
							class="font-blokletters text-lg p-4 h-12 border rounded w-full py-2 px-3 border-gray-300 text-gray-700 leading-tight focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out"
							id="email"
							v-model="email"
							type="text"
							placeholder="Correo Electrónico"
							required
					>
					<br>
					<br>
					<button class="w-full btn btn-primary text-white rounded-lg font-blokletters" @click="generateCode()"><Icon name="mdi:checkbox-marked-circle-outline" class="mr-2 mb-1 w-5 h-5" />  Generar</button>

				</div>
			</dialog>
		</section>
	</NuxtLayout>
</template>

<script setup>
import Vue3EasyDataTable from 'vue3-easy-data-table'
import {onMounted, ref} from "vue";
import Swal from 'sweetalert2';
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';



definePageMeta({ middleware: ['auth', 'admin'] })
const { $userStore } = useNuxtApp()


const items = ref([]);
const columns = [

	{
		label: 'Nombre del Comprador',
		field: 'name',
		width: '280px',
		sortable: false
	},
	{
		label: 'Correo',
		field: 'email',
		width: '200px',
		sortable: false
	},
	{
		label: 'Codigo',
		field: 'code',
		sortable: false,
		width: '150px',

	},
	{
		label: 'Status',
		field: 'status',
		width: '100px',
		sortable: false
	},
	{
		label: 'Acción',
		field: 'action',
		sortable: false,
		width: '70px',
	},
]

const name = ref('');
const email = ref('');

	try {
		items.value = await $userStore.getCodes();
	} catch (error) {
		console.error("Error al cargar los datos:", error);
	}



const changeStatus = async (email)  => {
	const response = await $userStore.changeCodeStatus(email)

	if (response) {

		Swal.fire({
			title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">¡Listo!</span>',
			html: '<div class="my-custom-text-class font-vibur primary text-1xl uppercase">El código fue actualizado correctamente.</div>',
			icon: 'success',
			confirmButtonText: '¡Continuemos!',
			didOpen: () => {
				const confirmButton = document.querySelector('.swal2-confirm');
				confirmButton.classList.remove('swal2-confirm', 'swal2-styled');
				confirmButton.classList.add('w-full', 'btn', 'btn-primary', 'text-white', 'rounded-lg', 'font-blokletters');
				confirmButton.removeAttribute('style');

				const customTitle = document.querySelector('.my-custom-title-class');
				const customText = document.querySelector('.my-custom-text-class');

				if (customTitle) customTitle.style.color = '#6633CC';

			}
		})

		items.value = await $userStore.getCodes();
	}
};


async function generateCode() {

	if (name.value === '' || email.value === ''){
		alert('Debes rellenar todos los campos')
		return;
	}

	const data = {
		name: name.value,
		email: email.value
	}

	const response = await $userStore.generateCode(data);

	if (response) {
		document.getElementById('my_modal_create').close();
		name.value = '';
		email.value = '';

		Swal.fire({
			title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">¡Genial!</span>',
			html: '<div class="py-4 font-blokletters text-gray-600 mt-4 leading-relaxed"> El código ha sido generado exitosamente.</div>',
			icon: 'success',
			confirmButtonText: '¡Continuar!',
			didOpen: () => {
				const confirmButton = document.querySelector('.swal2-confirm');
				confirmButton.classList.remove('swal2-confirm', 'swal2-styled');
				confirmButton.classList.add('w-full', 'btn', 'btn-primary', 'text-white', 'rounded-lg', 'font-blokletters');
				confirmButton.removeAttribute('style');

				const customTitle = document.querySelector('.my-custom-title-class');
				const customText = document.querySelector('.my-custom-text-class');

				if (customTitle) customTitle.style.color = '#6633CC';

			}
		})
		items.value = await $userStore.getCodes();
	} else {
		document.getElementById('my_modal_create').close();
		name.value = '';
		email.value = '';

		Swal.fire({
			title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">Ocurrio un error</span>',
			html: '<div class="py-4 font-blokletters text-gray-600 mt-4 leading-relaxed">Ha ocurrido un error, porfavor intentalo nuevamente.</div>',
			icon: 'warning',
			confirmButtonText: 'Intentar de nuevo',
			didOpen: () => {
				const confirmButton = document.querySelector('.swal2-confirm');
				confirmButton.classList.remove('swal2-confirm', 'swal2-styled');
				confirmButton.classList.add('w-full', 'btn', 'btn-primary', 'text-white', 'rounded-lg', 'font-blokletters');
				confirmButton.removeAttribute('style');

				const customTitle = document.querySelector('.my-custom-title-class');
				const customText = document.querySelector('.my-custom-text-class');

				if (customTitle) customTitle.style.color = '#6633CC';

			}
		})
	}





}


async function deleteCode(id) {

	Swal.fire({
		title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">Eliminar Código</span>',
		html: '<div class="py-4 font-blokletters text-gray-600 mt-4 leading-relaxed">¿Estás realmente seguro de querer eliminar este código?</div>',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Si, quiero eliminarlo',
		cancelButtonText: 'Cancelar',
		didOpen: () => {
			const confirmButton = document.querySelector('.swal2-confirm');
			confirmButton.classList.remove('swal2-confirm', 'swal2-styled');
			confirmButton.classList.add('btn', 'btn-primary', 'text-white', 'rounded-lg', 'font-blokletters');
			confirmButton.removeAttribute('style');

			const customTitle = document.querySelector('.my-custom-title-class');
			const customText = document.querySelector('.my-custom-text-class');

			if (customTitle) customTitle.style.color = '#6633CC';

			const cancelButton = Swal.getCancelButton();
			cancelButton.classList.add('btn', 'btn-secondary', 'text-white', 'rounded-lg', 'font-blokletters');
			cancelButton.removeAttribute('style');

		}
	}).then((result) => {
		// Verificamos si el botón de confirmación fue clickeado
		if (result.isConfirmed) {
			$userStore.deleteCode(id);
			items.value = items.value.filter(item => item.id !== id);
			Swal.fire({
				title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">Código Eliminado</span>',
				html: '<div class="py-4 font-blokletters text-gray-600 mt-4 leading-relaxed">El código ha sido eliminado correctamente.</div>',
				icon: 'success',
				confirmButtonText: '¡Continuar!',
				didOpen: () => {
					const confirmButton = document.querySelector('.swal2-confirm');
					confirmButton.classList.remove('swal2-confirm', 'swal2-styled');
					confirmButton.classList.add('btn', 'btn-primary', 'text-white', 'rounded-lg', 'font-blokletters');
					confirmButton.removeAttribute('style');

					const customTitle = document.querySelector('.my-custom-title-class');
					const customText = document.querySelector('.my-custom-text-class');

					if (customTitle) customTitle.style.color = '#6633CC';

				}
			})
		}
	});

}

</script>

<style scoped>

input:focus {
	outline: none;
}

.fixed-height-table .vgt-table {
	height: 500px; /* Ajusta a la altura que necesites */
}
</style>