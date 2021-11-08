<template>
  <div class="head">
   <div class="content">
     <div class="divpage">
       <h2>Profile</h2>
       <div class="items">
         <h3>id: </h3>
         <span>{{userProfile.id}}</span>

       </div>

       <div class="items">
         <h3>Name: </h3>
         <span>{{userProfile.name}}</span>
       </div>
       <div class="items">
         <h3>Username: </h3>
         <span>{{userProfile.username}}</span>
       </div>
       <div class="items">
         <h3>Email: </h3>
         <span>{{userProfile.email}}</span>
       </div>
       <div class="items">
         <h3>Phone: </h3>
         <span>{{userProfile.phone}}</span>
       </div>
       <div class="items">
         <h3>Website:</h3>
         <span>{{userProfile.website}}</span>
       </div>
     </div>
     <div class="divpage">
       <h2>Address</h2>
       <div class="adress">
         <h3>Street: </h3>
         <span>{{userProfile.address.street}}</span>
       </div>
       <div class="adress">
         <h3>Suite: </h3>
         <span>{{userProfile.address.suite}}</span>
       </div>
       <div class="adress">
         <h3>City: </h3>
         <span>{{userProfile.address.city}}</span>
       </div>
       <div class="adress">
         <h3>Zipcode:</h3>
         <span>{{userProfile.address.zipcode}}</span>
       </div>
       <div class="adress">
         <h3>Geo: </h3>
         <span>{{userProfile.address.geo.lat}}</span>
         <span>{{userProfile.address.geo.Ing}}</span>
       </div>
     </div>

     <div class="divpage">
       <h2>Company </h2>
       <div class="adress">
         <h3>Name: </h3>
         <span>{{userProfile.company.name}}</span>
       </div>
       <div class="adress">
         <h3>Catch Phrase: </h3>
         <span>{{userProfile.company.catchPhrase}}</span>
       </div>
       <div class="adress">
         <h3>Bs: </h3>
         <span>{{userProfile.company.bs}}</span>
       </div>
       <button class="btn" @click="$router.back()">Back</button>
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
  color: #505050;
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
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.divpage{
  margin-left: 40px;
  margin-right: 20px;
  margin-top: 15px;



}
span{
  margin-left: 10px;
  font-weight: bold;
  color: #8b8989;
}
.adress{

  border-bottom: 2px solid #959494;
}
.adress > *{
  margin-top: 10px;
}
h2{
  margin-left: 150px;
  color: #494848;
}
.items{


  margin-right: 20px;
  border-bottom: 2px solid #8e8b8b;
}
.items > *{
  margin-top: 10px;
}
.btn{
  margin-left: 60px;
  margin-top: 20px;
  height: 40px;
  width: 100px;
  background-color: black;
  color: #dddddd;
  border-radius: 10px;
  font-size: 20px;
}
</style>