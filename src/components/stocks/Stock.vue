<template>
  <div>
    <b-card
      :header="stock.name"
      bg-variant="info"
      header-tag="header"
    >
      <div class="card-container">
        <span>Price:</span>
        <span>{{stock.price}}$</span>
        <label :for="stock.name">Quantity:</label>
        <b-form-input
          :id="stock.name"
          type="number"
          min="0"
          placeholder="Qty..."
        />
      </div>
      <div class="button-container">
        <b-button class="card-button" href="#" variant="success">Buy</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    stock: Object,
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
