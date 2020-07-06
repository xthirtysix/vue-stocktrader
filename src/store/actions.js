import Vue from 'vue';

export default {
  loadData: ({ commit }) => {
    Vue.http.get('data.json')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const { stocks, funds, stockPortfolio } = data;

          const portfolio = {
            funds,
            stockPortfolio,
          };

          commit('SET_STOCKS', stocks);
          commit('SET_PORTFOLIO', portfolio);
        }
      });
  },
};
