<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="Portfolio">Portfolio</b-nav-item>
          <b-nav-item to="Stocks">Stocks</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="warning" @click="endDay">End Day</b-button>
          <b-nav-item-dropdown class="dropdown" text="Save & Load" right>
            <b-dropdown-item href="#" @click="saveData">Save Data</b-dropdown-item>
            <b-dropdown-item href="#" @click="loadData">Load Data</b-dropdown-item>
          </b-nav-item-dropdown>
          <li class="nav-item">
            <span class="nav-link">
              Funds: {{funds | currency}}
            </span>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData',
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };

      this.$http.put('data.json', data);
    },
    loadData() {
      this.fetchData();
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  margin-bottom: 3rem;
  border-radius: 5px;
}
.dropdown {
  margin-left: 1rem;
}
</style>
