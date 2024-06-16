<template>
    <div class="container" id="section-2">
        <div class="container-img">
            <img src="/koperasi.jpeg" />
        </div>
        <div>
            <h1>
                Kami<br>Memfasilitasi<br>Kebutuhan Anda
            </h1>
            <p>Kami hadir untuk memfasilitasi kebutuhan Anda dalam berbagai aspek kehidupan, terutama dalam pemberdayaan ekonomi dan sosial. Koperasi kami didirikan dengan tujuan untuk memberikan dukungan dan layanan yang komprehensif bagi setiap anggota, khususnya perempuan, untuk mencapai kesejahteraan yang lebih baik.</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #A1DD70;
    padding: 8.4% 5% 8.4% 5%;
    display:grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
    scroll-snap-align: start;
}
.container h1{
    text-align: right;
    font-size: 50px;
    color: #F6EEC9;
    filter: drop-shadow(6px 6px 4px rgb(51, 51, 51));
}
.container p{
    text-align: right;
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