<template>

  <NuxtLayout name="dashboard">
    <!-- <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center grid grid-cols-1 lg:grid-cols-3 gap-1 p-4 md:place-items-center xs:place-items-center">
       
        <div class="card w-96 bg-base-100 1xs:w-50 xs:w-80 bg-gray-100 sm:pl-14 lg:w-365 h-668 xs:justify-self-center sm:justify-self-center md:justify-self-center max-w-3xl lg:max-h-max xl:max-h-max 2xl:max-h-max 3xl:max-h-max md:flex">
              <h2 style="margin-left:-30px" class="font-dela text-title text-left text-2xl pt-8 xs:text-lg xs:text-center"><Icon name="tabler:info-circle" class="mb-1" />Información</h2>
              <br>
              <div class="xs:self-center">
                <DashboardInfoCard iconName="iconoir:multiple-pages" title="N° de páginas" isInfo=true total="100" style="color:white;"/>
                <br>
                <DashboardInfoCard iconName="material-symbols:format-quote-rounded" title="N° de citas" isInfo=true total="100" style="color:white;"/>
              </div>


              <h2 style="margin-left:-30px" class="font-dela text-title text-left text-2xl pt-8 xs:text-lg xs:text-center capitalize"><Icon name="clarity:dashboard-line" class="mb-1" />{{firstName}} Dashboard</h2>
              <br>
              <div class="xs:self-center">
                <DashboardInfoCard iconName="lucide:check-circle" title="Páginas completadas" :current="userBookInfo.statistics.quotes_completed" total="100" style="color:white; font-size:13px"/>
                <br>
                <DashboardInfoCard iconName="solar:pen-2-bold" title="Notas escritas" :current="userBookInfo.statistics.quotes_writed" total="100" style="color:white; font-size:15px"/>
                <br>
                <DashboardInfoCard iconName="material-symbols:image-outline-rounded" title="Imágenes cargadas" :current="userBookInfo.statistics.images_uploaded" total="100" style="color:white; font-size:14px"/>
              </div>

        </div>

      
      <div class="sm:pl-14 max-w-3xl lg:max-h-max xl:max-h-max 2xl:max-h-max 3xl:max-h-max lg:flex md:flex lg:items-center md:items-center">
        <div class="">
          <h2 class="font-dela text-title text-4xl xs:text-center  ">{{userBookInfo.book_info.name}}</h2>
          <p class="font-blokletters text-paragraph mt-5 xs:text-center ">{{userBookInfo.book_info.description}}</p>
          <br>
          <a><button class="w-full btn btn-primary text-white rounded-lg font-blokletters ">¡Empecemos!</button></a>
        </div>
      </div>

      
      <div class="p-4 flex-shrink-0">
        <img :src="image" alt="Descripción de la imagen" class="max-w-none object-cover lg:w-4/5 xl:w-3/4 xs:!ml-0 sm:!ml-0 sm:pl-40 xs:pl-40 sm:pl-0 lg:pl-0 xl:pl-0" style="width: 661px;" />
      </div>
    </div> -->

    <!-- <div class="flex flex-col items-center grid grid-cols-1 gap-1 p-4 ">
      <div class="card w-96 bg-base-100 card w-96 h-668 bg-gray-100">

      </div>
    </div> -->

    <section class="flex items-center justify-center">
  <div class="container mx-auto px-4 py-12 max-w-7xl">
    <div class="flex flex-col md:flex-row gap-4 items-center">
      <!-- Primera columna -->
        <div class="card w-96 bg-base-100 h-[619px] bg-gray-100 w-full md:w-1/3 sm:w-1/2 sm:w-full xs:w-full">
              <h2 style="margin-left:-30px" class="self-center font-dela text-title text-left text-2xl pt-8 md:text-2xl xs:text-xl xs:text-center 1xs:text-xl"><Icon name="tabler:info-circle" class="mb-1" />Información</h2>
              <br>
              <div class="self-center">
                <DashboardInfoCard iconName="iconoir:multiple-pages" title="N° de páginas" isInfo=true total="100" style="color:white;"/>
                <br>
                <DashboardInfoCard iconName="material-symbols:format-quote-rounded" title="N° de citas" isInfo=true total="100" style="color:white;"/>
              </div>


              <h2 style="margin-left:-30px" class="self-center font-dela text-title text-left text-2xl pt-8 md:text-2xl xs:text-xl xs:text-center capitalize 1xs:text-xl"><Icon name="clarity:dashboard-line" class="mb-1" />{{firstName}} Dashboard</h2>
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
</section>
  </NuxtLayout>

</template>

<script setup>
  definePageMeta({ middleware: ['auth'] })
  const { $userStore, $generalStore } = useNuxtApp()
  const user = $userStore.getUser()
  const userBookInfo = await $userStore.getUserBookInfo()
  console.log(userBookInfo)
  const firstName = user.name.split(' ')[0]
  //const token = $userStore.getUserToken()
  const image = ref('/mockup2.png');

  /* const refreshToken = async () => {

    const token = $userStore.getUserToken()
    console.log(token)
    //const newToken = await $userStore.refreshGoogleToken(token)

  } */

</script>

<style>
  .principal-card {
    background-color: #F4F4F4;
    width: 365px;
    height: 668px;
    border-radius: 30px;
  }
</style>