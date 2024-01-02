<template>
  <div>
    <div class="header">
        <h1>Employe</h1>
    </div>
    <div class="heading">
  <h1>edit details</h1>
</div>
<div class="container">
  <div class="left-box">
<img :src="employees.avatar" alt="Avatar" />
</div>
{{ employees }}
<div class="right-box">
 <h5>First-Name: <span><input v-model="employees.first_name"/></span></h5>
 <h5>Last-Name: <span>{{ employees.last_name}}</span></h5>
 <h5>Email: <span>{{ employees.email }}</span></h5>
</div>
</div>
  </div>
</template>


<script setup>
 import { reactive, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from "vue-router";
const router = useRouter();


  let employees = reactive({});
// let id = ref("");

let id = router.currentRoute.value.params.id;

  const fetchData1 = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`); 
      console.log(response.data.data);

      employees = response.data.data;
      console.log(employees)


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  
  onMounted(async() => {

     fetchData1();
      // id.value = router.currentRoute.value.params.id;
      console.log(router.currentRoute.value.params + "point1");
   
  });



</script>