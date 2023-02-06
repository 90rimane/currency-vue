<script>
  import CitiesList from './components/CitiesList.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import TenCurrencies from './components/TenCurrencies.vue';
  import TopMenu from './components/TopMenu.vue';

  export default {
    components: {
      CitiesList,
      HelloWorld,
      TenCurrencies,
      TopMenu
    }
  }
</script>

<template>
  <HelloWorld msg="Hello World!" />
  <CitiesList />
  
  <TopMenu />
  <TenCurrencies wellMsg="Välkommen till Valuta sidan" />
</template>
