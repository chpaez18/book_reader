<template>
  <div id="book-container">
    <div id="book" style="margin-top: 140px">

        <!-- PORTADA  -->
          <div class="my-page" data-density="hard">
              <img src="/book_images/wep/portada.webp">
          </div>
        <!-- PORTADA  -->

        <!-- PRIMERAS PALABRAS  -->
          <div class="my-page">
            <div class="relative" style="background-image: url(/book_images/wep/fondo_1.webp); width: 400px; height: 700px; padding: 8px">
              <div class="flex flex-col justify-between h-full rounded-sm p-4">
                <div class="md:flex">
                  <div class="w-full p-4">
                    <div class="text-center">
                      <h2 class="font-vibur text-title primary inline-block text-6xl">Este libro de 100 citas pertenece a:</h2>
                      <br>
                      <br>
                      <div class="inline-block w-auto"> <!-- w-auto para que el ancho se ajuste al contenido -->
                        <label class="w-full uppercase font-blokletters p-1 px-4 border rounded-lg text-xl" :style="{backgroundColor:'#E00DA0', color:'white'}">{{user.name}}</label>
                      </div>
                    </div>
                    <br>
                    <br>
                    <p class="text-sm text-gray-600 mt-4 leading-relaxed">
                        Una mujer admirable que se ha esmerado en brindar felicidad y crear memorables recuerdos en la vida de quienes la rodean.
                    </p>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">
                        Eres tú indiscutiblemente el significado de la palabra AMOR y mereces (siendo mezquina) al menos el mismo amor que demuestras a los demás.
                    </p>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">
                        Este libro de 100 citas está dispuesto a hacerte vivir nuevas experiencias y te ayudará a crear una hermosa historia con esa niña y ahora mujer que decidió abrir su corazón y colocarse en el centro para mimarse, quererse y AMARSE con lo más profundo de su ser a partir de la cita 1.

                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="my-page">
            <div class="relative" style="background-image: url(/book_images/wep/fondo_2.webp); width: 400px; height: 700px; padding: 8px">
              <div class="flex flex-col justify-between h-full rounded-sm p-4">
                <div class="md:flex">
                  <div class="w-full p-4">
                    <p class="text-sm text-gray-600 mt-4 leading-relaxed">
                      No quisiera hacer spoiler de lo que estás a punto de vivir, pero prepárate para ser la persona más espléndida, detallista, aventurera y curiosa que jamás hayas conocido, así que penas y tabúes ¡Fuera!
                    </p>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">
                      Yo estaré acompañándote en cada paso que des alentándote a que estés cómoda con tu compañía  y a que te sientas plena de convertirte en el amor de tu vida.
                    </p>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">
                      Recibe de mi parte un gran abrazo y mil gracias por adquirir mi guía para fomentar el amor propio.
                      <br>
                      <div>
                        <img style="width: 75px; float: right; margin-top: 20px" src="/book_images/firma.png">
                      </div>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- FIN PRIMERAS PALABRAS  -->

        <!-- INDICE  -->
          <div class="my-page indice">
            <div class="relative" style="background-image: url(/book_images/wep/fondo_1.webp); width: 400px; height: 700px; padding: 8px">
              <div class="flex flex-col justify-between h-full rounded-sm p-4">
                <!-- Input para el título del plan -->
                <label class="font-blokletters  px-4  text-xl text-center" :style="{color:'#6633CC'}">Check de</label>
                <div class="relative text-center" >
                  <label class="font-vibur text-title primary inline-block text-5xl uppercase" style="margin-top: 11px">Citas</label>
                </div>

                <div class="grid grid-cols-10 gap-4 p-4" style="margin-top: 20px; margin-bottom: 60px; padding: 0px">
	                <BookIndice :goToPageFn="goToPage" :userBookInfo="userBookInfo" :quotes="quotes"/>
                </div>

              </div>
            </div>
          </div>
        <!-- FIN INDICE  -->

        <!-- CITAS  -->
          <div v-for="(quote, index) in quotes" :key="index">
            <!-- El número de página es (index * 2) + 1 -->
            <BookPages typePage="Principal" :title="quote.first_title" :subTitle="quote.second_title" :quote="quote" :pageNumber="(index + 1)" :goToPageFn="goToIndice"/>

            <!-- El número de página es (index * 2) + 2 -->
            <BookPages typePage="Anecdota" :pageNumber="(index * 2) + 2" :quote="quote" :goToPageFn="goToIndice"/>
          </div>
        <!-- FIN CITAS  -->

        <!-- ULTIMAS PALABRAS  -->
          <div class="my-page">
            <div class="relative" style="background-image: url(/book_images/wep/fondo_2.webp); width: 400px; height: 700px; padding: 8px">
              <div class="flex flex-col justify-between h-full rounded-sm p-4">
                <div class="md:flex">
                  <div class="w-full p-4">
                    <div class="text-center">
                      <h2 class="font-dela text-title primary inline-block text-2xl">¡Has concluido
                        exitosamente tus</h2> <br>
                      <h2 class="font-dela text-title primary inline-block text-2xl">100 CITAS</h2>
                    </div>
                    <br>
                    <p class="text-sm text-gray-600 mt-4 leading-relaxed text-center">
                      ¡Y no puedo estar más feliz por ti, qué ser parte de esto!.
                    </p>
                    <br>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed text-center">
                      Ahora bien. ¿Te parece si hacemos una promesa?
                    </p>
                    <br>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed text-center">
                      ¿Qué tal si a partir de hoy optamos por tener citas tal como las ya vividas en esta guía?
                    </p>
                    <br>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed text-center">
                      ¿Te animas? ¡Anda, di que sí!
                    </p>
                    <br>
                    <p class="text-sm text-gray-600 mt-2 leading-relaxed text-center">
                      Yo, <input type="text" class="palabra" style="width: 110px; padding-left: 7px"> me comprometo a mimarme, amarme y cuidarme todos los
                      días de mi vida y tendré el hábito de
                      planificar citas que me permitan
                      sentirme bien con mi propia compañia.

                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- FIN ULTIMAS PALABRAS  -->

        <!-- CONTRAPORTADA  -->
          <div class="my-page" data-density="hard">
            <div class="relative" style="background-image: url(/book_images/wep/contraportada.webp); width: 400px; height: 700px; padding: 8px">
            </div>
          </div>
        <!-- FIN CONTRAPORTADA  -->
    </div>
	<div v-if="isLoading" class="progress-bar-container">
		<div class="progress-bar" style="width: 0%;"></div>
	</div>
  </div>
</template>

<script setup>
import { PageFlip } from 'page-flip';
import { ref, onMounted } from 'vue';

//Props del componente
//--------------------------------------------------------------------------
	const props = defineProps({
		quotes: Array,
	})
//--------------------------------------------------------------------------


//Stores
//--------------------------------------------------------------------------
	const { $userStore, $bookStore } = useNuxtApp()
//--------------------------------------------------------------------------


//Variables reactivas
//--------------------------------------------------------------------------
	var flipController = ref(null);
	const isLoading = ref(true);
	const userBookInfo = ref([]);
//--------------------------------------------------------------------------


//Inicializacion del libro
//--------------------------------------------------------------------------
  const user = $userStore.getUser()
  userBookInfo.value = Array.from($userStore.getUserBookInfo());

  onMounted(() => {

		  // Establecemos una barra de progreso mientras el libro se termina de cargar por completo
		  //--------------------------------------------------------------------------------
			  let progress = 0;
			  const interval = setInterval(() => {
				  if (progress < 100) {
					  progress += 5; // Incrementa el progreso en 5%
					  document.querySelector('.progress-bar').style.width = `${progress}%`;
				  } else {
					  clearInterval(interval);
					  isLoading.value = false;
					  document.querySelector('#book').style.visibility = 'visible';
				  }
			  }, 95); // Actualiza el progreso cada 100ms
		  //--------------------------------------------------------------------------------



	    // Inicializamos el libro
	    //--------------------------------------------------------------------------------
	        const pageFlip = new PageFlip(document.getElementById('book'), {
	            showCover: true,
	            width: 400, // required parameter - base page width
	            height: 700, // required parameter - base page height
	            useMouseEvents: true
	        });
	        pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
	    //--------------------------------------------------------------------------------


	    // Evitamos la animacion de volteo de página en las esquinas superiores
	    //--------------------------------------------------------------------------------
	        flipController = pageFlip.getFlipController();
	        // Guarda el método original
	        const originalShowCorner = flipController.showCorner;

	        // Sobrescribe el método showCorner
	        flipController.showCorner = function(globalPos) {
	          // Obtén las dimensiones y la posición del libro
	          const bookRect = document.getElementById('book').getBoundingClientRect();

	          // Establece un margen para definir qué se considera "cerca de la esquina"
	          const cornerMargin = 560;

	          // Verifica si la posición está cerca de la esquina superior izquierda
	          const isNearTopLeftCorner = globalPos.x - bookRect.left <= cornerMargin && globalPos.y - bookRect.top <= cornerMargin;

	          // Verifica si la posición está cerca de la esquina superior derecha
	          // Asume que el ancho del libro en la página es conocido (bookRect.width) o calcula dinámicamente si es necesario
	          const isNearTopRightCorner = bookRect.right - globalPos.x <= cornerMargin && globalPos.y - bookRect.top <= cornerMargin;

	          // Si NO estamos cerca de las esquinas superiores, ejecuta el comportamiento predeterminado
	          if (!isNearTopLeftCorner && !isNearTopRightCorner) {
	            originalShowCorner.call(flipController, globalPos);
	          }
	          // Si estamos cerca de alguna de las esquinas superiores, no hacemos nada para evitar la animación
	        };
	    //--------------------------------------------------------------------------------


	    //evitamos que la pagina haga flip al hacer click
	    //--------------------------------------------------------------------------------
	        function stopPropagation(event) {
	          event.stopPropagation();
	        }

	        const inputsAndTextareas = document.querySelectorAll('.textarea-anecdota, input[type="text"].palabra, label, span, input[type="text"].date-text');
	        inputsAndTextareas.forEach(element => {
	          element.addEventListener('mouseenter', stopPropagation, true);
	          element.addEventListener('mousedown', stopPropagation, true);
	          element.addEventListener('mouseup', stopPropagation, true);
	          element.addEventListener('click', stopPropagation, true);
	        });
	    //--------------------------------------------------------------------------------

		// Verificamos la ultima pagina que visito el usuario
		//--------------------------------------------------------------------------------
			const lastPage = localStorage.getItem('lastPage');
			if (lastPage) {
				flipController.flipToPage(parseInt(lastPage) - 2); // Ajusta según cómo manejes la numeración de páginas
			}
		//--------------------------------------------------------------------------------

		// Guardamos la ultima pagina que visito el usuario
		//--------------------------------------------------------------------------------
			  pageFlip.on('flip', (e) => {
				  const currentPage = e.data; // Obtiene la página actual
				  localStorage.setItem('lastPage', currentPage + 2);
			  });
		//--------------------------------------------------------------------------------


  });

//--------------------------------------------------------------------------


//Funciones
//--------------------------------------------------------------------------
  const goToPage = (quoteNumber) => {
    // Calcula el número de página para la cita principal
    const pageNumber = 5 + (quoteNumber - 1) * 2;
	  localStorage.setItem('lastPage', pageNumber); // Almacena el número de la última página
    flipController.flipToPage(pageNumber - 2); // -1 porque las páginas suelen empezar en 0
  };

  const goToIndice = () => {
	  localStorage.setItem('lastPage', 6); // Almacena el número de la última página
	  flipController.flipToPage(3); // -1 porque las páginas suelen empezar en 0
  };
//--------------------------------------------------------------------------
</script>

<style src="assets/css/book.css"></style>