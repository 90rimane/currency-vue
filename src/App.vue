<script>
  import TenCurrencies from './components/TenCurrencies.vue';

  export default {
    components: {
      TenCurrencies
    }
  }
</script>

<template>
  
  <nav class="navbar navbar-light" style="background-color: #5980c3;">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link active " >Hem</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/rate" class="nav-link active ">Priser</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/convert" class="nav-link active ">Konvertera</RouterLink>
      </li >
    </ul>
  </nav>
  
  <main>
    <RouterView />
  </main>
  
  <TenCurrencies wellcomeMsg="Listan av tio valutarna" />
  
</template>
