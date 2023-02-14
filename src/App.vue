<script>
  import TenCurrencies from './components/TenCurrencies.vue';

  export default {
    components: {
      TenCurrencies
    }
  }
</script>

<style scoped>
nav{
  background-color: #627aa4;
}
  nav ul li{
    margin-left: 20px;
  }
</style>

<template>
  
  <nav class="navbar navbar-light ">
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
  
  <TenCurrencies wellcomeMsg="Lista över länders valutor(slumpvis)" />
  
</template>
