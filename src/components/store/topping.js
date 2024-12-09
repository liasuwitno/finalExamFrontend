import ToppingList from "../../topping-list.json";

export default {
  namespaced: true,
  state() {
    return {
      toppings: [],
      selectedTopping: [],
    };
  },
  getters: {},

  mutations: {
    setToppingData(state, payload) {
      state.toppings = payload;
    },
    setSelectedTopping(state, payload) {
      state.selectedTopping = payload;
      console.log({ payload });
    },
    setResetData(state) {
      state.selectedTopping = [];
    }
  },
  actions: {
    async getToppingData({ commit }) {
      try {
        commit("setToppingData", ToppingList.data);
      } catch (err) {
        console.log(err);
      }
    },
    setSelectedTopping({ commit }, topping) {
      commit("setSelectedTopping", topping); // Mutasi untuk memperbarui topping yang dipilih
    },
    resetData({ commit}, order) {
      commit ("setResetData", order)
    }
  },
};
