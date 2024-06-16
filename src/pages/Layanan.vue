<script setup>
import { computed, ref } from "vue";

const jumlahSimpanan = ref(0);
const jangkaWaktuSimpanan = ref(0);
const persentaseSimpanan = 2;
const totalBungaSimpanan = computed(() => (jumlahSimpanan.value * (persentaseSimpanan / 100) * (jangkaWaktuSimpanan.value / 12)).toFixed(2));
const totalJumlahSimpanan = computed(() => (parseFloat(jumlahSimpanan.value) + parseFloat(totalBungaSimpanan.value)).toFixed(2));

const persentasePinjaman = 1.5;
const jumlahPinjaman = ref(0);
const jangkaWaktuPinjaman = ref(0);
const totalBungaPinjaman = computed (() => (jumlahPinjaman.value * (persentasePinjaman / 100) * (jangkaWaktuPinjaman.value / 12)).toFixed(2));
const totalPinjaman = computed(() => (parseFloat(jumlahPinjaman.value) + parseFloat(totalBungaPinjaman.value)).toFixed(2));
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
</script>

<template>
    <Navbar />
    <section class="pinjam">
        <div class="header-content">
            <div class="section">
                <h1>PINJAMAN</h1>
                <p>Koperasi Daya Wanita melayani anggotanya untuk simpan pinjam dana, membantu modal usaha, pendanaan darurat dan lain sebagainya.</p>
            </div>
            <div class="section">
                <h1>SIMPANAN</h1>
                <p>Koperasi Daya Wanita melayani anggotanya untuk simpan pinjam dana, membantu modal usaha, pendanaan darurat dan lain sebagainya.</p>
            </div>
        </div>

        <div class="simulasi">
            <h2>Simulasikan Simpanan Kamu</h2>
            <p>Simulasi ini merupakan ilustrasi perhitungan simpanan, perhitungan sebenarnya mengikuti perhitungan di sistem Koperasi Daya Wanita</p>
            <div class="slider-container">
                <div class="input-group">
                    <label for="simpanan">Jumlah Simpanan</label>
                    <input type="range" id="simpanan" min="0" max="200000000" step="100000" v-model="jumlahSimpanan">
                    <span id="simpananValue">{{ `Rp ${parseInt(jumlahSimpanan).toLocaleString()}` }}</span>
                </div>
                <div class="input-group">
                    <label for="jangkaWaktuSimpanan">Jangka Waktu</label>
                    <input type="range" id="jangkaWaktuSimpanan" min="1" max="120" v-model="jangkaWaktuSimpanan">
                    <span id="jangkaWaktuSimpananValue"> {{  jangkaWaktuSimpanan }} Bulan</span>
                </div>
                <p>Persentase: {{ persentaseSimpanan }}%</p>
                <div class="result-group">
                    <p>Total Bunga: <span id="totalBungaSimpanan">Rp {{ `Rp ${parseInt(totalBungaSimpanan).toLocaleString()}` }}</span></p>
                    <p>Total Simpanan: <span id="totalSimpanan">Rp {{ `Rp ${parseInt(totalJumlahSimpanan).toLocaleString()}` }}</span></p>
                </div>
            </div>
            <div class="simulasi">
                <h2>Simulasikan Pinjaman Kamu</h2>
                <p>Simulasi ini merupakan ilustrasi perhitungan pinjaman, perhitungan sebenarnya mengikuti perhitungan di sistem Koperasi Daya Wanita</p>
                <div class="slider-container">
                    <div class="input-group">
                    <label for="pinjaman">Jumlah Pinjaman</label>
                    <input type="range" id="pinjaman" min="0" max="200000000" step="100000" value="150000000" v-model="jumlahPinjaman">
                    <span id="pinjamanValue">{{ `Rp ${parseInt(jumlahPinjaman).toLocaleString()}` }}</span>
                </div>
                <div class="input-group">
                    <label for="jangkaWaktuPinjaman">Jangka Waktu</label>
                    <input type="range" id="jangkaWaktuPinjaman" min="1" max="36" value="6" v-model="jangkaWaktuPinjaman">
                    <span id="jangkaWaktuPinjamanValue">{{ jangkaWaktuPinjaman }} Bulan</span>
                </div>
                <p>Persentase: {{ persentasePinjaman }}%</p>
                <div class="result-group">
                    <p>Total Bunga: <span id="totalBungaPinjaman">{{ `Rp ${parseInt(totalBungaPinjaman).toLocaleString()}` }}</span></p>
                    <p>Total Pinjaman: <span id="totalPinjaman">{{ `Rp ${parseInt(totalPinjaman).toLocaleString()}` }}</span></p>
                </div>
            </div>
            <div class="info">
                <div class="box">
                <h3>01</h3>
                <h3>Multiguna</h3>
                <p>Jenis layanan pinjaman atau pembiayaan yang dapat digunakan untuk berbagai keperluan oleh anggotanya dalam memenuhi berbagai kebutuhan pribadi atau usaha mereka.</p>
                </div>
                <div class="box">
                    <h3>02</h3>
                    <h3>Modal Usaha</h3>
                    <p>Dana yang disediakan oleh koperasi untuk mendukung anggotanya dalam memulai, usaha mereka. Tujuan utama dari penyediaan modal usaha ini untuk memberdayakan perempuan agar dapat mencapai kemandirian ekonomi.</p>
                </div>
                <div class="box">
                    <h3>03</h3>
                    <h3>Darurat</h3>
                    <p>Program yang dirancang untuk memberikan bantuan keuangan cepat dan mudah diakses bagi anggotanya yang menghadapi kebutuhan mendesak atau keadaan darurat. Layanan ini bertujuan untuk memberikan keamanan finansial.</p>
                </div>
            </div>
        </div>
        </div>
    </section>
    <Footer />
</template>

<style scoped>
.header-content{
    display: flex;
  padding:15%;
  gap:100px;
    background-color: #799351;
    text-align: left;

}
.section h1{
  color: #A1DD70;
  font-size:60px;
  text-shadow:1px 0px 5px;
}
.section p{
  color:#F6EEC9;
  font-size:25px;
}
.simulasi {
    background-color: #A1DD70;
    /* padding:50px 5px 20px 10px; */
    align-content: center;
}

.simulasi h2 {
    color: #065D0F;
    text-align: center;
  font-size:60px;
}
.simulasi p {
    text-align: center;
  font-size:20px;
  margin: 0px 50px 0px 50px; 
}

.slider-container {
  margin:10px 100px 100px 100px;
    background-color: #dedede;
    padding: 35px;
    border-radius: 25px;
  box-shadow:0 0 10px rgba(0, 0,0, 0.5);
}
.input-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.slider-container label {
    flex: 1;
    margin: 10px;
}

.slider-container input[type="range"] {
    flex: 5;
}

.slider-container span {
    flex: 1;
    text-align: right;
  padding:10px;
}

.result-group {
    display: flex;
    padding-top:5px;
    border-top: 2px solid #ccc;
}

.result-group p {
    flex: 2;
  border-right:2px solid #ccc;
    text-align: left;
}

.info {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #FFECB3;
    gap:20px;
    padding: 100px 20px 100px 20px;
}

.info .box {
    padding: 2%;
    background-color: #dedede;
    border-radius: 30px;
}

.info .box h3 {
    color: #000000;
  text-align:left;
  
}

.info .box p {
    color: #000000;
  text-align:left;
}
</style>