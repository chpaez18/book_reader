<template>
	<div v-for="n in 100" :key="n" class="w-full relative">
		<div v-if="isCompleted(n)">
<!--			si la cita esta completa, mostramos un icono diferente-->
			<Icon :id="`icon-${n}`" name="material-symbols-light:favorite-outline-rounded" class="mb-1 h-6 w-6" :style="{width: '36px', height: '36px', color:'#6633CC'}"/>
			<div :id="n" class="absolute inset-0 flex items-center justify-center rayado">
				<span @click.capture="() => goToPageFn(n)" class="text-black primary indice-page" style="font-size: 9px; margin-left: 16px; margin-top: -1px">{{ n }}</span>
			</div>
		</div>
		<div v-else>
			<Icon :id="`icon-${n}`" name="material-symbols-light:favorite-outline-rounded" class="mb-1 h-6 w-6 text-pink-500" :style="{width: '36px', height: '36px'}"/>
			<div :id="n" class="absolute inset-0 flex items-center justify-center">
				<!-- Pasa el índice actual 'n' a la función goToPage -->
				<span @click.capture="() => goToPageFn(n)" class="text-black primary indice-page" style="font-size: 9px; margin-left: 16px; margin-top: -1px">{{ n }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useIndexStore } from '~/stores/indexStore';
import { watch } from 'vue';

const props = defineProps({
	key: '',
	goToPageFn: Function,
	userBookInfo: Array,
	quotes: Array
})

const indexStore = useIndexStore();


watch(() => indexStore.refreshIndexId, (newId) => {
	if (newId !== null) {
		// Aquí actualizamos solo el elemento con el ID específico
		const elementToUpdate = document.getElementById(newId);
		const elementIcon = document.getElementById('icon-' + newId);

		if (elementToUpdate) {
			elementToUpdate.classList.add('rayado');
		}

		if (elementIcon) {
			elementIcon.style.color = '#6633CC';
		}


		indexStore.resetRefreshIndex();
	}
});


const isCompleted = (n) => {

	// Encuentra el registro en userBookInfo que coincide con la cita en el índice n
	const userBookInfoItem = props.userBookInfo.find(ubi => {
		// Encuentra la cita en quotes que corresponde al quote_id de userBookInfoItem
		const quote = props.quotes.find(q => q.id === ubi.quote_id);
		return quote && quote.number_quote === n && ubi.is_completed === 1;
	});

	// Devuelve true si se encontró un registro que cumple con las condiciones, de lo contrario, false
	return !!userBookInfoItem;
};

</script>

<style scoped>
.rayado::after {
	content: '';
	position: absolute;
	left: 8px;
	top: 3px;
	width: 96%;
	height: 62%;
	border-radius: 20px;
	background: repeating-linear-gradient(
			-45deg,
			#e00da04d,
			#e00da080 2px,
			transparent 2px,
			transparent 4px /* Ajusta este valor para cambiar la separación entre las líneas */
	);
	z-index: 1;
	pointer-events: none; /* Ignora el pseudo-elemento en eventos del ratón */
}
</style>