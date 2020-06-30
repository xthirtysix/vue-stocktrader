/* eslint-disable func-names */
/* eslint quote-props: ["error", "as-needed", { "keywords": true, "unnecessary": false }] */

const mutations = {
  'BUY_STOCK': function (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(
      (element) => element.id === stockId,
    );

    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity,
      });
    }

    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK': function (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(
      (element) => element.id === stockId,
    );

    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }

    state.funds += stockPrice * quantity;
  },
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  },
};

const getters = {
  stockPortfolio(state, gtrs) {
    return state.stocks.map((stock) => {
      const record = gtrs.stocks.find((element) => element.id === stock.id);

      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds(state) {
    return state.funds;
  },
};

const state = {
  funds: 10000,
  stocks: [],
};

export default {
  state,
  mutations,
  actions,
  getters,
};
