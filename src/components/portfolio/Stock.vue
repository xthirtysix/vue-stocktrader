<template>
  <div>
    <b-card
      :header="stock.name"
      bg-variant="warning"
      header-tag="header"
    >
      <div class="card-container">
        <span>Price:</span>
        <span>{{stock.price}}$</span>
        <span>Owned:</span>
        <span>{{stock.quantity}}</span>
        <label :for="stock.name">Quantity:</label>
        <b-form-input
          :id="stock.name"
          :state="quantity > 0 && Number.isInteger(quantity) && quantity <= stock.quantity"
          v-model.number="quantity"
          type="number"
          min="0"
          :max="stock.quantity"
          placeholder="Qty..."
        />
      </div>
      <div class="button-container">
        <b-button
          @click="sellStock"
          class="card-button"
          href="#"
          :disabled="quantity <= 0 || !Number.isInteger(quantity) || quantity > stock.quantity"
          variant="success"
        >
          Sell
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    stock: Object,
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock',
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.placeSellOrder(order);
      this.quantity = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-header {
  color: var(--white);
}
.card-body {
  text-align: left;
  background-color: var(--white);
}
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
  margin-bottom: 1rem;
}
label {
  margin: auto 0;
}
.button-container {
  text-align: center;
}
.card-button {
  min-width: 50%;
}
.row {
  margin: 0;
}
</style>
