<script>
import Page9Vue from "../pages/Contact.vue";
</script>

<template>
    <div class="container-navbar">
      <div class="nav">
        <div class="logo">
            <img class="gambar" src="/logokop.png" alt="Logo" />
            <h1>KOPERASI<br>DAYA WANITA</h1>
        </div>
        <ul class="ul-navbar">
            <li class="li-navbar">
              <router-link class="a-navbar" to="/Home">BERANDA</router-link>
            </li>
            <li class="li-navbar">
              <router-link class="a-navbar" to="/tentang">TENTANG KAMI</router-link>
            </li>
            <li class="li-navbar">
              <router-link class="a-navbar" to="/contact">HUBUNGI KAMI</router-link>
            </li>
            <li class="li-navbar">
              <button class="li-button">
                <router-link class="a-navbar" to="/layanan">LAYANAN</router-link>
              </button>
            </li>
        </ul>
      </div>
    </div>
</template>

<style lang="scss" scoped>

$container-height: 12vh;

.container-navbar {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: $container-height;
    filter: drop-shadow(0px 1px 8px rgb(48, 48, 48));
    position: fixed;
    z-index: 9999;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 5px;
}

.ul-navbar {
    display: flex;
    height: 77px;
    justify-content: right;
    align-items: center;
}

.li-navbar {
    list-style-type: none;
    padding: 20px;
    margin: 5px;
    color: white;
    font-size: 12px;
}

.li-button {
    background-color: #ff7d7d;
    padding: 15px;
    margin: 5px;
    border: none;
    border-radius:20px;
    color: #ffffff;
    font-size: 12px;
    cursor: pointer;

    .a-navbar {
        color: #ffffff;
    }

    &:hover {
      background-color: #EE4343;
      transition:ease-in-out 0.3s ;
    }
}

.a-navbar {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-weight: 800;
}

.logo {
  display: flex;
  justify-content: center;
  align-content: center;

  img {
      height: calc($container-height - 15px);
  }
}

.logo h1{
  font-size: 20px;
  padding-left: 8px;
  line-height: 1.3rem;
  display: flex;
  align-items: center;
}

</style>