<template>
    <div class="container">
      <Navbar />
      <div class="main-content" id="hubungi-kami">
        <h2>Hubungi Kami</h2>
        <div class="contact-info">
          <div class="item">
            <i class="fa-solid fa-envelope"></i>
            <a href="https://mail.google.com/">koperasidayawanita@gmail.com</a>
          </div>
          <div class="item">
            <i class="fa-solid fa-phone-volume"></i>
            <a href="https://web.whatsapp.com/">0264-218046</a>
          </div>
          <div class="item">
            <i class="fa-solid fa-location-dot"></i>
            <p>Jl. Surawinata No.4, Nagri Kaler, <br />Kec. Purwakarta, Kabupaten Purwakarta</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    components: {
      Navbar,
      Footer
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: #799351;
  }
  
  .main-content {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 65px;
    display: grid;
    grid-gap: 15px;
    align-content: start;
  }
  
  .main-content h2 {
    text-align: center;
    font-size: 75px;
    color: #f6eec9;
    text-shadow: 3px 1px 5px rgba(0, 0, 0, 0.5);
    margin-bottom: 30px;
    margin-top: 10%;
  }
  
  .contact-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .contact-info .item {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .contact-info .item:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  
  .contact-info .item i {
    font-size: 30px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .contact-info .item p {
    font-size: 1.2em;
    color: #333;
    margin: 0;
  }
  
  footer {
    background-color: #333;
    color: #fff;
    padding: 15px;
    text-align: center;
  }
  </style>
  