<template>
  <div>
    <h1>The Stocks component</h1>
    <ul class="grid">
      <li :key="stock.id" v-for="stock in stocks">
        <app-stock :stock="stock"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  data() {
    return {
      stocks: [
        {
          id: 1,
          name: 'Apple',
          price: 300,
        },
        {
          id: 2,
          name: 'Google',
          price: 280,
        },
        {
          id: 3,
          name: 'Facebook',
          price: 200,
        },
        {
          id: 4,
          name: 'Amazon',
          price: 180,
        },
      ],
    };
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
