<!-- <template>
  <div>
    <div class="header">
        <h1 @click="goBackToHomePage">Employe</h1>
    </div>
    <div class="heading">
  <h1>edit details</h1>
</div>
<div class="container">
  <div class="left-box">
    <img :src="employees.data.avatar" alt="Avatar" />
      </div>
<div class="right-box">
 <h5>First-Name: <span><input v-model="employees.data.first_name"/></span></h5>
 <h5>Last-Name: <span><input v-model="employees.data.last_name" /></span></h5>
 <h5>Email: <span><input v-model="employees.data.email" /></span></h5>
 <button>update</button>
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
</script> -->

<template>
  <div>
    <div class="header">
      <h1 @click="goBackToHomePage">Employee</h1>
    </div>
    <div class="heading">
      <h1>Edit Details</h1>
    </div>
    <div class="container">
      <div class="left-box">
        <img :src="employees.data.avatar" alt="Avatar" />
      </div>
      <div class="right-box">
        <h5>First-Name: <span><input v-model="employees.data.first_name" /></span></h5>
        <h5>Last-Name: <span><input v-model="employees.data.last_name" /></span></h5>
        <h5>Email: <span><input v-model="employees.data.email" /></span></h5>
        <button @click="updateUser">Update</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { useRouter } from "vue-router";
  import { ref, onMounted } from "vue";
  
  const router = useRouter();
  const userId = ref(router.currentRoute.value.params.id);
  
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

  const updateUser = async () => {
    try {
      let response = await axios.put(`https://reqres.in/api/users/${userId.value}`, {
        first_name: employees.data.first_name,
        last_name: employees.data.last_name,
        email: employees.data.email
      });
      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  onMounted(() => {
    fetchDataById(userId.value);
  });
</script>
