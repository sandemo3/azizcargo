<template>
    <div>

    <!-- Vendor Start -->
    <div class="container-fluid partner">
        <div class="container py-5">
            <ssr-carousel
                :slides-per-page="4"
                :autoplay-delay="3"
                :center="true"
                loop
                :responsive="[
                  {
                    maxWidth: 1400,
                    slidesPerPage: 4,
                  },
                  {
                    maxWidth: 1024,
                    slidesPerPage: 3,
                  },
                  {
                    maxWidth: 767,
                    slidesPerPage: 3,
                  },
                ]"
                class=" wow fadeInUp" data-wow-delay="0.1s"
            >
                <div class="slide">
                    <img src="assets/img/client/partner1.png" alt="" width="100" height="50">
                </div>
                <div class="slide">
                    <img src="assets/img/client/partner2.png" alt="" width="100" height="50">
                </div>
                <!-- <div class="slide">
                    <img src="assets/img/client/partner6.png" alt="" width="100" height="50">
                </div> -->
                <div class="slide">
                    <img src="assets/img/client/partner3.png" alt="" width="100" height="50">
                </div>
                <div class="slide">
                    <img src="assets/img/client/partner5.png" alt="" width="100" height="50">
                </div>
                <div class="slide">
                    <img src="assets/img/client/partner6.png" alt="" width="100" height="50">
                </div>
                <!-- <div class="slide">
                    <img src="assets/img/client/partner1.png" alt="" width="100" height="50">
                </div> -->
                <!-- <div class="slide">
                    <img src="assets/img/client/partner7.png" alt="" width="80">
                </div>
                <div class="slide">
                    <img src="assets/img/client/partner8.png" alt="" width="80">
                </div>
                <div class="slide">
                    <img src="assets/img/client/partner9.png" alt="" width="80">
                </div> -->
            </ssr-carousel>
        </div>
    </div>
    <!-- Vendor End -->

    <!-- Footer Start -->
    <div class="container-fluid text-light wow fadeInUp footer" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <!-- <div class="col-lg-4 col-md-6 footer-about">
                    <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                        <a href="index.html" class="navbar-brand">
                            <h1 class="m-0 text-white"><i class="fa fa-user-tie me-2"></i>Startup</h1>
                        </a>
                        <p class="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                        <form action="">
                            <div class="input-group">
                                <input type="text" class="form-control border-white p-3" placeholder="Your Email">
                                <button class="btn btn-dark">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div> -->
                <!-- <div class="col-lg-8 col-md-6">
                    <div class="row gx-5"> -->
                        <div class="col-lg-3 col-md-12 pt-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="text-light mb-0">Contact info</h3>
                            </div>
                            <div class="d-flex mb-2">
                                <i class="bi bi-geo-alt text-primary me-2"></i>
                                <p class="mb-0">123 Street, Guangzhou, CHINE</p>
                            </div>
                            <div class="d-flex mb-2">
                                <i class="bi bi-envelope-open text-primary me-2"></i>
                                <p class="mb-0">contact@azizcargo.com</p>
                            </div>
                            <div class="d-flex mb-2">
                                <i class="bi bi-telephone text-primary me-2"></i>
                                <p class="mb-0">(+86) 136 3242 4504</p>
                            </div>
                            <div class="d-flex mt-4">
                                <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-whatsapp fw-normal"></i></a>
                                <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                                <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                                <a class="btn btn-primary btn-square" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="text-light mb-0">Liens utiles</h3>
                            </div>
                            <div class="link-animated d-flex flex-column justify-content-start">
                                <NuxtLink class="text-light mb-2" to="/"><i class="bi bi-arrow-right text-primary me-2"></i>Acceuil</NuxtLink>
                                <NuxtLink class="text-light mb-2" to="about"><i class="bi bi-arrow-right text-primary me-2"></i>Qui sommes nous</NuxtLink>
                                <NuxtLink class="text-light mb-2" to="destination"><i class="bi bi-arrow-right text-primary me-2"></i>Destination</NuxtLink>
                                <NuxtLink class="text-light mb-2" to="contact"><i class="bi bi-arrow-right text-primary me-2"></i>Contact</NuxtLink>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="text-light mb-0">Liens rapides</h3>
                            </div>
                            <div class="link-animated d-flex flex-column justify-content-start">
                                <NuxtLink class="text-light mb-2" to="guangzhou"><i class="bi bi-arrow-right text-primary me-2"></i>Guangzhou</NuxtLink>
                                <NuxtLink class="text-light mb-2" to="yiwu"><i class="bi bi-arrow-right text-primary me-2"></i>Yiwu</NuxtLink>
                                <NuxtLink class="text-light mb-2" to="dubai"><i class="bi bi-arrow-right text-primary me-2"></i>Dubai</NuxtLink>
                                <NuxtLink class="text-light mb-2" to="istanbul"><i class="bi bi-arrow-right text-primary me-2"></i>Istanbul</NuxtLink>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 class="text-light mb-0">Petite galerie</h3>
                            </div>
                            <div class="link-animated d-flex flex-grid justify-content-start">
                                <NuxtLink class="text-light mb-2 me-2" to="gallery"><img src="assets/img/gallery-min/aziz1.jpg" alt="" width="40"></NuxtLink>
                                <NuxtLink class="text-light mb-2 me-2" to="gallery"><img src="assets/img/gallery-min/aziz3.jpg" alt="" width="40"></NuxtLink>
                                <NuxtLink class="text-light mb-2 me-2" to="gallery"><img src="assets/img/gallery-min/aziz2.jpg" alt="" width="40"></NuxtLink>
                                <NuxtLink class="text-light mb-2" to="gallery"><img src="assets/img/gallery-min/aziz4.jpg" alt="" width="40"></NuxtLink>
                            </div>
                            <div class="link-animated d-flex flex-grid justify-content-start">
                                <NuxtLink class="text-light mb-2 me-2" to="gallery"><img src="assets/img/gallery-min/aziz6.jpg" alt="" width="40"></NuxtLink>
                                <NuxtLink class="text-light mb-2 me-2" to="gallery"><img src="assets/img/gallery-min/aziz8.jpg" alt="" width="40"></NuxtLink>
                                <NuxtLink class="text-light mb-2 me-2" to="gallery"><img src="assets/img/gallery-min/aziz7.jpg" alt="" width="40"></NuxtLink>
                                <NuxtLink class="text-light mb-2" to="gallery"><img src="assets/img/gallery-min/aziz5.jpg" alt="" width="40"></NuxtLink>
                            </div>
                            <div class="link-animated d-flex flex-grid justify-content-start">
                                <NuxtLink class="text-light mb-2 me-2" to="gallery"><img src="assets/img/gallery-min/aziz9.jpg" alt="" width="40"></NuxtLink>
                                <NuxtLink class="text-light mb-2 me-2" to="gallery"><img src="assets/img/gallery-min/aziz3.jpg" alt="" width="40"></NuxtLink>
                                <NuxtLink class="text-light mb-2 me-2" to="gallery"><img src="assets/img/gallery-min/aziz4.jpg" alt="" width="40"></NuxtLink>
                                <NuxtLink class="text-light mb-2" to="gallery"><img src="assets/img/gallery-min/aziz6.jpg" alt="" width="40"></NuxtLink>
                            </div>
                        </div>
                    <!-- </div>
                </div> -->
            </div>
        </div>
    </div>
    <div class="container-fluid text-white" style="background: #061429;">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-6">
                    <div class="d-flex align-items-center justify-content-center" style="height: 75px;">
                        <p class="mb-0">&copy; <a class="text-white border-bottom" href="#">AZIZCARGO</a>. All Rights Reserved. 
						
						<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
						Designed by <a class="text-white border-bottom" href="https://waaza.tech">WAAZA Technologie</a></p> 
                         <!-- Distributed By: <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
.partner{
    background-color: #091E3E !important;

    .ssr-caroussel-slide{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.footer{
    background-color: #091E3E !important;
    .bi{
        color: #06a3da !important;
    }
}
.back-to-top{
    background-color: #091E3E !important;
    border-color: #091E3E;
}
</style>