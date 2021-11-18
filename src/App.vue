<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/schedul">render</router-link>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },

}
</script>

<style>

table tr td{
  border: 1px solid black;
}
</style>
