<template>
  <div>
    <ul class="grid">
      <li :key="stock.id" v-for="(stock, i) in stocks">
        <app-stock  :stock="stocks[i]"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio',
    }),
  },
  components: {
    appStock: Stock,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
