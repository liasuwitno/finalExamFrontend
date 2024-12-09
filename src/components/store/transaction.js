import PizzaListData from "@/pizza-list.json";

export default {
    namespaced: true,
    state() {
      return {
        selectedPizza: null,
        setSelectedSize: null,
        selectedTopping: [null], // Menambahkan state untuk menyimpan pizza yang dipilih
      };
    },
    getters: {
      getSelectedPizza(state) {
        return state.selectedPizza;
      },
    },
  
    mutations: {
      setSelectedPizza(state, pizzaId) {
        state.selectedPizza = pizzaId; // Update state dengan ID pizza yang dipilih
      },
      setSelectedSize(state, payload) {
        state.setSelectedSize = payload;
    },
    setSelectedTopping(state, payload) {
        state.setSelectedTopping = payload;
      }
    },
    actions: {
      setSelectedPizza({ commit }, pizzaId) {
        commit("setSelectedPizza", pizzaId); // Mutasi untuk memperbarui pizza yang dipilih
      },
    },
  };
  