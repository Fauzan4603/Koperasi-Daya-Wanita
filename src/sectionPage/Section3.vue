<template>
    <div class="container" id="section-3">
        <div>
            <h1>
                Fasilitas<br>yang<br>Kami Tawarkan
            </h1>
            <p>Kami menawarkan beragam fasilitas meliputi simpan pinjam, pelatihan dan pengembangan keterampilan, dukungan usaha mikro, layanan sosial dan kesehatan, dukungan komunitas, dan lain sebagainya.</p>
        </div>
        <div class="container-img">
            <img src="/s2.jpeg" />
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #F6EEC9;
    padding: 8.4% 5% 8.4% 5%;
    display:grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
}
.container h1{
    font-size: 50px;
    color: #ffffff;
    filter: drop-shadow(6px 6px 4px rgb(51, 51, 51));
}
.container-img img{
    width: 100%;
    border-radius: 20px;
    filter: drop-shadow(8px 8px 4px rgb(51, 51, 51));
}

.container-img {
    margin: auto;
    text-align: right;
}

</style>