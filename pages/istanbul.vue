<template>
    <div>
                   <!-- Navbar Start -->
        <div class="container-fluid position-relative p-0">
            <div class="container-fluid bg-primary py-5 bg-guangzhou" style="margin-bottom: 90px;">
                <div class="row py-5">
                    <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-4 text-white animated zoomIn">Istanbul</h1>
                        <NuxtLink to="/" class="h5 text-white">Acceuil</NuxtLink>
                        <i class="far fa-circle text-white px-2"></i>
                        <NuxtLink to="istanbul" class="h5 text-white">Istanbul</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    <!-- Navbar End -->

 
    <!-- About Start -->
    <div class="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-7">
                    <div class="section-title position-relative pb-3 mb-5">
                        <h5 class="fw-bold text-primary text-uppercase">À propos de nous</h5>
                        <h1 class="mb-0">La meilleure solution en groupage depuis 2007</h1>
                    </div>
                    <p class="mb-4">AZIZ CARGO est une entreprise de groupage qui permet de transporter vos marchandises par mer et par air de la Chine (Guangzhou et Yiwu) vers le Cameroun. C'est le numéro 1 du groupage maritine au Cameroun et en Afrique Centrale</p>
                    <div class="row g-0 mb-3">
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Récompensé</h5>
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Personnel professionnel</h5>
                        </div>
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Assistance 24h/24 et 7j/7</h5>
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Prix équitables</h5>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="mb-2">Appelez pour poser toutes vos questions</h5>
                            <h4 class="text-primary mb-0">(+86) 136 3242 4504</h4>
                        </div>
                    </div>
                    <NuxtLink to="contact" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Contactez nous</NuxtLink>
                </div>
                <div class="col-lg-5" style="min-height: 500px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="assets/img/about/about2.jpg" style="object-fit: cover;">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>