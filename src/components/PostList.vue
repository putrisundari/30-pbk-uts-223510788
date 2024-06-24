<template>
  <div class="container">
    <label for="userSelect">Select User:</label>
    <select id="userSelect" v-model="selectedUser">
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
    <ul v-if="selectedUser">
      <li v-for="post in userPosts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      selectedUser: null,
      userPosts: []
    };
  },
  methods: {
    fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.users = data)
        .catch(error => console.error('Error fetching users:', error));
    },
    fetchUserPosts(userId) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(data => this.userPosts = data)
        .catch(error => console.error(`Error fetching posts for user ${userId}:`, error));
    }
  },
  watch: {
    selectedUser(newVal) {
      if (newVal) {
        this.fetchUserPosts(newVal);
      }
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  max-width: 600px;
  margin: 50px 30px;
  color: black;
}

label, select, ul, li {
  color: black;
}

button {
  color: rgb(181, 21, 40);
  background-color: pink;
  border: 2px solid rgb(146, 24, 57);
}
</style>
