<template>
  <div class="size-list d-flex">
    <h3>Size</h3>
    <div
      class="sizes mt-5 size-card mx-3"
      v-for="(size, index) in sizes"
      :key="index"
    >
      <input
        type="radio"
        :value="size.id"
        :checked="selectSize?.id === size.id"
        :id="size.name"
        class="size-input"
        @change="kirimSize(size)"
      />
      <label :for="size.id">
        <span class="size-info">
          <span class="size-name"
            >{{ size.name }} (+{{ size.extra_price }}$)</span
          >
        </span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

const selectSize = computed(() => store.state.size.setSelectedSize); // secara default dia null
const store = useStore();

// Ambil data ukuran dan pizza yang dipilih dari Vuex
// const pizzaId = computed(() => store.state.pizza.selectedPizza); // Ambil ID pizza yang dipilih

defineProps({
  sizes: Array,
});

const kirimSize = (sizeItem) => {
  store.dispatch("size/selectedSize", sizeItem);
};

// watch(selectSize, (newSize) => {
//   if (newSize) {
//     store.dispatch("size/selectedSize", newSize);
//   }
// });
</script>

<style scoped>

.sizes {
  display: flex;
  gap: 15px;
}

.size-card {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.size-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.extra-price {
  color: gray;
  font-size: 0.9rem;
}

.size-input {
  width: 20px;
  height: 20px;
  appearance: none;
  border-radius: 50%;
  border: 2px solid #ccc;
  position: relative;
  cursor: pointer;
  transition: border-color 0.3s;
}

.size-input:checked {
  border-color: orange;
  background-color: orange;
}

.size-input:focus {
  outline: none;
}
</style>
