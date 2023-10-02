<template>
  <div>
    <input type="email" v-model="data.email" placeholder="Email" />
    <input type="password" v-model="data.password" placeholder="Password" />
    <button @click="getItems">Click</button>
  </div>
</template>

<script>
import { api } from "src/boot/axios";

export default {
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    getItems() {
      api
        .post("/auth", this.data)
        .then((res) => {
          console.log(res.data); // Logging the response data from the API
        })
        .catch((error) => {
          console.error("Error fetching items:", error);
        });
    },
  },
};
</script>
