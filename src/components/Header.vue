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
          <b-button variant="warning">End Day</b-button>
          <b-nav-item-dropdown class="dropdown" text="Save & Load" right>
            <b-dropdown-item href="#">Save Data</b-dropdown-item>
            <b-dropdown-item href="#">Load Data</b-dropdown-item>
          </b-nav-item-dropdown>
          <li class="nav-item">
            <span class="nav-link">
              Funds: {{funds
                .toString()
                .split('')
                .reduce((acc,val,idx,src) => {
                  return (src.length - idx - 1) % 3 === 0 && idx !== src.length - 1
                  ? [...acc, ...val, '\'']
                  : [...acc, ...val];
                }, [])
                .join('')}}
              </span>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
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
