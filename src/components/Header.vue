<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="Portfolio">Portfolio</b-nav-item>
          <b-nav-item to="Stocks">Stocks</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="warning">End Day</b-button>
          <b-nav-item-dropdown text="Save & Load" right>
            <b-dropdown-item href="#">Save Data</b-dropdown-item>
            <b-dropdown-item href="#">Load Data</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
    margin-bottom: 3rem;
    border-radius: 5px;
}
</style>
