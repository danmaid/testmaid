<template>
  <div id="app">
    <button @click="ping">ping</button>
    <div>{{ result }}</div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { ipcRenderer } from "electron";

export type DataType = {
  result: {} | null;
};

export default Vue.extend({
  name: "App",
  components: {
    HelloWorld
  },
  data(): DataType {
    return {
      result: null
    };
  },
  methods: {
    async ping() {
      console.log("ping");
      const res = await ipcRenderer.invoke("run", "www.danmaid.com");
      console.log(res);
      this.result = res;
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
