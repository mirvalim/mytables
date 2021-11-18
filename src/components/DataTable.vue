<template>
  <div>
    <table>
      <thead>
      <tr>
        <td>User</td>
        <td>Status</td>
        <td>Location</td>
        <td>Phone</td>
        <td>Contact</td>
        <td>Action</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>AAA</td>
        <td>BBB</td>
        <td>CCC</td>
        <td>CCC</td>
        <td>CCC</td>
        <td>CCC</td>
      </tr>
      <tr>
        <td>AAA</td>
        <td>BBB</td>
        <td>CCC</td>
        <td>CCC</td>
        <td>CCC</td>
        <td>CCC</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTable"
}
</script>

<style scoped>
div{
  padding: 50px;
  background-color: #cdcbcb;
}

thead td:first-child{
  width: 300px;
}

thead td{
  width: 150px;
}

tbody tr{
  background-color: #f6f6f6;
  padding: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0 1px 2px 0, rgba(14, 30, 37, 0.32) 0 1px 5px 0;
}

table, thead, tbody, tr, td{
  border-collapse: separate;
  border: none;
}

table{
  border-spacing: 0 7px;
}

</style>