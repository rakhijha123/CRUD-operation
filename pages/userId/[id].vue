<template>
  <div>
    <div class="header">
      <h1 @click="goBackToHomePage">Employe</h1>
    </div>
    <div class="heading">
      <h1>UserDetails</h1>
      <p>
        This is my user detail page, located within the homepage table.
        Clicking on a specific user ID or the "View" button will redirect you to<br>
        the user's individual detail page. Here, you can access the user's
        photo, email ID, first name, and last name.
      </p>
    </div>
    <div class="container">
      <div class="left-box">
        <img :src="employees.avatar" alt="Avatar" />
      </div>
      <div class="right-box">
        <h5>
          First-Name: <span>{{ employees.first_name }}</span>
        </h5>
        <h5>
          Last-Name: <span>{{ employees.last_name }}</span>
        </h5>
        <h5>
          Email: <span>{{ employees.email }}</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();


const goBackToHomePage = () => {
  router.push("/");
  return;
};

let employees = ref([]);
// let id = ref("");

let id = router.currentRoute.value.params.id;

const fetchData1 = async () => {
  try {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    employees.value = response.data.data;
    console.log(response.data.data);
    //  console.log(router);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(async () => {
  fetchData1();
  // id.value = router.currentRoute.value.params.id;
  console.log(router.currentRoute.value.params.id + "rakhi");
});
</script>
