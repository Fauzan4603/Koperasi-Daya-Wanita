
<template>
  <Navbar />
  <div id="app">
    <section class="tentang-kami">
      <div class="Kami">
        <h2>Tentang Kami</h2>
        <p>
          Koperasi Daya Wanita adalah sebuah jenis koperasi yang berfokus pada
          pemberdayaan perempuan melalui kegiatan ekonomi dan sosial yang sudah berdiri sejak 1958.
        </p>
      </div>
      <div class="visi">
        <h2>VISI</h2>
        <p>
          Menjadi koperasi terdepan dalam pemberdayaan perempuan, yang mendukung
          peningkatan kesejahteraan ekonomi dan sosial anggotanya melalui layanan keuangan yang inklusif,
          edukasi, dan pengembangan keterampilan.
        </p>
      </div>
      <div class="misi">
        <h2>MISI</h2>
        <p>
          1. Meningkatkan kesejahteraan ekonomi anggota<br>
          2. Memberdayakan perempuan melalui edukasi dan pelatihan<br>
          3. Mendukung solidaritas dan kebersamaan di komunitas<br>
          4. Mengembangkan layanan inklusif dan responsif serta mendukung pembangunan berkelanjutan
        </p>
      </div>
      <div class="container">
        <div class="rectangle">
          <div class="circle">{{ memberCount }}</div>
          <span class="text">Anggota</span>
        </div>
      </div>
    </section>
    
    <section class="about">
      <div class="row">
        <div class="about-col">
          <h1>Pencapaian Kami</h1>
          <p>
            Berbagai prestasi dan penghargaan telah dicapai sebagai hasil dari komitmen Koperasi Daya Wanita
            terhadap keunggulan dan kesejahteraan anggota. Penghargaan tersebut menjadi semangat bagi
            Koperasi Daya Wanita untuk terus berkembang dan memberikan dampak positif demi mencapai visi dan misinya.
          </p>
        </div>
        <vue-carousel :autoplay="true">
          <div v-for="(achievement, index) in achievements" :key="index" class="carousel-item">
            <img :src="achievement.image" :alt="achievement.title">
            <p>{{ achievement.title }}</p>
          </div>
        </vue-carousel>
      </div>
    </section>
    
    <section class="kegiatan">
      <h2>KEGIATAN</h2>
      <div class="kegiatan-container">
        <div v-for="(event, index) in events" :key="index" class="event-card">
          <div class="event-date">{{ event.date }}</div>
          <div class="event-photo">foto</div>
          <div class="event-name">{{ event.name }}</div>
        </div>
      </div>
      <vue-carousel :autoplay="true" :loop="false">
        <div v-for="(event, index) in events" :key="index" class="carousel-item">
          <div class="event-date">{{ event.date }}</div>
          <div class="event-photo">foto</div>
          <div class="event-name">{{ event.name }}</div>
        </div>
      </vue-carousel>
      <button @click="openWhatsApp" class="join-btn">Minat Bergabung?</button>
    </section>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import { ref, onMounted } from 'vue';
import VueCarousel from '@chenfengyuan/vue-carousel';

const memberCount = ref(0);
const animateCount = () => {
  let start = 0;
  const end = 200; // Jumlah anggota
  const duration = 2000;
  const increment = end / (duration / 16);

  const updateCount = () => {
    start += increment;
    if (start < end) {
      memberCount.value = Math.ceil(start);
      requestAnimationFrame(updateCount);
    } else {
      memberCount.value = end;
    }
  };

  updateCount();
};

onMounted(() => {
  animateCount();
});

const achievements = ref([
  { image: 'path/to/image1.jpg', title: '2020 Penghargaan' },
  { image: 'path/to/image2.jpg', title: '2021 Penghargaan' },
  { image: 'path/to/image3.jpg', title: '2022 Penghargaan' },
]);

const events = ref([
  { date: 'Tanggal', name: 'Nama Kegiatan' },
  { date: 'Tanggal', name: 'Nama Kegiatan' },
  { date: 'Tanggal', name: 'Nama Kegiatan' },
]);

const openWhatsApp = () => {
  window.location.href = 'https://wa.me/your-number';  // Ganti your-number dengan nomor WhatsApp admin
}
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
}

.tentang-kami, .about, .kegiatan {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
}

.tentang-kami {
  background-color: #799351;
  padding: 7%;
  padding-top: 9.7%;
  display:grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr ;
  align-content: center;
}

.about, .kegiatan {
  background-color: #f5f5dc;
}

.Kami, .visi, .misi {
  margin-bottom: 20px;
}

.Kami h2, .visi h2, .misi h2 {
  background-color: #A1DD70;
  color: #F6EEC9;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 35px;
  margin-top: 0;
  display: inline-block;
  text-shadow: 3px 1px 5px rgba(0, 0, 0, 0.5);
  text-align: justify;
}

.rectangle {
  width: 125px; /* Lebar kotak */
  height: 180px; /* Tinggi kotak */
  border-radius: 25px;
  margin-right: 100px;
  background-color: rgba(246, 238, 201, 0.5); /* Warna latar belakang kotak */
  display: flex; /* Menggunakan flexbox untuk centering */
  flex-direction: column; /* Menata konten secara vertikal */
  justify-content: center; /* Mengatur konten di tengah secara vertikal */
  align-items: center; /* Mengatur konten di tengah secara horizontal */
  border: 1px solid #ccc; /* Border untuk kotak */
  position: relative;
  top: 20px; /* Jarak dari atas */
  right: 0; 
}

.circle {
  width: 100px; /* Diameter lingkaran */
  height: 100px; /* Diameter lingkaran */
  background-color: #A1DD70; /* Warna latar belakang lingkaran */
  border-radius: 50%; /* Membuat elemen menjadi lingkaran */
  display: flex; /* Menggunakan flexbox untuk centering */
  justify-content: center; /* Mengatur konten di tengah secara horizontal */
  align-items: center; /* Mengatur konten di tengah secara vertikal */
  border-color: white;
  color: white; /* Warna teks */
  font-size: 24px;
}

.text { 
  margin-top: 25px; /* Jarak antara lingkaran dan teks */
  text-align: center; /* Posisi teks di tengah */
  color: #D3F8B5; 
}

.about h1 {
  color: #F6EEC9;
  font-size: 64px;
  text-shadow: 3px 1px 5px rgba(0, 0, 0, 0.5);
}

.about-col p {
  color: black;
  font-size: 25px;
}

.carousel-item {
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.carousel-item p {
  margin-top: 10px;
  font-weight: bold;
}

.kegiatan {
  text-align: center;
  margin-top: 20px;
}

.kegiatan h2 {
  background-color: #A1DD70;
  color: #F6EEC9;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 35px;
  text-shadow: 3px 1px 5px rgba(0, 0, 0, 0.5);
}

.kegiatan-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.event-card {
  background-color: #8fbc8f;
  padding: 20px;
  border-radius: 10px;
  width: 30%; /* Sesuaikan lebar kotak kegiatan */
}

.event-date, .event-photo, .event-name {
  margin-bottom: 10px;
}

.event-date {
  font-weight: bold;
  color: #fff;
}

.event-photo {
  height: 150px;
  background-color: #ccc; /* Warna latar belakang foto kegiatan */
  border-radius: 10px;
}

.event-name {
  font-weight: bold;
  color: #fff;
}

.join-btn {
  background-color: #A1DD70;
  color: #F6EEC9;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
