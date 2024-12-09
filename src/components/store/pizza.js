import PizzaListData from "@/pizza-list.json";

export default {
  namespaced: true,
  state() {
    return {
      pizzas: [],
      selectedPizza: null, // Menambahkan state untuk menyimpan pizza yang dipilih
    };
  },
  getters: {},

  mutations: {
    setPizzaData(state, payload) {
      state.pizzas = payload;
    },
    setSelectedPizza(state, pizza) {
      state.selectedPizza = pizza;
      // Update state dengan ID pizza yang dipilih
    },
    setResetData(state) {
      state.selectedPizza = null;
    }
  },
  actions: {
    async getPizzaData({ commit }) {
      try {
        commit("setPizzaData", PizzaListData.data);
      } catch (err) {
        console.log(err);
      }
    },
    setSelectedPizza({ commit }, pizza) {
      commit("setSelectedPizza", pizza); // Mutasi untuk memperbarui pizza yang dipilih
    },

    resetData({ commit}, order) {
      commit ("setResetData", order)
    }
  },
};
