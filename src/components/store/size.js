import SizeList from "@/size-list.json";

export default {
  namespaced: true,
  state() {
    return {
      sizes: [],
      setSelectedSize: null,
    };
  },
  getters: {},

  mutations: {
    setSizeData(state, payload) {
      state.sizes = payload;
    },
    setSelectedSize(state, payload) {
      console.log("ini size brooo", payload);
      state.setSelectedSize = payload;
    },
    setResetData(state) {
      state.setSelectedSize = null;
    }
  },
  actions: {
    async getSizeData({ commit }) {
      try {
        commit("setSizeData", SizeList.data);
      } catch (err) {
        console.log(err);
      }
    },
    selectedSize({ commit }, size) {
      commit("setSelectedSize", size); // Mutasi untuk memperbarui pizza yang dipilih
    },
    resetData({ commit}, order) {
      commit ("setResetData", order)
    }
  },
};
