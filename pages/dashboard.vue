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


<!--		              <h2 style="margin-left:-30px" class="self-center font-dela text-title text-left text-2xl pt-8 md:text-2xl xs:text-xl xs:text-center capitalize 1xs:text-xl"><Icon name="clarity:dashboard-line" class="mb-1" />{{firstName}} Dashboard</h2>-->
		              <br>
		              <div class="self-center">
		                <DashboardInfoCard iconName="lucide:check-circle" title="Páginas completadas" :current="userBookInfo.statistics.quotes_completed" total="100" style="color:white; font-size:13px"/>
		                <br>
		                <DashboardInfoCard iconName="solar:pen-2-bold" title="Notas escritas" :current="userBookInfo.statistics.quotes_writed" total="100" style="color:white; font-size:15px"/>
		                <br>
		                <DashboardInfoCard iconName="material-symbols:image-outline-rounded" title="Imágenes cargadas" :current="userBookInfo.statistics.images_uploaded" total="100" style="color:white; font-size:14px"/>
		              </div>

		        </div>

		      <!-- Segunda columna -->
		      <div class="w-full md:w-96 sm:w-1/2 sm:w-full xs:w-full md:ml-4">
		        <div class="w-full md:w-96 sm:w-1/2 sm:w-full xs:w-full">
		            <div class="w-full md:w-96 sm:w-1/2 sm:w-full xs:w-full">
		            <h2 class="font-dela text-title text-4xl">{{userBookInfo.book_info.name}}</h2>
		            <p class="font-blokletters text-paragraph mt-5">{{userBookInfo.book_info.description}}</p>
		            <br>
				    <a href="/book"><button class="w-full btn btn-primary text-white rounded-lg font-blokletters ">¡Empecemos!</button></a>
		          </div>
		          </div>
		      </div>

		      <!-- Tercera columna -->
		        <div class="w-full md:w-1/3 sm:w-1/2 sm:w-full xs:w-full" style="max-height: 500px;height: 500px;background-image: url('/mockup2.png');background-size: 188%;background-repeat: no-repeat;background-position: center;">
		        </div>
            </div>
        </div>
	    <swiper-container>
		    <swiper-slide>Slide 1</swiper-slide>
		    <swiper-slide>Slide 2</swiper-slide>
		    <swiper-slide>Slide 3</swiper-slide>
		    ...
	    </swiper-container>
	</section>

  </NuxtLayout>

</template>

<script setup>
import { ref } from 'vue';

  definePageMeta({ middleware: ['auth', 'buyer'] })
  const { $userStore, $generalStore } = useNuxtApp()
  const user = $userStore.getUser()
  const userBookInfo = await $userStore.getUserBookInfo()
  /*console.log(userBookInfo)*/
  const firstName = user.name.split(' ')[0]
  //const token = $userStore.getUserToken()
  const image = ref('/mockup2.png');



</script>

<style>
  .principal-card {
    background-color: #F4F4F4;
    width: 365px;
    height: 668px;
    border-radius: 30px;
  }
</style>