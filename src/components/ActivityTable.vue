<template>
  <div>
    <h2>Weekly Activity List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(activity, index) in filteredActivities" :key="index">
          <td>{{ activity.name }}</td>
          <td>{{ activity.date }}</td>
          <td>
            <input type="checkbox" v-model="activity.completed" @change="toggleCompletion(index)">
          </td>
          <td>
            <button @click="removeActivity(index)">Cancel</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    activities: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filteredActivities() {
      return this.activities.filter(activity => !activity.completed);
    }
  },
  methods: {
    toggleCompletion(index) {
      this.$emit('toggle-completion', index);
    },
    removeActivity(index) {
      this.$emit('remove-activity', index);
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #4a412a;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #ffffc2;
}

tr:nth-child(even) {
  background-color: #bab86c;
}

input[type="checkbox"] {
  transform: scale(1.5);
}
</style>