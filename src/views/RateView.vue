<script>
  export default {
    created() {
        fetch('https://api.freecurrencyapi.com/v1/latest?'+
            'apikey=9rxF6i8YuMa16mWAH3wU7SKFtaAQ3akw8zT1l6Ff&'+
            'currencies=THB%2CNOK%2CTRY%2CHKD%2CBGN%2CEUR%2CCNY%2CCAD%2CSEK%2CBRL%2CCAD%2CUSD')
        .then((response) => response.json())
        .then((result) =>{
        this.currencies = result.data;
        })
    },
    data(){
      return {
          backgroundImage: 'background.jpg',
          currencies: null,
          key:''
      }
    },
    methods: {
      currentDate() {
        const current = new Date();
        const date = `
        ${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()} *** 
        kl.${current.getHours()}:${current.getMinutes()}
        `;
        return date;
      }
    },
    props: {
      wellMsg: String
    }
  }
</script>

<style scoped>
    body{
      margin: 0;
    }
    main{
      width: 50%;
      height: 100%;
      text-align: left;
      margin: auto;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      background-color:rgb(247, 251, 254);
    }

    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    tr:hover {background-color: coral;}
</style>

<template>
  <h3>>Priser</h3>
  <main>
    <dl v-if="currencies !== null">
      <h2>{{ currentDate() }}</h2>
        <table>
        <tr>
          <th>Valutakod</th>
          <th>Pris</th>
        </tr>

          <template v-for="( currency, key ) in currencies" >
        <tr>
          <td> {{key}} </td>
          <td> {{ currency.toFixed(2)}} </td>
        </tr>    
          </template>

        </table>
    </dl>
          <p v-else>Laddar...</p>
  </main>
</template>