<template>
    <div>
      <h1>To-Do List My Course</h1>
      <hr />
      <form @submit.prevent="addTodo">
        <input class="input" v-model="newTodo" />
        <button>Add Course</button>
      </form>
      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
          <div class="list">
            <input type="checkbox" v-model="todo.done" />
            <span :class="{ done: todo.done }" v-if="editingTodo !== todo">{{ todo.text }}</span>
            <input v-else v-model="editedTodoText" @keyup.enter="saveEdit(todo)" @keyup.esc="cancelEdit()" />
            <button @click="removeTodo(todo)">X</button>
            <button v-if="editingTodo !== todo" @click="editTodo(todo)">Edit</button>
            <button v-else @click="saveEdit(todo)">Save</button>
            <button v-if="editingTodo === todo" @click="cancelEdit()">Cancel</button>
          </div>
        </li>
      </ul>
      <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: '',
        hideCompleted: false,
        todos: [
          { id: 1, text: 'Basis Data', done: true },
          { id: 2, text: 'Jaringan Komputer', done: true },
          { id: 3, text: 'Struktur Data', done: false }
        ],
        editingTodo: null,
        editedTodoText: ''
      };
    },
    computed: {
      filteredTodos() {
        return this.hideCompleted
          ? this.todos.filter((t) => !t.done)
          : this.todos;
      }
    },
    methods: {
      addTodo() {
        this.todos.push({ id: this.todos.length + 1, text: this.newTodo, done: false });
        this.newTodo = '';
      },
      removeTodo(todo) {
        this.todos = this.todos.filter((t) => t !== todo);
      },
      editTodo(todo) {
        this.editingTodo = todo;
        this.editedTodoText = todo.text;
      },
      cancelEdit() {
        this.editingTodo = null;
        this.editedTodoText = '';
      },
      saveEdit(todo) {
        todo.text = this.editedTodoText;
        this.cancelEdit();
      }
    }
  };
  </script>
  
  <style scoped>
  .done {
    text-decoration: line-through;
  }
  
  button {
    color: rgb(181, 21, 40);
    background-color: pink;
    border: 2px solid rgb(146, 24, 57);
  }
  </style>
  