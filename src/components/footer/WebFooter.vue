<template>
  <footer class="footer container-fluid py-4 d-flex flex-column justify-content-center align-items-center">
    <div class="content-wrapper w-100 d-flex flex-column align-items-center">
      <div class="row align-items-middle justify-content-between ">
        <hr class="w-100 mb-4" />

        <!-- Logo and Social Media Section -->
        <div class="col-md-3 text-center text-md-start mb-4">
          <img src="../../assets/images/logo-alt.svg" alt="Logo" class="footer-logo" />
          <h5 style="color: orange;" class="mt-5">Find Us :</h5>
          <ul class="social-icons list-unstyled d-flex justify-content-center justify-content-md-start mt-3 text-center">
            <li class="me-3">
              <a href="#" class="social-icons"><img src="../../assets/images/facebook.svg" alt="Facebook" style="width: 40%;"/></a>
            </li>
            <li class="me-3">
              <a href="#" class="social-icons"><img src="../../assets/images/instagram.svg" alt="Instagram" style="width: 70%;"/></a>
            </li>
            <li>
              <a href="#" class="social-icons"><img src="../../assets/images/youtube.svg" alt="Youtube" style="width: 70%;"/></a>
            </li>
          </ul>
        </div>

        <!-- Navigation Links -->
        <div class="col-md-2 text-center text-md-start mb-4">
          <h3>Navigation</h3>
          <div class="d-flex">
            <div>
            <ul class="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          </div>
          <div>
            <ul class="list-unstyled ms-5">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
          </ul>
          </div>
          </div>
          
          
        </div>

        <!-- Contact Information -->
        <div class="col-md-3 text-center text-md-start mb-4">
          <h3>Contact</h3>
          <ul class="list-unstyled">
            <li class="d-flex align-items-center mb-2">
              <img src="../../assets/images/mail.svg" alt="Email" class="me-2" />
              <a href="mailto:Food.now@mail.com">Food.now@mail.com</a>
            </li>
            <li class="d-flex align-items-center mb-2">
              <img src="../../assets/images/phone.svg" alt="Phone" class="me-2" />
              <a href="tel:+62848477102943">+62848477102943</a>
            </li>
            <li class="d-flex align-items-center">
              <img src="../../assets/images/whatsapp.svg" alt="WhatsApp" class="me-2" />
              <a href="https://wa.me/628184938494">+628184938494</a>
            </li>
          </ul>
        </div>

        <!-- Location Information -->
        <div class="col-md-3 text-center text-md-start mb-4">
          <h3>Location</h3>
          <div>
            <h5><img src="../../assets/images/location.svg" alt="Location" class="me-2" /> Kerobokan</h5>
            <b>
            <p>Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361</p>
          </b>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="text-center align-items-start justify-content-between w-75">
      <hr/>
      <p>&copy; 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. | Privacy Policy</p>
      <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    </div>
  </footer>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
}

.row {
  gap: 20px;
  width: 120%;
}

h3 {
  color: rgb(255, 128, 0);
  margin-bottom: 1rem;
}

.footer-logo {
  width: 90%;
  height: auto;
  margin-bottom: 10px;
}

.social-icons {
  padding-left: 15%;
  
}

.social-icons a {
  font-size: 1.5rem;
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  
  border: 2px solid orange;
  border-radius: 50%;
  width: 50px;
  height: 50px; 
  display: flex;
  justify-content: center;
  align-items: center; 
}

.social-icons a:hover {
  color: white; /* Warna teks saat hover */
  background-color: rgba(255, 165, 0, 0.5); /* Orange transparan */
}

.footer ul {
  padding-left: 0;
}

.footer ul li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.footer ul li img {
  width: 20px;
  height: auto;
  margin-right: 10px;
}

.footer ul li a {
  text-decoration: none;
  color: #333;
}

.footer ul li a:hover {
  color: orange;
}

.footer .text-center a {
  color: #333;
}

.footer .text-center a:hover {
  color: orange;
}
</style>