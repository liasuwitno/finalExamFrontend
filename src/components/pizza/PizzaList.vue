<template>
  <div class="d-flex flex-wrap">
    <label
      v-for="(pizza, index) in pizzas"
      :key="pizza.id"
      :for="pizza.name"
      class="card d-flex align-items-center pizza-card"
      :class="{ selected: selectedPizza?.id === pizza.id }"
      @change="selectPizza(pizza)"
    >
      <input
        :id="pizza.name"
        type="radio"
        :value="pizza.id"
        class="d-none"
        :checked="selectedPizza?.id === pizza.id"
      />
      <!-- Ribbon untuk Veggie Pizza -->
      <img
        v-if="pizza.name === 'Veggie Pizza'"
        src="@/assets/images/ribbon.svg"
        alt="Ribbon"
        class="ribbon"
      />
      <img :src="PizzaAsset[index]" alt="" class="pizza-image" />
      <div class="card-content">
        <h4>{{ pizza.name }}</h4>
        <p class="pizza-price">${{ pizza.price.toFixed(2) }}</p>
      </div>
    </label>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from "vue";
import { useStore } from "vuex";

import CheesePizza from "@/assets/images/Cheese Pizza.png";
import VeggiePizza from "@/assets/images/Veggie Pizza.png";
import ClassicPizza from "@/assets/images/Classical Pizza.png";

const PizzaAsset = [CheesePizza, VeggiePizza, ClassicPizza];

const store = useStore();

// DEFAULT
// const selectedPizza = ref(null);
const selectedPizza = computed(() => store.state.pizza.selectedPizza);
const selectedSizes = computed(() => store.state.size.sizes);

defineProps({
  pizzas: {
    type: Array,
    required: true,
  },
});


const selectPizza = (pizzaItem) => {
  // Mengambil data pertama di array sizes
  const firstItemSize = selectedSizes.value?.find(
    (size) => size.name === "Small"
  );

  store.dispatch("pizza/setSelectedPizza", pizzaItem);
  store.dispatch("size/selectedSize", firstItemSize);
};
</script>

<style scoped>
.d-flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.pizza-card {
  cursor: pointer;
  border: 1px solid #ccc;
  transition: background-color 0.3s, border-color 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  width: 320px;
  height: 200px;
  text-align: left;
  position: relative;
}

.pizza-card:hover {
  background-color: orange;
  border-color: orange;
}

.pizza-card.selected {
  background-color: orange;
  border-color: orange;
}

.pizza-image {
  width: 100px;
  height: 100px;
  margin-right: 15px;
  border-radius: 50%;
  transition: transform 0.5s ease;
}

.pizza-card:hover .pizza-image {
  transform: rotate(30deg);
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pizza-price {
  font-size: 18px;
  color: #555;
  margin: 5px 0 0;
}

.ribbon {
  position: absolute;
  top: 0px;
  right: 0px;
  width: auto;
  height: auto;
}
</style>
