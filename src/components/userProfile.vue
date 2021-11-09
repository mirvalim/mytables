<template>
  <div class="top" >
    <div style="height: 40px;  background-color: green;display: grid;grid-template-columns: 3fr 1fr">
      <span style="color: white;margin-top: 10px">Succesful Your profil has been updated</span>
      <button style="margin-left: 100px; height: 25px; border-radius: 5px; width: 60px; background-color: black;color: white"  @click="$router.back()">Back</button>
    </div>
    <h1 style="color: #636363">User Profile</h1>
    <div class="head" style="margin-top: 15px">
      <div class="content">
        <div class="profile">
          <img src="https://www.accenture.com/t20200622T032553Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/General/54/Accenture-Jim-Wilson-724x543.png" alt="" class="profile__image">
          <div class="profile__name">Justin Ston</div>
          <div class="profile__title">Web Developer at Sample Company</div>
          <button style="border-radius: 20px; height: 30px; width: 80px;box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px; ">allows</button>
          <div style="margin-top: 10px" class="profile__detail">
            <span>{{userProfile.email}}</span>
          </div>
          <div style="margin-top: 30%">
            <h2 style="text-align: start; margin-bottom: 30px">Description</h2>
            <p>The use of loading animations is ideal for bridging waiting times on websites and in web
            applications. Here you will find a selection of the most creative and inspiring loading animations!</p></div>
        </div>
      </div>
      <div class="content">
        <div class="divpage">
          <div class="items">
            <h3 style="display: inline-block">Account id: </h3>
            <span>{{userProfile.id}}</span>
          </div>
          <hr>
          <div class="itemss">
            <div >
              <h3>Email: </h3>
            </div>
            <div >
              <h3>Username: </h3>
            </div>
          </div>
          <div class="itemss">
            <div class="aa">
              <span>{{userProfile.email}}</span>
            </div>
            <div class="aa">
              <span>{{userProfile.username}}</span>
            </div>
          </div>
          <div class="itemss">
            <div class="">
              <h3>Name: </h3>
            </div>
            <div class="">
              <h3>Phone: </h3>
            </div>
          </div>
          <div class="itemss">
            <div class="aa">
              <span>{{userProfile.name}}</span>
            </div>
            <div class="aa">
              <span>{{userProfile.phone}}</span>
            </div>
          </div>
          <h3>Address</h3>
          <div class="itemss">
            <div >
              <h3>Street: </h3>
            </div>
            <div >
              <h3>Suite: </h3>
            </div>
          </div>
          <div class="itemss">
            <div class="aa">
              <span>{{userProfile.address.street}}</span>
            </div>
            <div class="aa">
              <span>{{userProfile.address.suite}}</span>
            </div>
          </div>
          <div class="itemss">
            <div>
              <h3>City: </h3>
            </div>
            <div class="geo">
              <h3>Zipcode:</h3>
              <h3>Geo: </h3>
            </div>
          </div>
          <div class="itemss">
            <div class="aa">
              <span>{{userProfile.address.city}}</span>
            </div>
            <div class="geo">
              <div class="aa">
                <span>{{userProfile.address.zipcode}}</span>
              </div>
              <div style="margin-left: -30px" class="aa">
                <span>{{userProfile.address.geo.lat}}</span>
                <span>{{userProfile.address.geo.Ing}}</span>
              </div>
            </div>

          </div>
        </div>

        <div class="divpage">
          <h3>Company </h3>
          <div class="itemss">
            <div>
              <h3>Name: </h3>
            </div>
            <div>
              <h3>Catch Phrase: </h3>
            </div>
          </div>
          <div class="itemss">
            <div class="aa">
              <span>{{userProfile.company.name}}</span>
            </div>
            <div class="aa">
              <span>{{userProfile.company.catchPhrase}}</span>
            </div>
          </div>
          <div class="itemss">
            <div>
              <h3>Bs: </h3>
            </div>
            <div>
              <h3>Website:</h3>
            </div>
          </div>
          <div class="itemss">
            <div class="aa">
              <span>{{userProfile.company.bs}}</span>
            </div>
            <div class="aa">
              <span>{{userProfile.website}}</span>
            </div>
          </div>
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

  color: #505050;
}
*{
  margin: 0;
  padding: 0;
}
.head{
  margin: 0;
  padding: 0;
  width: 99%;
  height: 95%;
  background-color: #fffefe;
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  gap: 1rem;
}
.profile{
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
}
.profile__image{
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 20px auto;
  display: block;
}
.profile__name{
  font-size: 1.2rem;
  font-weight: bold;
}
.profile__title{
  margin-bottom: 20px;
}
.profile__detail{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
}
.content{

  height: 600px;
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
.geo{
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
}

span{
  margin-left: 10px;
  font-weight: bold;
  color: #8b8989;

}
.aa{
  width: 90%;
  height: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-top: 10px;
}
.adress > *{
  margin-top: 10px;
}
h2{

  color: #494848;
}
.itemss{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;

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