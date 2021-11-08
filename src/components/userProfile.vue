<template>
  <div class="head">
   <div class="content">
     <div class="items">
       <h3>id: </h3>
       <span>{{userProfile.id}}</span>
       <button class="btn" @click="$router.back()">back</button>
     </div>
     <div class="items">
       <h3>name: </h3>
       <span>{{userProfile.name}}</span>
     </div>
     <div class="items">
       <h3>username: </h3>
       <span>{{userProfile.username}}</span>
     </div>
     <div class="items">
       <h3>email: </h3>
       <span>{{userProfile.email}}</span>
     </div>

     <div class="divpage">
       <h1>Address</h1>
       <div class="adress">
         <h3>street: </h3>
         <span>{{userProfile.address.street}}</span>
       </div>
       <div class="adress">
         <h3>suite: </h3>
         <span>{{userProfile.address.suite}}</span>
       </div>
       <div class="adress">
         <h3>city: </h3>
         <span>{{userProfile.address.city}}</span>
       </div>
       <div class="adress">
         <h3>zipcode:</h3>
         <span>{{userProfile.address.zipcode}}</span>
       </div>
       <div class="adress">
         <h3>geo: </h3>
         <span>{{userProfile.address.geo.lat}}</span>
         <span>{{userProfile.address.geo.Ing}}</span>
       </div>
     </div>
     <div class="items">
       <h3>phone: </h3>
       <span>{{userProfile.phone}}</span>
     </div>
     <div class="items">
       <h3>website:</h3>
       <span>{{userProfile.website}}</span>
     </div>
     <div class="divpage">
       <h1>company </h1>
       <div class="adress">
         <h3>name: </h3>
         <span>{{userProfile.company.name}}</span>
       </div>
       <div class="adress">
         <h3>catchPhrase: </h3>
         <span>{{userProfile.company.catchPhrase}}</span>
       </div>
       <div class="adress">
         <h3>bs: </h3>
         <span>{{userProfile.company.bs}}</span>
       </div>

     </div>

   </div>


 </div>
</template>

<script>
import axios from "axios";
export default {
  name: "userProfile",
  data(){
    return{
      userProfile:null
    }
  },
  methods:{
    getProfile(){
      axios.get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
      .then(res => {
        this.userProfile = res.data
      })
    }
  },
  created() {
    this.getProfile()
  }
}
</script>

<style scoped>
template{
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
h3{
  display: inline-block;
}
*{
  margin: 0;
  padding: 0;
}
.head{
  margin: 0;
  padding: 0;
  width: 99vw;
  height: 95vh;
  background-color: #fffefe;
  display: flex;
  justify-content: center;

}
.content{
  width: 800px;
  height: 100%;
  border: 1px solid black;
  border-radius: 30px;
  background-color: #e7e6e6;
}
.divpage{
  margin-left: 50px;
  margin-top: 15px;
  border: 1px solid black;
  width: 400px;
  height: 200px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.adress{
  margin-left: 20px;
}
.adress > *{
  margin-top: 10px;
}
h1{
  margin-left: 150px;
}
.items{
  margin-left: 80px;
}
.items > *{
  margin-top: 10px;
}
.btn{
  margin-left: 400px;
  height: 40px;
  width: 100px;
  background-color: black;
  color: #dddddd;
  border-radius: 10px;
}
</style>