
<template>
  <div class="container">
    <div class="footer">
      <div class="container-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.9045371633372!2d107.4442196088191!3d-6.545776324321807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690e42cba6762d%3A0xd35cbf558aed9edc!2sKoperasi%20Daya%20Wanita!5e0!3m2!1sen!2sid!4v1718088833260!5m2!1sen!2sid" width="400" height="300" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="container-tentangkami">
        <a href="#" class="a-head">Tentang Kami</a><br>
        <li>Visi</li>
        <li>Misi</li>
        <li>Anggota</li>
        <li>Pencapaian kami</li>
        <li>Kegiatan</li>
      </div>
      <div class="container-hubungikami">
        <a href="#" class="a-head">Hubungi Kami</a>
        <li>Email</li>
        <li>No. Telpon</li>
        <li>Lokasi</li>
      </div>
      <div class="container-layanan">
        <a href="#" class="a-head">Layanan</a>
        <li>Simpanan</li>
        <li>Lokasi</li>
      </div>
      <div class="container-kantorkami">
        <h3>Kantor Kami</h3>
        <p>Jl. Surawinata No. 4, Nagri Kaler, Kec, Purwakarta, Kabupaten Purwakarta</p>
        <h3>Hotline</h3>
        <p>021-123456<br>koperasidayawanita@gmail.com</p>
      </div>
      <div class="container-follow">
        <h3>Follow Us</h3>
        <div>
          <a href="https://facebook.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path></svg>
          </a>
          <a href="https://www.youtube.com/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
          </a>
          <a href="https://instagram.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
          </a>
        </div>
      </div>
    </div>  
  </div>

  
</template>

<style scoped>
.footer{
  width: 100%;
  height: 40vh;
  background-color: #7A7A7A;
  display: grid;
  grid-template-columns: 1 1 1 1 1;  
  padding-top: 30px;
}
li {
  list-style-type: none;
}

p{
  font-size: 14px;
}

.a-head{
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.container-maps{
  width: 100%;
  height: 70%;
}
.container-maps iframe{
  width: 70%;
  height: 100%;
  padding-left: 8px;
}

.container-tentangkami{
  height: 70%;
  width: 100%;
}

.container-hubungikami{
  height: 100%;
  width: 100%;
}

.container-layanan{
  height: 100%;
  width: 100%;
}

.container-kantorkami{
  height: 100%;
  width: 100%;
  max-width: 350px;
}

.container-follow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  grid-column: 1 /6;
}



</style>