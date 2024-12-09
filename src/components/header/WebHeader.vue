<template>
    <header class="head container-fluid py-4">
      <div class="d-flex justify-content-between align-items-center mx-5">
       <img src="../../assets/images/logo.svg" alt="Logo">
        <navigation-bar></navigation-bar>
        <register></register>
      </div>
      <h1>Pizza Order</h1>
    </header>
  </template>
  
  <script setup>
  import NavigationBar from "../header/NavigationBar.vue";
  import Register from "./Register.vue";
  </script>
  
  <style scoped>
  .head {
    background-image: url('../../assets/images/hero.png'); 
    background-size: cover;
    background-position: center;
    height: 77vh;
  }
  h1 {
  color: orange;
  font-weight: bold;
  position: absolute;
  font-size: 60px;
  top: 40%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
}
  </style>
  