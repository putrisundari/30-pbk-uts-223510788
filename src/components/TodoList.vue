<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="todo-card">
      <q-card-section>
        <h1>To-Do List My Course</h1>
        <hr />
        <q-form @submit.prevent="addTodo">
          <q-input class="input" v-model="newTodo" outlined />
          <q-btn type="submit" label="Add Course" class="q-my-sm" />
        </q-form>
        <q-list bordered>
          <q-item v-for="todo in filteredTodos" :key="todo.id">
            <q-item-section>
              <q-checkbox v-model="todo.done" />
            </q-item-section>
            <q-item-section>
              <div class="list">
                <span :class="{ done: todo.done }" v-if="editingTodo !== todo">{{ todo.text }}</span>
                <q-input v-else v-model="editedTodoText" dense outlined @keyup.enter="saveEdit(todo)" @keyup.esc="cancelEdit()" />
              </div>
            </q-item-section>
            <q-item-section side>
              <q-btn dense flat icon="delete" @click="removeTodo(todo)" />
              <q-btn dense flat icon="edit" v-if="editingTodo !== todo" @click="editTodo(todo)" />
              <q-btn dense flat icon="save" v-else @click="saveEdit(todo)" />
              <q-btn dense flat icon="cancel" v-if="editingTodo === todo" @click="cancelEdit()" />
            </q-item-section>
          </q-item>
        </q-list>
        <q-btn @click="hideCompleted = !hideCompleted" class="q-mt-md">
          {{ hideCompleted ? 'Show all' : 'Hide completed' }}
        </q-btn>
      </q-card-section>
    </q-card>
  </q-page>
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
      if (this.newTodo.trim()) {
        this.todos.push({ id: this.todos.length + 1, text: this.newTodo, done: false });
        this.newTodo = '';
      }
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
      if (this.editedTodoText.trim()) {
        todo.text = this.editedTodoText;
        this.cancelEdit();
      }
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

.todo-card {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  text-align: center;
}

.list {
  display: flex;
  align-items: center;
}

.input {
  width: 100%;
}
</style>
