<template>
	<NuxtLayout name="dashboard">
		<br>
		<br>
		<br>
		<section class="flex items-center justify-center">
			<div>
				<div class="flex flex-col h-full min-h-table" style="max-width: 1031px; width: 1031px">
				<VueGoodTable
						:columns="columns"
						:rows="items"
						compactMode = "true"
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
		width: '300px',
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
		type: 'decimal',
		width: '200px',
		sortable: false
	},
	{
		label: 'Status',
		field: 'status',
		type: 'decimal',
		width: '150px',
		sortable: false
	},
	{
		label: 'Acción',
		field: 'action',
		sortable: false,
		width: '70px',
	},
]

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






</script>

<style scoped>

input:focus {
	outline: none;
}

.fixed-height-table .vgt-table {
	height: 500px; /* Ajusta a la altura que necesites */
}
</style>