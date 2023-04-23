<template>
  <div class="navbar bg-secondary">
    <div class="navbar-start">
      <LogoIsoLogo class="w-11" />
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="" />
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

