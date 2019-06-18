<template>
  <div class="hello">
    <h1>Home component</h1>
    <button @click="goToTest">test comppnent</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    goToTest() {
      this.$router.push({
        name: "TestComponent"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
