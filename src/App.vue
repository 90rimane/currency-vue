<script>
  import TenCurrencies from './components/TenCurrencies.vue';

  export default {
    components: {
      TenCurrencies
    }
  }
</script>

<template>
  
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/rate">Priser</RouterLink>
      </li>
      <li>
        <RouterLink to="/convert">Konvertera</RouterLink>
      </li>
    </ul>
  </nav>
  <TenCurrencies wellMsg="Här har vald tio olika valutarna!" />
  
  <main>
    <RouterView />
  </main>
  
</template>
