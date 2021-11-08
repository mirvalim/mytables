<template>
  <div class="hello">
    <table class="blue" style="border-collapse: collapse">
      <thead>
      <tr class="st_row">
        <th >Id</th>
        <th >Name</th>
        <th >Username</th>
        <th >Email</th>
        <th >Address</th>
        <th >Phone</th>
        <th >Website</th>
        <th >Company</th>
      </tr>
      </thead>
      <tbody>
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

      </tbody>
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
table{
  border:1px solid #5e5a5a;
  width:100%;
}

.blue{
  border:2px solid #1ABC9C;
}

.blue thead{
  background:#1ABC9C;
}



.purple thead{
  background:#9B59B6;
}

thead{
  color:white;
}

th,td{
  text-align:center;
  padding:5px 0;
}

tbody tr:nth-child(even){
  background:#ECF0F1;

}
table thead th{
  height: 40px;
  font-size: 20px;
}
table tbody td{
  border: 2px solid #e2e2e1;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #5e5e5e;
}
tbody tr:hover{
  background:#BDC3C7;
  color:#FFFFFF;
}



</style>
