<template>
  <div id="app">
    <app-header/>
    <transition name="drop" mode="out-in">
      <router-view/>
    </transition>
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

.drop-enter-active {
  animation: drop-in 0.3s ease-out forwards;
}

.drop-leave-active {
  animation: drop-out 0.2s ease-out forwards;
}

@keyframes drop-in {
  0% {
    transform: translateY(-2rem);
    opacity: 0;
  }
  50% {
    transform: translateY(1rem)
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes drop-out {
  from {
    transform: translateY(0);
    opacity: 1;
  } to {
    transform: translateY(-2rem);
    opacity: 0;
  }
}
</style>
