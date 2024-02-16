<template>

  <div v-if="typePage === 'Principal'" class="my-page">
    <div class="relative" style="background-image: url(/book_images/wep/fondo_2.webp); width: 400px; height: 700px; padding: 8px">

      <div class="flex flex-col justify-between h-full rounded-sm p-4" >

        <!-- Input para el título del plan -->

	      <label class="font-blokletters text-xl text-center label-adjustable" :style="{color:'white', backgroundColor:'#E00DA0', paddingTop:'4px', paddingBottom:'4px', paddingLeft:'8px', paddingRight:'8px', borderRadius:'14px', marginBottom:'-27px', width:'100%', marginTop:'24px'}">{{ props.title }}</label>

	      <div class="relative text-center">
          <label class="font-vibur text-title primary inline-block text-5xl uppercase" >{{props.subTitle}}</label>
        </div>

        <!-- Área para subir imagen con label "Mensaje" -->
	      <div class="flex flex-col items-center justify-center w-full h-full max-h-96 border-2 border-solid" :style="{borderColor:'#E00DA0', marginTop:'-38px'}">
		      <input type="file" :id="`imageUpload-${quote.id}`" class="hidden" @change="onFileChange($event, quote.id)" />
		      <label :for="`imageUpload-${quote.id}`" class="flex flex-col items-center justify-center w-full h-full cursor-pointer">
			      <!-- Muestra la imagen cargada por el usuario o la imagen de la anécdota si existe -->
			      <img v-if="imageStore.imageSrc[quote.id]" :src="imageStore.imageSrc[quote.id]" class="image-preview" />
			      <!-- Muestra el icono de la cámara si no hay imagen seleccionada -->
			      <img v-else style="width: 35px; height: 35px" src="/book_images/camara.svg">
			      <label v-if="!imageStore.imageSrc[quote.id]" class="font-blokletters text-paragraph mt-1" style="font-size: 16px">{{quote.message}}</label>
		      </label>
	      </div>

        <!-- Icono de corazón (indicador numero de pagina) -->
	      <button  @mousedown.stop @mouseup.stop @click.stop @click.capture="() => goToPageFn()" class="text-black primary indice-page" style="font-size: 9px; margin-left: 16px; margin-top: -1px"><Icon name="mdi:format-list-bulleted" style="width: 25px; height: 25px; color: #E00DA0;"/></button>
        <div class="page-number-container self-center">
          <Icon name="material-symbols-light:favorite-outline-rounded" style="width: 35px; height: 35px; color: #E00DA0;"/>
          <button class="page-number">{{props.pageNumber}}</button>

        </div>
      </div>
    </div>
  </div>

  <div v-else-if="typePage === 'Anecdota'" class="my-page">
    <div class="relative" style="background-image: url(/book_images/wep/fondo_1.webp); width: 400px; height: 700px; padding: 8px">
      <div class="flex flex-col justify-between h-full rounded-sm p-4">

        <!-- Fecha y Mood -->
        <div class="fecha-mood mb-4">
          <!--              <div class="fecha"><label class="font-blokletters primary text-lg">Fecha:</label> <Icon name="charm:heart" class="mb-1 self-center" :style="{width: '30px', height: '30px', color:'#E00DA0'}"/> - <Icon name="charm:heart" class="mb-1 self-center" :style="{width: '30px', height: '30px', color:'#E00DA0'}"/> - <Icon name="charm:heart" class="mb-1 self-center" :style="{width: '30px', height: '30px', color:'#E00DA0'}"/></div>-->
          <div class="fecha">
            <label class="font-blokletters primary text-lg" style="color: #6633CC">Fecha:</label>

            <!-- Primer campo de fecha con ícono de corazón -->
            <div class="heart-with-date">
              <Icon name="material-symbols-light:favorite-outline-rounded" class="heart-icon" :style="{width: '35px', height: '35px', color:'#E00DA0'}"/>
              <input type="text" :id="`date-day-${quote.id}`" class="date-text" maxlength="2" v-model="dates.day"/>
            </div>

            <!-- Segundo campo de fecha con ícono de corazón -->
            <div class="heart-with-date">
              <Icon name="material-symbols-light:favorite-outline-rounded" class="heart-icon" :style="{width: '35px', height: '35px', color:'#E00DA0'}"/>
              <input type="text" :id="`date-month-${quote.id}`" class="date-text" maxlength="2" v-model="dates.month"/>
            </div>

            <!-- Tercer campo de fecha con ícono de corazón -->
            <div class="heart-with-date">
              <Icon name="material-symbols-light:favorite-outline-rounded" class="heart-icon" :style="{width: '35px', height: '35px', color:'#E00DA0'}"/>
              <input type="text" :id="`date-year-${quote.id}`" class="date-text" maxlength="2" v-model="dates.year"/>
            </div>
          </div>

          <div class="mood">
            <label class="font-blokletters primary text-lg" style="color: #6633CC">Mood:</label>

            <input type="radio" :name="`mood-${quote.id}`" value="😀" :id="`happy-${quote.id}`" class="emoji-radio" hidden @change="handleEmojiChange" v-model="mood">
            <label :for="`happy-${quote.id}`" class="emoji-label">😀</label>

            <input type="radio" :name="`mood-${quote.id}`" value="😕" :id="`sad-${quote.id}`" class="emoji-radio" hidden @change="handleEmojiChange" v-model="mood">
            <label :for="`sad-${quote.id}`" class="emoji-label">😕</label>

            <input type="radio" :name="`mood-${quote.id}`" value="☹️" :id="`verysad-${quote.id}`" class="emoji-radio" hidden @change="handleEmojiChange" v-model="mood">
            <label :for="`verysad-${quote.id}`" class="emoji-label">☹️</label>

            <input type="radio" :name="`mood-${quote.id}`" value="😍" :id="`love-${quote.id}`" class="emoji-radio" hidden @change="handleEmojiChange" v-model="mood">
            <label :for="`love-${quote.id}`" class="emoji-label">😍</label>
          </div>

        </div>

        <!-- Pregunta central -->
        <label class="self-center text-4xl font-vibur uppercase" style="color: #6633CC">¿Alguna Anécdota?</label>
        <textarea :id="`textarea-anecdota-${quote.id}`" class="textarea-anecdota bg-white p-4 rounded-lg" style="resize: none; height: 280px; margin-top: -10px; border:solid 2px #e4e4e4; color: #6633CC" v-model="anecdoteText"></textarea>

        <!-- Palabras que describen el momento -->
        <div class="palabras mt-4">
          <span class="font-blokletters text-xl" style="color:#6633CC; margin-bottom: 3px">Palabras que describen el momento:</span>
          <div class="palabras-contenedor flex flex-wrap" style="margin-top: 20px">
            <input type="text" :id="`palabra1-${quote.id}`" class="palabra" v-model="words[0]">
            <input type="text" :id="`palabra2-${quote.id}`" class="palabra" v-model="words[1]">
            <br>
            <input type="text" :id="`palabra3-${quote.id}`" class="palabra" v-model="words[2]">
            <input type="text" :id="`palabra4-${quote.id}`" class="palabra" v-model="words[3]">
          </div>
        </div>

        <!-- Icono de corazón (indicador numero de pagina) -->
        <div class="page-number-container self-center">
          <Icon name="material-symbols-light:favorite-outline-rounded" style="width: 35px; height: 35px; color: #E00DA0;"/>
          <button class="page-number" :disabled="isSaving" @click="handleSaveAnecdote()">{{ props.pageNumber }}</button>
        </div>

      </div>
    </div>
  </div>

	<div v-if="isSaving" class="modal modal-open">
		<div class="modal-box" style="text-align: -webkit-center">
			<img src="/image_1.png" style="width: 50%">
			<h3 class="my-custom-title-class font-blokletters  px-4 text-4xl text-center" style="color: #6633CC">Cargando...</h3>
			<p class="text-sm text-gray-600 mt-4 leading-relaxed">Subiendo tu anécdota, por favor espera.</p>
			<div class="modal-action">
				<!-- Puedes colocar un botón para cerrar el modal si es necesario -->
				<!-- <button class="btn" @click="isSaving = false">Cerrar</button> -->
			</div>
		</div>
	</div>
</template>


<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import { useImageStore } from '~/stores/imageStore';
import StPageFlip from '/components/StPageFlip.vue';

const { $userStore, $axios, $swal } = useNuxtApp()

const imageStore = useImageStore();
const isSaving = ref(false);

const props = defineProps({
  typePage: '',
  title: '',
  subTitle: '',
  pageNumber: '',
  quote: Object,
  userBookInfo: Array,
	goToPageFn: Function
})

const stPageFlipRef = ref(null);

const accessChildMethod = () => {
	if (stPageFlipRef.value) {
		stPageFlipRef.value.goToIndice(3); // Acceder al método goToPage() del componente hijo
	}
};

onMounted(() => {
	accessChildMethod();
});

const loadImage = ref('');
const mood = ref('');
const anecdoteText = ref('');
const words = ref(['', '', '', '']);
const dates = ref({
  day: '',
  month: '',
  year: ''
});

const matchedAnecdote = ref(null);
const imageSrc = ref({});

watch(() => props.quote, (newQuote) => {
	if (props.userBookInfo && Array.isArray(props.userBookInfo)) {
		const foundAnecdote = props.userBookInfo.find((anecdote) => anecdote.quote_id === newQuote.id);
		if (foundAnecdote) {
			// Establecer los valores de la anécdota encontrada
			mood.value = foundAnecdote.mood;
			anecdoteText.value = foundAnecdote.quote_description;
			words.value = JSON.parse(foundAnecdote.words || '["", "", "", ""]');
			const dateParts = (foundAnecdote.date || '').split('-');
			dates.value = { day: dateParts[2], month: dateParts[1], year: dateParts[0].slice(-2) };

			// Cargar la imagen de la anécdota si existe
			if (foundAnecdote.photo && foundAnecdote.photo.url_view) {
				imageStore.setImageSrc(newQuote.id, foundAnecdote.photo.url_view);
			} else {
				// Si no hay foto, asegurarse de que no haya ninguna imagen previa mostrada
				imageStore.setImageSrc(newQuote.id, null);
			}
		} else {
			// Resetear los inputs si no se encuentra la anécdota
			resetInputs();
			// Asegurarse de que no haya ninguna imagen previa mostrada
			imageStore.setImageSrc(newQuote.id, null);
		}
	}
}, { immediate: true });



function resetInputs() {
	mood.value = '';
	anecdoteText.value = '';
	words.value = ['', '', '', ''];
	dates.value.day = '';
	dates.value.month = '';
	dates.value.year = '';
}

function onFileChange(event, quoteId) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => {
			imageStore.setImageSrc(quoteId, e.target.result);
		};
		reader.readAsDataURL(file);
		imageStore.setImageLoaded(quoteId, true);
	}
}



/*const handleSaveAnecdote = async () => {

	isSaving.value = true;

	const formData = new FormData();
	formData.append('quote_id', props.quote.id);
	formData.append('mood', mood.value);
	formData.append('quote_description', anecdoteText.value);
	formData.append('words', JSON.stringify(words.value));
	formData.append('dates', JSON.stringify(dates.value));
	formData.append('is_completed', 1);

	if (imageStore.imageSrc[props.quote.id] && imageStore.imageLoaded[props.quote.id]) {
		formData.append('image', imageStore.imageSrc[props.quote.id]);
	}


	try {
		const res = await $userStore.saveAnecdote(formData);
		// Verifica si la respuesta es exitosa
		if (res) {

			Swal.fire({
				title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">¡Genial!</span>',
				html: '<div class="my-custom-text-class font-vibur primary text-1xl uppercase">Tu Anécdota ha sido guardada correctamente.</div>',
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
		}
	} catch (error) {
		console.error('Error al guardar la anécdota:', error);
		Swal.fire({
			title: 'Error',
			text: 'Ocurrió un error al guardar la anécdota.',
			icon: 'error',
			confirmButtonText: 'Entendido'
		});
	} finally {
		// Reactiva el botón de guardar independientemente del resultado de la solicitud
		isSaving.value = false;
	}
};*/

const handleSaveAnecdote = () => {

	isSaving.value = true;

	const formData = new FormData();
	formData.append('quote_id', props.quote.id);
	formData.append('mood', mood.value);
	formData.append('quote_description', anecdoteText.value);
	formData.append('words', JSON.stringify(words.value));
	formData.append('dates', JSON.stringify(dates.value));
	formData.append('is_completed', 1);

	if (imageStore.imageSrc[props.quote.id] && imageStore.imageLoaded[props.quote.id]) {
		formData.append('image', imageStore.imageSrc[props.quote.id]);
	}

	// Llama a la función de guardado en segundo plano sin esperar a que termine
	$userStore.saveAnecdote(formData).then(res => {
		// Manejo de la respuesta exitosa
		if (res) {
			Swal.fire({
				title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">¡Genial!</span>',
				html: '<div class="my-custom-text-class font-vibur primary text-1xl uppercase">Tu Anécdota ha sido guardada correctamente.</div>',
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
		}
	}).catch(error => {
		// Manejo de errores
		Swal.fire({
			title: '<span class="my-custom-title-class font-blokletters  px-4 text-4xl text-center">¡Ops!</span>',
			html: '<div class="my-custom-text-class font-vibur primary text-1xl uppercase">Ocurrio un error guardando tu anecdota, intentalo de nuevo.</div>',
			icon: 'warning',
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
	}).finally(() => {


		// Si necesitas realizar alguna acción después de enviar los datos (como reiniciar estados), hazlo aquí
		isSaving.value = false;
	});



};



</script>

<style scoped>
.label-adjustable {
	display: inline-block;
	max-width: max-content;
	white-space: normal;
	word-wrap: break-word;
	line-height: 1.2;
	place-self: center;
}
</style>