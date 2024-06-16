<template>
    <div class="container" id="section-1">
        <div>
            <h1>
                Koperasi<br>Daya<br>Wanita
            </h1>
            <p>Koperasi Daya Wanita ialah sebuah bentuk koperasi yang didirikan dengan tujuan utama untuk memberdayakan perempuan melalui berbagai kegiatan ekonomi dan sosial. Koperasi ini berperan dalam meningkatkan kesejahteraan anggotanya, yang mayoritas adalah wanita, dengan menyediakan akses ke berbagai sumber daya, pelatihan, dan dukungan finansial.</p>
        </div>
        <div class="container-img">
            <img src="/koperasi.jpeg" />
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #799351;
    padding: 7%;
    padding-top: 9.7%;
    display:grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
    align-content: center;
}
.container h1{
    font-size: 70px;
    color: #F6EEC9;
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