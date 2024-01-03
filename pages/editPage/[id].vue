<template>
  <div>
    <div class="header">
        <h1 @click="goBackToHomePage">Employe</h1>
    </div>
    <div class="heading">
  <h1>edit details</h1>
</div>
<div class="container">
  <div class="left-box">
        <img :src="employees.avatar" alt="Avatar" />
      </div>
<div class="right-box">
 <h5>First-Name: <span><input v-model="employees.data.first_name"/></span></h5>
 <h5>Last-Name: <span>{{ employees.data.last_name}}</span></h5>
 <h5>Email: <span>{{ employees.data.email }}</span></h5>
</div>
</div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { useRouter } from "vue-router";
  const router = useRouter();



  const goBackToHomePage = () => {
  router.push("/");
  return;
};

  let employees = reactive({
    data: {}
  });
  const fetchDataById = async (id) => {
    try {
      let response = await axios.get(`https://reqres.in/api/users/${id}`); 
      employees.data = response.data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  onMounted(() => {
    fetchDataById(router.currentRoute.value.params.id)
  })
</script>