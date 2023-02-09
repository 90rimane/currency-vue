<script>
  export default {
    created() {
        fetch('https://api.freecurrencyapi.com/v1/latest?'+
            'apikey=9rxF6i8YuMa16mWAH3wU7SKFtaAQ3akw8zT1l6Ff&'+
            'currencies=THB%2CNOK%2CTRY%2CHKD%2CBGN%2CEUR%2CCNY%2CCAD%2CSEK%2CBRL%2CCAD%2CUSD')
        .then((response) => response.json())
        .then((result) =>{
        this.currencies = result.data;
        keyes = Object.keys(this.currencies)
        })
    },
    data(){
      return {
          backgroundImage: 'background.jpg',
          currencies: null
      }
    },
    props: {
      wellMsg: String
    }
  }
</script>

<template>
    <p></p>
  <dl v-if="currencies !== null">
    <h2>{{ wellMsg }} </h2>
      <table>
       <tr>
         <th>Valutakod</th>
         <th>Pris</th>
       </tr>

         <template v-for="(currency, key ) in currencies" >
       <tr>
         <td> {{key}} </td>
         <td> {{ currency}} </td>
       </tr>    
         </template>

      </table>
   </dl>
        <p v-else>Laddar...</p>
</template>