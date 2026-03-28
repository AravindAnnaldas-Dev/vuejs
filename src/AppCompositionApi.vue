<!-- Composition API -->

<script setup>
import { ref, onMounted } from "vue";

const name = ref("Aravind Annaldas");
const status = ref("active");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const newTask = ref("");

const toogleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.error("error", error);
  }
});
</script>

<template>
  <div>
    <h1>Composition API</h1>

    <h2>{{ name }}</h2>
    <p v-if="status === 'active'">You are {{ status }} now.</p>
    <p v-else-if="status === 'inactive'">You are {{ status }} now.</p>
    <p v-else>You are {{ status }} now.</p>

    <form @submit.prevent="addTask">
      <label for="newTask">Add Task: </label>
      <input
        type="text"
        id="newTask"
        name="newTask"
        v-model="newTask"
        required
      />
      <button type="submit">Submit</button>
    </form>

    <h2>Daily Tasks:</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>{{ task }}</span>
        <button style="margin-left: 8px" @click="deleteTask(index)">X</button>
      </li>
    </ul>
    <br />
    <button v-on:click="toogleStatus">
      Click me to change status of an user
    </button>
  </div>
</template>
