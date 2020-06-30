/* eslint-disable func-names */
/* eslint quote-props: ["error", "as-needed", { "keywords": true, "unnecessary": false }] */
import stocks from '../../data/stocks';

const mutations = {
  'SET_STOCKS': function (state, value) {
    state.stocks = value;
  },
  // 'RND_STOCKS': function (state) {},
};

const actions = {
  // buyStock: ({ commit }, order) => {
  //   commit();
  // },
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
