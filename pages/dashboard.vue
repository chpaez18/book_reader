<template>

  <NuxtLayout name="dashboard">
	<section class="flex items-center justify-center">
		<div class="container mx-auto px-4 py-12 max-w-7xl">
	            <div class="flex flex-col md:flex-row gap-4 items-center">
			      <!-- Primera columna -->
			        <div class="card w-96 bg-base-100 h-[619px] bg-gray-100 w-full md:w-1/3 sm:w-1/2 sm:w-full xs:w-full">
			              <h2 style="margin-left:-30px" class="self-center font-dela text-title text-left text-2xl pt-8 md:text-2xl xs:text-xl xs:text-center 1xs:text-xl"><Icon name="tabler:info-circle" class="mb-1" /> Información</h2>
			              <br>
			              <div class="self-center">
			                <DashboardInfoCard iconName="iconoir:multiple-pages" title="N° de páginas" isInfo=true total="100" style="color:white;"/>
			                <br>
			                <DashboardInfoCard iconName="material-symbols:format-quote-rounded" title="N° de citas" isInfo=true total="100" style="color:white;"/>
			              </div>

			              <br>
			              <div class="self-center">
			                <DashboardInfoCard iconName="lucide:check-circle" title="Páginas completadas" :current="userStats?.quotes_completed" total="100" style="color:white; font-size:13px"/>
			                <br>
			                <DashboardInfoCard iconName="solar:pen-2-bold" title="Notas escritas" :current="userStats?.quotes_writed" total="100" style="color:white; font-size:15px"/>
			                <br>
			                <DashboardInfoCard iconName="material-symbols:image-outline-rounded" title="Imágenes cargadas" :current="userStats?.images_uploaded" total="100" style="color:white; font-size:14px"/>
			              </div>

			        </div>

			      <!-- Segunda columna -->
			      <div class="w-full md:w-96 sm:w-1/2 sm:w-full xs:w-full md:ml-4">
			        <div class="w-full md:w-96 sm:w-1/2 sm:w-full xs:w-full">
			            <div class="w-full md:w-96 sm:w-1/2 sm:w-full xs:w-full">
			            <h2 class="font-dela text-title text-4xl">{{bookData?.name}}</h2>
			            <p class="font-blokletters text-paragraph mt-5">{{bookData?.description}}</p>
			            <br>
					    <a href="/book"><button class="w-full btn btn-primary text-white rounded-lg font-blokletters ">¡Empecemos!</button></a>
			          </div>
			          </div>
			      </div>

			      <!-- Tercera columna -->
		            <div class="w-full md:w-1/3 sm:w-1/2 sm:w-full xs:w-full">
			            <Carousel :autoplay="2600" :wrap-around="true">
				            <Slide :key="999">
					            <img class="carousel__item" src="/mockup3.png" style="max-height: 500px; height: 500px; max-width: 500px; width: 500px">
				            </Slide>
				            <Slide v-for="(item, index) in userBookPhotos" :key="index">
					            <img decoding="async" class="carousel__item" :src="item.url_view" style="max-height: 400px; height: 400px; max-width: 400px; width: 400px">
				            </Slide>
			            </Carousel>
		            </div>
	            </div>
		</div>
	</section>
  </NuxtLayout>

</template>

<script setup>
definePageMeta({ middleware: ['auth', 'buyer'] })

import {onBeforeMount, ref} from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { UserService } from "~/services/userService";

//Variables reactivas
//--------------------------------------------------------------------------
	const userBookPhotos = ref([]);
	const userStats = ref([])
	const bookData = ref([])
//--------------------------------------------------------------------------


//Services
//--------------------------------------------------------------------------
	const userService = new UserService();
//--------------------------------------------------------------------------


//Hooks
//--------------------------------------------------------------------------

//--------------------------------------------------------------------------

//Inicializacion del dashboard
//--------------------------------------------------------------------------
	try {
		const userBookInfo = await userService.getUserBookInfo()
		userStats.value = userBookInfo.statistics
		bookData.value = userBookInfo.book_info
		userBookPhotos.value = userBookInfo.user_book_info.map(info => info.photo).filter(photo => photo != null);

	} catch (error) {
		console.log(error)
	}
//--------------------------------------------------------------------------

</script>

<style>

  .principal-card {
    background-color: #F4F4F4;
    width: 365px;
    height: 668px;
    border-radius: 30px;
  }

</style>