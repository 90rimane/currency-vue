<script>
  export default {
    created() {
        fetch('https://api.freecurrencyapi.com/v1/currencies?'+
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
          currencies: null
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
  padding: 20px;
}
main{
  width: 50%;
  height: 100%;
  text-align: center;
  margin: auto;
}
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    background-color: aliceblue;
    border: solid 1px;
    box-shadow: 4px 2px 2px black;
  }
  
  th, td {
    padding: 8px;
    text-align: left;

  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  footer{
    margin: 20px auto;
  }
  
</style>

<template>
  <main>
    <dl v-if="currencies !== null">
            <h2>{{ wellMsg }} </h2>
            <table>
                <tr>
                    <th>Valutakod</th>
                    <th>Namn</th>
                    <th>Symbol</th> 
                    <th>Plural namn</th>
                </tr>
                    <template v-for="(currency, key ) in currencies" >
                <tr>
                    <td> {{key}} </td> 
                    <td> {{ currency.name}} </td>
                    <td> {{ currency.symbol}} </td>
                    <td> {{ currency.name_plural}} </td>
                </tr>    
                    </template>
            </table>
        </dl>
        <p v-else>Laddar...</p>
        <footer>
          <p>Inlämningsuppgift 02 / Ali Mesbahi</p>
        </footer>
  </main>
</template>
