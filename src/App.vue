<script>
  import TenCurrencies from './components/TenCurrencies.vue';

  export default {
    components: {
      TenCurrencies
    }
  }
</script>
<style lang="scss" scoped>

</style>

<template>
  
  <nav >
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link active" >Hem</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/rate" class="nav-link active">Priser</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/convert" class="nav-link active">Konvertera</RouterLink>
      </li >
    </ul>
  </nav>
  
  <main>
    <RouterView />
  </main>
  
  <TenCurrencies wellMsg="Här har vald tio olika valutarna!" />
  
</template>
