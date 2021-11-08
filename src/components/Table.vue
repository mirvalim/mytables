<template>
  <div class="hello">
    <table class="st_table" style="border-collapse: collapse">
      <tr class="st_row">
        <td >Id</td>
        <td >Name</td>
        <td >Username</td>
        <td >Email</td>
        <td >Address</td>
        <td >Phone</td>
        <td >Website</td>
        <td >Company</td>
      </tr>
      <tr v-for="(table, index ) of tables " :key="index" @click="$router.push('user-profile/' + table.id)">
        <td >{{table.id}}</td>
        <td >{{table.name}}</td>
        <td >{{table.username}}</td>
        <td >{{table.email}}</td>
        <td >{{table.address.street}}</td>
        <td >{{table.phone}}</td>
        <td >{{table.website}}</td>
        <td >{{table.company.name}}</td>
      </tr>

    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      tables:[

      ]
    }
  },
  methods:{
    myTable(){
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then((res) => {
            this.tables = res.data
          })
    }
  },
  created() {
    this.myTable()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  display: flex;
  justify-content: center;
  width: 100%;

}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
}

td{
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.st_row{
  height: 50px;
  background-color: black;
  color: #dddddd;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;;
}
tr:nth-child(even) {
  background-color: #dddddd;
}

</style>
