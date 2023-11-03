<template>
  <div class="navbar bg-secondary ">
    <div class="navbar-start">
      <LogoIsoLogo class="w-11" />
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl "><Icon name="tabler:home" :style="{ width: '35px', height: '35px' }" /></a>
    </div>
    <div class="navbar-end">
      <!-- Socials -->
        <a class="btn btn-ghost normal-case 3xs:hidden 1xs:hidden xs:hidden sm:hidden md:inline mt-2"><Icon name="tabler:brand-instagram" :style="{ width: '35px', height: '46px' }" /></a>
        <a class="btn btn-ghost normal-case 3xs:hidden 1xs:hidden xs:hidden sm:hidden md:inline mt-2"><Icon name="tabler:brand-linkedin" :style="{ width: '35px', height: '46px' }" /></a>
        <a class="btn btn-ghost normal-case 3xs:hidden 1xs:hidden xs:hidden sm:hidden md:inline mt-2"><Icon name="tabler:brand-youtube" :style="{ width: '35px', height: '46px' }" /></a>
        <a class="btn btn-ghost normal-case 3xs:hidden 1xs:hidden xs:hidden sm:hidden md:inline mt-2"><Icon name="tabler:brand-tiktok" :style="{ width: '35px', height: '46px' }" /></a>
        <a class="btn btn-ghost normal-case 3xs:hidden 1xs:hidden xs:hidden sm:hidden md:inline mt-2"><Icon name="tabler:brand-behance" :style="{ width: '35px', height: '46px' }" /></a>
      <!-- Socials -->
      &nbsp;
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full mt-1">
            <Icon name="iconoir:profile-circle" :style="{ width: '40px', height: '38px' }" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Perfil
            </a>
          </li>
          <li><a @click=" $event => logout() ">Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const { $generalStore, $userStore } = useNuxtApp()

  const logout = async () => {

    const token = $userStore.getUserToken()
    await $userStore.logout(token)
    $generalStore.setIsLogged(false)
    $userStore.resetUser()
    router.push('/auth/login');

  }
</script>

