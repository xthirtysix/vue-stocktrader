<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch('initStocks');
  },
};
</script>

<style lang="scss">
@import './scss/style.scss';

body {
  padding: 1rem 2rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
