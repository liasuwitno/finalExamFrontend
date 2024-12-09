<template>
  <div class="topping-list">
    <h3>Toppings</h3>
    <div class="toppings mt-5 col-6">
      <label
        v-for="(topping, index) in toppings"
        :key="topping.id"
        class="topping-item"
        :class="{
          selected: isSelected(topping.id),
        }"
      >
        <input
          type="checkbox"
          :value="topping.id"
          class="topping-checkbox"
          :checked="isSelected(topping.id)"
          :disabled="isToppingEnabled(topping.id)"
          @change="toggleTopping(topping)"
        />
        <span class="topping-name"
          ><b>{{ topping.name }}</b></span
        >
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const selectedToppings = ref([]);

const props = defineProps({
  toppings: {
    type: Array,
    required: true,
  },
  pizzaId: {
    type: Number,
    required: true,
  },
  pizzas: {
    type: Array,
    required: true,
  },
});

const currentActivePizza = computed(() => store.state.pizza.selectedPizza);

const isSelected = (id) =>
  selectedToppings.value.some((topping) => topping.id === id);

const isToppingEnabled = (toppingItem) => {
  
  if (currentActivePizza.value) {
    // return currentActivePizza.value?.toppings?.includes(toppingItem);
    return !currentActivePizza.value?.toppings?.includes(toppingItem);
  }

  return true; // Topping tidak diaktifkan jika tidak ada pizza yang dipilih
};
watch(
  () => currentActivePizza.value,
  () => {
    selectedToppings.value = [];
  }
);

const toggleTopping = (toppingItem) => {
  const index = selectedToppings.value.indexOf(toppingItem.id);

  if (index === -1) {
    selectedToppings.value.push(toppingItem); // Tambahkan topping
  } else {
    selectedToppings.value.splice(index, 1); // Hapus topping
  }

  store.dispatch("topping/setSelectedTopping", selectedToppings.value); // Kirim ke Vuex
};
</script>

<style scoped>
.topping-list {
  margin-top: 20px;
}

.toppings {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.topping-item {
  cursor: pointer;
  border: 2px solid darkgrey;
  border-radius: 25px;
  padding: 5px 10px;
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  text-align: center;
}

.topping-checkbox {
  display: none;
}

.topping-item {
  background-color: #f5f5f5;
  color: #333;
  font-size: 14px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.topping-item:hover {
  background-color: orange;
  color: white;
}

.topping-item.selected {
  background-color: orange;
  color: white;
}

.topping-item:disabled {
  background-color: #555;
  cursor: not-allowed;
  border: none;
}

.topping-checkbox:disabled + .topping-name {
  color: #ccc;
}

.topping-name {
  display: inline-block; /* Keeps the name aligned properly */
}
</style>
