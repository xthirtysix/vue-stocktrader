/* eslint-disable no-param-reassign */
import stocks from '../../data/stocks';

const mutations = {
  SET_STOCKS: (state, value) => {
    state.stocks = value;
  },
  RND_STOCKS: (state) => {
    state.stocks.forEach((stock) => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
      console.log(stock.price);
    });
  },
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  },
};

const getters = {
  stocks: (state) => state.stocks,
};

const state = {
  stocks: [],
};

export default {
  state,
  mutations,
  actions,
  getters,
};
