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
			      <img v-if="imageStore.imageSrc[quote.id]" :src="imageStore.imageSrc[quote.id]" class="image-preview" @error="handleImageError" />
			      <!-- Muestra el icono de la cámara si no hay imagen seleccionada -->
			      <img v-else style="width: 35px; height: 35px" src="/book_images/camara.svg">
			      <label v-if="!imageStore.imageSrc[quote.id]" class="font-blokletters text-paragraph mt-1" style="font-size: 16px">{{quote.message}}</label>
		      </label>
	      </div>

	      <!-- boton de indice-->
	      <div style="align-self: center;">
		      <button  @mousedown.stop @mouseup.stop @click.stop @click.capture="() => goToPageFn()" class="text-black primary indice-page" style="font-size: 9px; margin-top: -10px"><Icon name="mdi:format-list-bulleted" style="width: 25px; height: 25px; color: #E00DA0;"/></button>
<!--		      <button v-if="canShares[quote.id]" :id="`btn-share-${quote.id}`" @mousedown.stop @mouseup.stop @click.stop @click.capture="() => shareViaWebShare(quote.id)" class="text-black primary indice-page" style="font-size: 9px; margin-top: -10px; margin-left: 20px"><Icon name="fa6-brands:instagram" style="width: 25px; height: 25px; color: #E00DA0;"/></button>
		      <button v-if="canShares[quote.id]" :id="`btn-share-${quote.id}`" @mousedown.stop @mouseup.stop @click.stop @click.capture="() => shareViaWebShare(quote.id)" class="text-black primary indice-page" style="font-size: 9px; margin-top: -10px; margin-left: 20px"><Icon name="fa6-brands:tiktok" style="width: 19px; height: 19px; color: #E00DA0;"/></button>-->
	      </div>

	      <!-- Icono de corazón (indicador numero de pagina) -->
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
              <input type="text" :id="`date-day-${quote.id}`" class="date-text" maxlength="2" v-model="dates.day" @input="jumpToNextInput($event, 'date-month-' + quote.id)"/>
            </div>

            <!-- Segundo campo de fecha con ícono de corazón -->
            <div class="heart-with-date">
              <Icon name="material-symbols-light:favorite-outline-rounded" class="heart-icon" :style="{width: '35px', height: '35px', color:'#E00DA0'}"/>
              <input type="text" :id="`date-month-${quote.id}`" class="date-text" maxlength="2" v-model="dates.month" @input="jumpToNextInput($event, 'date-year-' + quote.id)"/>
            </div>

            <!-- Tercer campo de fecha con ícono de corazón -->
            <div class="heart-with-date">
              <Icon name="material-symbols-light:favorite-outline-rounded" class="heart-icon" :style="{width: '35px', height: '35px', color:'#E00DA0'}"/>
              <input type="text" :id="`date-year-${quote.id}`" class="date-text" maxlength="2" v-model="dates.year" />
            </div>
          </div>

          <div class="mood">
            <label class="font-blokletters primary text-lg" style="color: #6633CC">Mood:</label>

            <input type="radio" :name="`mood-${quote.id}`" value="😀" :id="`happy-${quote.id}`" class="emoji-radio" hidden @change="handleEmojiChange" v-model="mood" @input="jumpToNextInput($event, 'textarea-anecdota-' + quote.id)">
            <label :for="`happy-${quote.id}`" class="emoji-label">😀</label>

            <input type="radio" :name="`mood-${quote.id}`" value="😕" :id="`sad-${quote.id}`" class="emoji-radio" hidden @change="handleEmojiChange" v-model="mood" @input="jumpToNextInput($event, 'textarea-anecdota-' + quote.id)">
            <label :for="`sad-${quote.id}`" class="emoji-label">😕</label>

            <input type="radio" :name="`mood-${quote.id}`" value="☹️" :id="`verysad-${quote.id}`" class="emoji-radio" hidden @change="handleEmojiChange" v-model="mood" @input="jumpToNextInput($event, 'textarea-anecdota-' + quote.id)">
            <label :for="`verysad-${quote.id}`" class="emoji-label">☹️</label>

            <input type="radio" :name="`mood-${quote.id}`" value="😍" :id="`love-${quote.id}`" class="emoji-radio" hidden @change="handleEmojiChange" v-model="mood" @input="jumpToNextInput($event, 'textarea-anecdota-' + quote.id)">
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
<!--	      <div class="flex-heart items-center gap-2">
		      <Icon name="material-symbols-light:favorite-outline-rounded" class="icon-heart-anecdote"/>
		      <span class="page-number-anecdote">{{ props.pageNumber }}</span>
		      <Icon name="mdi:arrow-left" class="icon-arrow-anecdote"/>
		      <span class="text-instruction primary" style="color:#6633CC;">click aquí para guardar</span>
	      </div>-->
	      <div class="page-number-anecdote-container self-center mt-3">
		      <button class="btn btn-outline btn-custom w-full font-blokletters text-xl" style="font-size: 13px" :disabled="isSaving" @click="handleSaveAnecdote()">Guardar Cita</button>
	      </div>
<!--	      <div class="page-number-container self-center">
		      <Icon name="material-symbols-light:favorite-outline-rounded" style="width: 35px; height: 35px; color: #E00DA0;"/>
		      <button class="page-number" :disabled="isSaving" @click="handleSaveAnecdote()">{{ props.pageNumber }}</button>
	      </div>-->


      </div>
    </div>
  </div>

  <div v-if="isSaving" class="modal modal-open">
		<div class="modal-box" style="text-align: -webkit-center">
			<img src="/image_1.png" style="width: 50%">
			<h3 class="my-custom-title-class font-blokletters  px-4 text-4xl text-center" style="color: #6633CC">Cargando...</h3>
			<p class="text-sm text-gray-600 mt-4 leading-relaxed">Guardando tu anécdota, por favor espera.</p>
			<div class="modal-action">
			</div>
		</div>
	</div>

</template>


<script setup>
import {ref, computed, watch } from 'vue';
import Swal from 'sweetalert2';
import { useImageStore } from '~/stores/imageStore';
import { BookService } from "~/services/bookService";
import { useIndexUpdater } from '@/composables/useIndexUpdater';

//Props del componente
//--------------------------------------------------------------------------
	const props = defineProps({
		typePage: '',
		title: '',
		subTitle: '',
		pageNumber: '',
		quote: Object,
		goToPageFn: Function
	})
//--------------------------------------------------------------------------


//Services
//--------------------------------------------------------------------------
	const bookService = new BookService();
//--------------------------------------------------------------------------


//Composables
//--------------------------------------------------------------------------
	//Este nos ayudara a colocar el efecto rayado en el indice, tan pronto la anecdota se guarde
	const { updateElement } = useIndexUpdater();
//--------------------------------------------------------------------------

//Stores
//--------------------------------------------------------------------------
	const { $userStore } = useNuxtApp()
	const imageStore = useImageStore();

	const userBookInfo = $userStore.getUserBookInfo();
//--------------------------------------------------------------------------


//Variables reactivas
//--------------------------------------------------------------------------
	const isSaving = ref(false);
	//const canShares = ref({});

	const mood = ref('');
	const anecdoteText = ref('');
	const words = ref(['', '', '', '']);
	const dates = ref({
		day: '',
		month: '',
		year: ''
	});
	const imageSrc = ref({});
//--------------------------------------------------------------------------



/*async function shareViaWebShare(quoteId) {
	const record = $userStore.getUserBookInfoStoreById(quoteId);
	await fetch('https://drive.google.com/thumbnail?id=1E5kXyXw7SkGlcxoIsXvE8nP-KH-Gz9Ar&sz=w1000')
			.then(res => res.blob())
			.then(blob => {
				console.log(blob)
			})
			.catch(error => console.error('Error al cargar la imagen:', error));

	if (navigator.share) {
		navigator.share({
			files: [new File([blob], "test.jpg", { type: 'image/jpeg' })],
		}).then(() => console.log('Compartido con éxito'))
				.catch(error => console.error('Error al compartir', error));
	} else {
		// Fallback para navegadores que no soportan la API
		console.log('Web Share API no es soportada en este navegador.');
	}
}*/

/*const handleImageError = (quoteId) => {

	//en caso de que la imagen no cargue, aqui podriamos variar la url armada, por ejemplo:
	//imageStore.imageSrc[quoteId] + '=s1000' ya que url_view en db se guarda con '=w1000', variamos entre la w y la s

	//const newImageUrl = imageStore.imageSrc[quoteId] + '=s1000'; // Ejemplo de modificación de URL
	//imageStore.setImageSrc(quoteId, newImageUrl);
};*/



//Watchers
//--------------------------------------------------------------------------
	//Este watch se encarga de cargar la informacion de la anecdota si existe
	watch(() => props.quote, (newQuote) => {
		if (userBookInfo && Array.isArray(userBookInfo)) {
			const foundAnecdote = userBookInfo.find((anecdote) => anecdote.quote_id === newQuote.id);
			if (foundAnecdote) {
				// Establecemos los valores de la anécdota encontrada
				mood.value = foundAnecdote.mood;
				anecdoteText.value = foundAnecdote.quote_description;
				words.value = JSON.parse(foundAnecdote.words || '["", "", "", ""]');
				const dateParts = (foundAnecdote.date || '').split('-');
				dates.value = { day: dateParts[2], month: dateParts[1], year: dateParts[0].slice(-2) };

				// Cargamos la imagen de la anécdota si existe
				if (foundAnecdote.photo && foundAnecdote.photo.url_view) {
					imageStore.setImageSrc(newQuote.id, foundAnecdote.photo.url_view);
				} else {
					// Si no hay foto, nos aseguramos de que no haya ninguna imagen previa mostrada
					imageStore.setImageSrc(newQuote.id, null);
				}
			} else {
				// Reseteamos los inputs si no se encuentra la anécdota
				resetInputs();
				// Nos aseguramos de que no haya ninguna imagen previa mostrada
				imageStore.setImageSrc(newQuote.id, null);
			}
		}
	}, { immediate: true });

	//Este watch se encarga de evaluar y mostrar los iconos de compartir en redes sociales, descomentar si en algun futuro se cambia la forma de almacenar las imagenes a un servicio externo
	/*watch(() => $userStore.getUserBookInfoStore(), (userBookInfo) => {
		userBookInfo.forEach(anecdote => {
			canShares.value[anecdote.quote_id] = !!anecdote && anecdote.is_completed;
		});
	}, { deep: true, immediate: true });*/

//--------------------------------------------------------------------------


//Funciones
//--------------------------------------------------------------------------
	const isDateComplete = computed(() => {
		return dates.value.day.length === 2 && dates.value.month.length === 2 && dates.value.year.length === 2;
	});

	const isDateValid = computed(() => {
		// Aquí puedes agregar validaciones adicionales para asegurarte de que la fecha sea válida
		// Por ejemplo, que el día sea entre 1 y 31 y el mes entre 1 y 12
		const day = parseInt(dates.value.day);
		const month = parseInt(dates.value.month);
		const year = parseInt(dates.value.year);
		return day > 0 && day < 32 && month > 0 && month < 13 && year >= 0;
	});

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

	const jumpToNextInput = (event, nextInputId) => {
		const value = event.target.value;
		const maxLength = event.target.maxLength;

		if (value.length >= maxLength) {
			const nextInput = document.getElementById(nextInputId);
			if (nextInput) {
				nextInput.focus();
			}
		}
	};

	const handleSaveAnecdote = () => {

		// Validamos la fecha y el mood
		//--------------------------------------------------------------------------
			if (!isDateComplete.value && !isDateValid.value) {
				alert('Debes indicar un fecha');
				return;
			}

			if (mood.value === '') {
				alert('Debes seleccionar un mood')
				return;
			}
		//--------------------------------------------------------------------------


		//Iniciamos un nuevo form data para enviar la informacion de la anecdota
		//--------------------------------------------------------------------------
			isSaving.value = true;
			const formData = new FormData();
			formData.append('quote_id', props.quote.id);
			formData.append('mood', mood.value);
			formData.append('quote_description', anecdoteText.value);
			formData.append('words', JSON.stringify(words.value));
			formData.append('dates', JSON.stringify(dates.value));
			formData.append('is_completed', 1);

			//si la imagen cambio, la agregamos al form data, de lo contrario no
			if (imageStore.imageSrc[props.quote.id] && imageStore.imageLoaded[props.quote.id]) {
				formData.append('image', imageStore.imageSrc[props.quote.id]);
			}
		//--------------------------------------------------------------------------

		//Llamamos a la función de guardado en segundo plano sin esperar a que termine
		//--------------------------------------------------------------------------
			bookService.saveAnecdote(formData).then(res => {
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

					//actualizamos el store con la nueva anecdota
					$userStore.updateUserBookInfo(res)

					//actualizamos el indice principal para colocar el efecto rayado sobre el corazon de inmediato
					updateElement(props.quote.id)
				}
			}).catch(error => {
				console.log(error)
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
				isSaving.value = false;
			});
		//--------------------------------------------------------------------------
	};
//--------------------------------------------------------------------------

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