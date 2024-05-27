<template>
  <div class="container">
    <div class="header">
      <ul>
        <li @click="selectedMenu = 'Todos'" :class="{ active: selectedMenu === 'Todos' }">Todos</li>
        <li @click="selectedMenu = 'Post'" :class="{ active: selectedMenu === 'Post' }">Post</li>
      </ul>
    </div>
    <div class="konten">
      <TodoList v-if="selectedMenu === 'Todos'" />
      <PostList v-if="selectedMenu === 'Post'" />
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import PostList from './components/PostList.vue';

export default {
  components: {
    TodoList,
    PostList
  },
  data() {
    return {
      selectedMenu: 'Todos' // Default menu selection
    };
  }
};
</script>

<style>
.header {
  background-color: #f2f2f2;
  padding: 10px;
}

.header ul {
  list-style-type: none;
  padding: 0;
}

.header ul li {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}

.header ul li.active {
  font-weight: bold;
}

.konten {
  margin-top: 20px;
}
</style>
