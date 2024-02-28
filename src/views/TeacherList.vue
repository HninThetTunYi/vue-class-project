<template>
  <div class="container py-5 main-content">

    <h2 class="py-3">Teacher List</h2>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="user in users" :key="user.id" class="teacher-list-inner">
        <h4>{{ user.name }}</h4>
        <p>Email: {{ user.email }}</p>
        <p>Address: {{ user.address.street }}, {{ user.address.city }}</p>
        <p>Website: {{ user.website }}</p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>

.teacher-list-inner {
  background: aliceblue;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;
}

</style>
