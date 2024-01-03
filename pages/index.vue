<template>
  <div>
    <div class="header">
      <h1>Employe</h1>
    </div>
    <div class="upper-btn-box">
      <div class="left-box">
        <button><i class="ri-add-line"></i> &nbsp; Add Employe</button>
      </div>
      <div class="right-box">
        <i class="ri-search-line"></i>
        <input v-model="searchInput" type="text" id="empId" placeholder="Enter Employee ID..." />
    <button @click="searchEmployee">Search</button>
      </div>
    </div>
    <div class="table-box">
      <table>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>First-Name</th>
          <th>Last-Name</th>
          <th>Avatar</th>
          <th>Action</th>
        </tr>
        <tr v-if="employees.length === 0">
          <td colspan="5">No employees found</td>
        </tr>
        <tr v-for="employee in employees" :key="employee.id">
          <td @click="handleUserIdClick(employee.id)">{{ employee.id }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.first_name }}</td>
          <td>{{ employee.last_name }}</td>
          <td>
            <img :src="employee.avatar" alt="Avatar" />
          </td>
          <td>
            <i @click="handleUserIdClick(employee.id)" class="ri-eye-fill"></i>
            <i @click="handlEdit(employee.id)" class="ri-edit-box-fill"></i>
            <i
              @click="deleteEmploye(employee.id)"
              class="ri-delete-bin-3-fill"
            ></i>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

let employees = ref([]);
const router = useRouter();

const fetchData = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=1");
    employees.value = response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const deleteEmploye = async (id) => {
  console.log("delete",id)
  try {
    const response = await axios.delete(`https://reqres.in/api/users/${id}`);
    if (response.status === 204) {
      await fetchData(); // Fetch updated data after deletion
    } else {
      console.error('Error deleting employee:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
};

const handleUserIdClick = (data) => {
  console.log(data);
  router.push(`/userId/${data}`);

  return;
};


const searchInput = ref('');

const searchEmployee = () => {
  const searchTerm = searchInput.value;
  if (!searchTerm) {
    fetchData(); // If search term is empty, fetch all data
    return;
  }

  // Filter employees based on the search term
  employees.value = employees.value.filter((employee) =>
  employee.id.toString().includes(searchTerm)
);
}

const handlEdit = (data) => {
  console.log(data);
  router.push(`/editPage/${data}`);

  return;
};



onMounted(() => {
  fetchData();
});
</script>
