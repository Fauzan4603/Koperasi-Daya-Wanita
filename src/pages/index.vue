<script setup>
  import Navbar from "../components/Navbar.vue";
  import Section1 from "../sectionPage/Section1.vue";
  import Section2 from "../sectionPage/Section2.vue";
  import Section3 from "../sectionPage/Section3.vue";
  import Footer from "../components/Footer.vue";
  import Layanan from "../pages/Layanan.vue";
  import Tentang from "../pages/Tentang.vue"
  import Chat from "../components/Chat.vue";
  import Contact from "../pages/Contact.vue"
</script>

<template>
  <div class="container">
    <Navbar />
    <div class="content">
        <Chat />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />

    </div>
  </div>
</template>

<style scoped>
  
</style>