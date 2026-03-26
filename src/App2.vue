<!-- Options API -->

<script>
export default {
  data() {
    return {
      name: "Aravind Annaldas",
      status: "active",
      tasks: ["Task 1", "Task 2", "Task 3"],
      link: "https://www.google.com",
    };
  },
  methods: {
    toogleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Options API</h1>

    <h2>{{ name }}</h2>
    <p v-if="status === 'active'">You are {{ status }} now.</p>
    <p v-else-if="status === 'inactive'">You are {{ status }} now.</p>
    <p v-else>You are {{ status }} now.</p>

    <h2>Daily Tasks:</h2>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
    <a v-bind:href="link" target="_blank"
      >Click to redirect google official website
    </a>
    <br />
    <button v-on:click="toogleStatus">
      Click me to change status of an user
    </button>
  </div>
</template>
