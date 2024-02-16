<template>
	<div v-for="n in 100" :key="n" class="w-full relative">
		<Icon name="material-symbols-light:favorite-outline-rounded" class="mb-1 h-6 w-6 text-pink-500" :style="{width: '36px', height: '36px'}"/>
		<div class="absolute inset-0 flex items-center justify-center">
			<!-- Pasa el índice actual 'n' a la función goToPage -->
			<span @click.capture="() => goToPageFn(n)" class="text-black primary indice-page" style="font-size: 9px; margin-left: 16px; margin-top: -1px">{{ n }}</span>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	key: '',
	goToPageFn: Function
})
</script>

<style scoped>

</style>