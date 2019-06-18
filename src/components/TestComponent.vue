<template>
  <div>
    <h1>Parent component</h1>
    <button @click="goBack">back button</button>
    <button @click="goSecondChild">to the second child</button>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goSecondChild() {
      this.$router.push({
        name: "TestComponentChildSecond"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
