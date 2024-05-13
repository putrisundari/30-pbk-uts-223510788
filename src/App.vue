<script>
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      hideCompleted: false,
      todos: [
        { id: id++, text: 'Basis Data', done: true },
        { id: id++, text: 'jaringan Komputer', done: true },
        { id: id++, text: 'Struktur Data', done: false }
      ],
      editingTodo: null,
      editedTodoText: ''
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    },
    editTodo(todo) {
      this.editingTodo = todo
      this.editedTodoText = todo.text
    },
    cancelEdit() {
      this.editingTodo = null
      this.editedTodoText = ''
    },
    saveEdit(todo) {
      todo.text = this.editedTodoText
      this.cancelEdit()
    }
  }
}
</script>

<template>
   <div class="container">
    <div class="konten">
      <h1>To-Do List My Course</h1>
      <hr />
      <form @submit.prevent="addTodo">
        <input class="input" v-model="newTodo" />
        <button>tambahkan Mata Kuliah</button>
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
      <p>Come on, check your to-do list. so you don't miss anything!!</p>
    </div>
  </div>
</template>


<style>
.done {
  text-decoration: line-through;
}
button {
  color: rgb(181, 21, 40);
  background-color: pink; /* Add this line to make the button white */
  border: 2px solid rgb(146, 24, 57); /* Add this line to create a thick white border */
}
</style>
