<template>
  <div class="hello">
    <table class="blue" style="border-collapse: collapse">
      <thead>
      <tr style="color: black" class="st_row">
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
        <td ><img style="width: 30px;height: 30px; border-radius: 50%"  src="https://www.accenture.com/t20200622T032553Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/54/Accenture-Jim-Wilson-724x543.png" alt="" class="profile__image">
        </td>
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
  width:100%;
}
.blue thead{
  background:white;
}

thead{
  color:white;
}

th,td{
  text-align:center;
  padding:5px 0;
}
table thead th{
  height: 40px;
  font-size: 20px;
}
table tbody td{
  border: none;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #5e5e5e;


}

table tbody tr {

  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
tbody tr:hover{
  background:#BDC3C7;
  color:#FFFFFF;
}



</style>
