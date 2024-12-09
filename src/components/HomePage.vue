<template>
  <div class="home-page">
    <div style="margin-left: 8%; margin-top: 5%;">
      <h1 style="color: orange">Choose Your Pizza</h1>
      <pizza-list :pizzas="pizzaList" @select-pizza="onPizzaSelect" />

      <h1 style="color: orange;">Customize Your Pizza</h1>
      <size-list :sizes="sizeList"></size-list>
      <topping-list :toppings="toppingList" :pizzaId="selectedPizza" :pizzas="pizzaList" />
    </div>

    <div class="card-total">
      <total-card :selectedPizza="selectedPizza"></total-card>
    </div>
  </div>
</template>


<script setup>
import PizzaList from "./pizza/PizzaList.vue";
import SizeList from "./pizza/SizeList.vue";
import ToppingList from "./pizza/ToppingList.vue";
import TotalCard from "./pizza/TotalCard.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const pizzaList = ref([]);
const sizeList = ref([]);
const toppingList = ref([]);
const selectedPizza = ref(null); // Menyimpan ID pizza yang dipilih

onMounted(async () => {
  try {
    await store.dispatch("pizza/getPizzaData");
    pizzaList.value = store.state.pizza.pizzas;

    await store.dispatch("size/getSizeData");
    sizeList.value = store.state.size.sizes;

    await store.dispatch("topping/getToppingData");
    toppingList.value = store.state.topping.toppings;
  } catch (error) {
    console.log(error);
  }
});

const onPizzaSelect = (pizzaId) => {
  selectedPizza.value = pizzaId; 
  store.dispatch("pizza/setSelectedPizza", pizzaId)// Update pizza yang dipilih
};
</script>

<style scoped>
.home-page {
  background-color: #f8f9fa;
  display: flex;
  flex-direction: row; /* Membuat konten dalam baris */
  justify-content: space-between; /* Memberi jarak antara kiri dan kanan */
  padding: 20px;
  gap: 20px;
}

.card-total {
  margin-top: 8%;
}

</style>

