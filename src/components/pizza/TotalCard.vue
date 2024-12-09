<template>
  <div class="payment-summary">
    <h3>Payment Summary</h3>
    <div class="summary-items">
      <div
        v-for="(item, index) in orderItems"
        :key="index"
        class="summary-item"
      >
        <p>{{ item.name }}</p>
        <p>${{ item.price.toFixed(2) }}</p>
      </div>
    </div>
    <hr />
    <div class="total">
      <p>Total Price</p>
      <p class="total-price">${{ totalPrice.toFixed(2) }}</p>
    </div>

    <button class="order-button" @click="placeOrder">Order Now</button>

    <!-- Modal -->
    <!-- <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <img src="https://via.placeholder.com/100" alt="Success Icon" />
        <h3>Order Success</h3>
        <p>Thank you, we have received your order successfully.</p>
        <button class="close-modal" @click="closeModal">Close</button>
      </div>
    </div> -->


  </div>
</template>


<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const showModal = ref(false);
// Menggunakan computed untuk mendapatkan data dari Vuex store
const selectedPizza = computed(() => store.state.pizza.selectedPizza);
const selectedSize = computed(() => store.state.size.setSelectedSize);
const selectedTopping = computed(() => store.state.topping.selectedTopping);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  resetData();
};

const resetData = () => {
  // Reset data ke kondisi awal
  orderItems.value = [];
};
const orderItems = computed(() => {
  const parentData = [];

  if (selectedPizza.value) {
    const pizza = selectedPizza.value;
    const findFinalPrice = pizza?.discount?.is_active
      ? pizza.discount.final_price
      : pizza.price;

    parentData.push({ name: pizza?.name, price: findFinalPrice });
  }

  if (selectedSize.value) {
    const size = selectedSize.value;
    parentData.push({ name: size?.name, price: size?.extra_price });
  }

  if (selectedTopping.value?.length > 0) {
    const toppings = selectedTopping.value;

    toppings.forEach((topping) => {
      parentData.push({ name: topping?.name, price: topping?.price });
    });
  }

  localStorage.setItem("items", JSON.stringify(parentData));

  return parentData;
});

const totalPrice = computed(() =>
  orderItems.value.reduce((sum, item) => sum + item.price, 0)
);

// watch(totalPrice, (newValue) => {});

const placeOrder = () => {
  // Tampilkan alert
  alert("Thank you! We have received your order successfully.");

  // Reset data
  store.dispatch("pizza/resetData");
  store.dispatch("size/resetData");
  store.dispatch("topping/resetData");

  console.log("Order placed and data reset.");
};
</script>

<style scoped>
.payment-summary {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  width: 300px;
}

.payment-summary h3 {
  color: orange;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
}

.summary-items {
  margin-bottom: 20px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
}

.total {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}

.total-price {
  color: green;
}

.order-button {
  width: 100%;
  padding: 10px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.order-button:hover {
  background-color: darkorange;
}

/* MODAL */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
}

.modal img {
  max-width: 80px;
  margin: 0 auto 15px;
}

.modal h3 {
  color: orange;
  margin: 10px 0;
}

.modal p {
  color: #555;
  margin-bottom: 15px;
}

.close-modal {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

</style>
