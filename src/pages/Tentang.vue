
<template>
  <Navbar />
  <div id="app">
    <section class="tentang-kami">
      <div class="left-side">
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
      </div>
      <div class="right-side">
        <div class="container">
          <div class="rectangle">
            <div class="circle">{{ memberCount }}</div>
            <span class="text">Anggota Koperasi Aktif</span>
          </div>
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
      </div>
      <div class="achievement-container">
        <div v-for="(achievement, index) in achievements" :key="index" class="achievement-card">
          <h3>{{ achievement.title }}</h3>
          <img :src="achievement.image" :alt="achievement.title" class="achievement-image">
          <p>{{ achievement.description }}</p>
        </div>
      </div>
    </section>

    <section class="kegiatan">
      <h2>KEGIATAN</h2>
      <div class="kegiatan-container">
        <div v-for="(kegiatan, index) in event" :key="index" class="event-card">
          <h3>{{ kegiatan.title }}</h3>
          <img :src="kegiatan.image" :alt="kegiatan.title" class="event-image">
          <p>{{ kegiatan.description }}</p>
        </div>
      </div>
      <button @click="openWhatsApp" class="join-btn">Minat Bergabung?</button>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VueCarousel from '@chenfengyuan/vue-carousel';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const memberCount = ref(0);
const animateCount = () => {
  let start = 0;
  const end = 1000; // Jumlah anggota
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
  { image: 'aci1.jpg', title: 'Penghargaan 2020', description: 'Penghargaan sebagai koperasi terbaik 2021' },
  { image: 'aci2.jpeg', title: 'Penghargaan 2021', description: 'Penghargaan sebagai koperasi terbaik 2022' },
  { image: 'aci3.jpeg', title: 'Penghargaan 2022', description: 'Penghargaan sebagai koperasi terbaik 2023' },
]);

const event = ref([
  { image: 'keg1.jpeg', title: '18/06/2024', description: 'Melaksanakan bakti sosial bersama warga' },
  { image: 'keg2.jpeg', title: '19/06/2024', description: 'Melaksanakan bakti sosial bersama kades' },
  { image: 'keg3.jpeg', title: '20/06/2024', description: 'Ini baksos juga pegel ngetiknya' },
]);

const openWhatsApp = () => {
  window.location.href = 'https://wa.me/your-number';  // Ganti your-number dengan nomor WhatsApp admin
}
</script>

<style scoped>

.tentang-kami, .about, .kegiatan {
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.tentang-kami {
  background-color: #799351;
  padding: 7%;
  padding-top: 9.7%;
  display: flex;
  justify-content: space-between;
}

.left-side {
  width: 60%;
}

.right-side {
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rectangle {
  width: 225px; /* Lebar kotak */
  height: 280px; /* Tinggi kotak */
  border-radius: 25px;
  background-color: rgba(246, 238, 201, 0.5); /* Warna latar belakang kotak */
  display: flex; /* Menggunakan flexbox untuk centering */
  flex-direction: column; /* Menata konten secara vertikal */
  justify-content: center; /* Mengatur konten di tengah secara vertikal */
  align-items: center; /* Mengatur konten di tengah secara horizontal */
  border: 1px solid #ccc; /* Border untuk kotak */
}

.rectangle .text {
  font-style: italic;
  font-weight: bold;
}

.circle {
  width: 150px; /* Diameter lingkaran */
  height: 150px; /* Diameter lingkaran */
  background-color: #A1DD70; /* Warna latar belakang lingkaran */
  border-radius: 50%; /* Membuat elemen menjadi lingkaran */
  display: flex; /* Menggunakan flexbox untuk centering */
  justify-content: center; /* Mengatur konten di tengah secara horizontal */
  align-items: center; /* Mengatur konten di tengah secara vertikal */
  border-color: white;
  color: white; /* Warna teks */
  font-size: 28px;
  font-weight: bold;
}

.text { 
  margin-top: 25px; /* Jarak antara lingkaran dan teks */
  text-align: center; /* Posisi teks di tengah */
  color: #ffffff; 
}

.about {
  background-color: #A1DD70;
  padding: 8.4% 5% 8.4% 5%;
  text-align: center;
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

.achievement-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.achievement-card {
  background-color: #F6EEC9;
  padding: 20px;
  border-radius: 10px;
  width: 30%; /* Sesuaikan lebar kotak kegiatan */
  text-align: center;
  padding: 10px;
}

.achievement-card h3 {
  color: #000000;
  margin-bottom: 10px;
}

.achievement-card p {
  color: #000000;
  margin-top: 10px;
}

.achievement-image {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}

.kegiatan {
  padding: 8.4% 5% 8.4% 5%;
  text-align: center;
  background-color: #d4e157;
  border-radius: 10px;
  margin-top: 20px;
}

.kegiatan h2 {
  background-color: #A1DD70;
  color: #F6EEC9;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 35px;
  margin-top: 0;
  display: inline-block;
  text-shadow: 3px 1px 5px rgba(0, 0, 0, 0.5);
}

.kegiatan-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.event-card {
  background-color: #F6EEC9;
  padding: 20px;
  border-radius: 10px;
  width: 30%; /* Sesuaikan lebar kotak kegiatan */
  text-align: center;
  padding: 10px;
}

.event-image {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}
/* .event-date, .event-photo, .event-name {
  margin-bottom: 10px;
} */

/* .event-date {
  font-weight: bold;
  color: #fff;
}

/* .event-photo {
  height: 150px;
  background-color: #ccc; /* Warna latar belakang foto kegiatan */
  /* border-radius: 10px;
} */

/* .event-name {
  font-weight: bold;
  color: #fff;
} */ 

.join-btn {
  background-color: #A1DD70;
  color: #F6EEC9;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
}
.join-btn:hover{
  background-color: #4c6934;
  transition:ease-in-out 0.3s
}
</style>
