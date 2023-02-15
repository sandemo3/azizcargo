<template>
  <div>


        <!-- Navbar & Carousel Start -->
        <div class="container-fluid position-relative p-0">

        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="assets/img/service/service01.jpg" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="container p-3" style="max-width: 85%;">
                            <div class="row text-banner">
                                <div class="col-md-7">
                                    <h5 class="text-white text-uppercase mb-3 animated slideInDown">créatif & innovant</h5>
                                    <h1 class="display-1 text-white mb-md-4 animated zoomIn">N°1 DU GROUPAGE</h1>
                                    <NuxtLink to="tracking" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Trackez votre colis</NuxtLink>
                                    <NuxtLink to="contact" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contactez nous</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/service/ban2.jpg" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="container p-3" style="max-width: 85%;">
                            <div class="row text-banner">
                                <div class="col-md-7">
                                    <h5 class="text-white text-uppercase mb-3 animated slideInDown">créatif & innovant</h5>
                                    <h1 class="display-1 text-white mb-md-4 animated zoomIn">TRACKEZ VOTRE COLIS EN LIGNE</h1>
                                    <NuxtLink to="tracking" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Trackez votre colis</NuxtLink>
                                    <NuxtLink to="contact" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contactez nous</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <!-- Navbar & Carousel End -->

    <!-- Facts Start -->
    <div class="container-fluid facts py-5 pt-lg-0">
        <div class="container py-5 pt-lg-0">
            <div class="row gx-0">
                <div class="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                    <div class="bg-primary shadow d-flex align-items-center justify-content-center p-4" style="height: 150px;">
                        <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2" style="width: 60px; height: 60px;">
                            <i class="fa fa-users text-primary"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="text-white mb-0">Clients satisfaits</h5>
                            <h1 id="counter0" class="text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                    <div class="bg-light shadow d-flex align-items-center justify-content-center p-4" style="height: 150px;">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style="width: 60px; height: 60px;">
                            <i class="fa fa-check text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="text-primary mb-0">Colis par jour</h5>
                            <h1 id="counter1" class="mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div class="bg-primary shadow d-flex align-items-center justify-content-center p-4" style="height: 150px;">
                        <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2" style="width: 60px; height: 60px;">
                            <i class="fa fa-award text-primary"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="text-white mb-0">Récompenses gagner</h5>
                            <h1 id="counter2" class="text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Facts Start -->


    <!-- About Start -->
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
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
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="assets/img/gallery/aziz5.jpg" style="object-fit: cover;">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->


    <!-- Features Start -->

    <!-- <div class="container-xxl newsletter-overlay my-5 wow fadeInUp" data-wow-delay="0.1s"></div> -->
    <div class="container-xxl newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container px-lg-5">
                <div class="row align-items-center" style="height: 300px;">
                    <div class="col-12 col-md-6">
                        <h3 class="text-white">Suivez votre colis en ligne</h3>
                        <small class="text-white">entrez l'ID de votre colis pour le suivre.</small>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Entrez votre ID" style="height: 48px;">
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                    <div class="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img class="img-fluid" style="height: 250px; margin-top: 5rem !important;" src="assets/img/newsletter.png">
                    </div>
                </div>
            </div>
        </div>
    <!-- <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
                <h5 class="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                <h1 class="mb-0">We Are Here to Grow Your Business Exponentially</h1>
            </div>
            <div class="row g-5">
                <div class="col-lg-4">
                    <div class="row g-5">
                        <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                            <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                                <i class="fa fa-cubes text-white"></i>
                            </div>
                            <h4>Best In Industry</h4>
                            <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                        <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                            <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                                <i class="fa fa-award text-white"></i>
                            </div>
                            <h4>Award Winning</h4>
                            <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style="min-height: 350px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="assets/img/feature.jpg" style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row g-5">
                        <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                            <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                                <i class="fa fa-users-cog text-white"></i>
                            </div>
                            <h4>Professional Staff</h4>
                            <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                        <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                            <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                                <i class="fa fa-phone-alt text-white"></i>
                            </div>
                            <h4>24/7 Support</h4>
                            <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- Features Start -->


    <!-- Service Start -->
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
                <h5 class="fw-bold text-primary text-uppercase">Nos services</h5>
                <h1 class="mb-0">Des solutions personnalisées pour la prosperiter de votre entreprise</h1>
            </div>
            <div class="row gy-5 gx-4">
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item">
                        <img class="img-fluid" src="assets/img/guangzhou.jpg" alt="">
                        <div class="service-img">
                            <img class="img-fluid" src="assets/img/guangzhou.jpg" alt="">
                        </div>
                        <div class="service-detail">
                            <div class="service-title">
                                <hr class="w-25">
                                <h3 class="mb-0">Guangzhou</h3>
                                <hr class="w-25">
                            </div>
                            <div class="service-text">
                                <p class="text-white mb-0">Ici éffectué vos groupages maritime en toute sécurité et avec une facilité evidente.</p>
                            </div>
                        </div>
                        <NuxtLink class="btn btn-light" to="guangzhou">En savoir plus</NuxtLink>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item">
                        <img class="img-fluid" src="assets/img/yiwu.jpg" alt="">
                        <div class="service-img">
                            <img class="img-fluid" src="assets/img/yiwu.jpg" alt="">
                        </div>
                        <div class="service-detail">
                            <div class="service-title">
                                <hr class="w-25">
                                <h3 class="mb-0">Yiwu</h3>
                                <hr class="w-25">
                            </div>
                            <div class="service-text">
                                <p class="text-white mb-0">Ici éffectué vos groupages maritime en toute sécurité et avec une facilité evidente.</p>
                            </div>
                        </div>
                        <NuxtLink class="btn btn-light" to="yiwu">En savoir plus</NuxtLink>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item">
                        <img class="img-fluid" src="assets/img/dubai.jpg" alt="">
                        <div class="service-img">
                            <img class="img-fluid" src="assets/img/dubai.jpg" alt="">
                        </div>
                        <div class="service-detail">
                            <div class="service-title">
                                <hr class="w-25">
                                <h3 class="mb-0">Dubaï</h3>
                                <hr class="w-25">
                            </div>
                            <div class="service-text">
                                <p class="text-white mb-0">Ici éffectué vos groupages aérien en toute sécurité et avec une facilité evidente.</p>
                            </div>
                        </div>
                        <NuxtLink class="btn btn-light" to="dubai">En savoir plus</NuxtLink>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item">
                        <img class="img-fluid" src="assets/img/istanbul.jpg" alt="">
                        <div class="service-img">
                            <img class="img-fluid" src="assets/img/istanbul.jpg" alt="">
                        </div>
                        <div class="service-detail">
                            <div class="service-title">
                                <hr class="w-25">
                                <h3 class="mb-0">Istanbul</h3>
                                <hr class="w-25">
                            </div>
                            <div class="service-text">
                                <p class="text-white mb-0">Ici éffectué vos groupages aérien en toute sécurité et avec une facilité evidente.</p>
                            </div>
                        </div>
                        <NuxtLink class="btn btn-light" to="istanbul">En savoir plus</NuxtLink>
                    </div>
                </div>
            </div>
            <!-- <div class="row g-5">
                <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                            <i class="fa fa-shield-alt text-white"></i>
                        </div>
                        <h4 class="mb-3">Cyber Security</h4>
                        <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a class="btn btn-lg btn-primary rounded" href="">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                            <i class="fa fa-chart-pie text-white"></i>
                        </div>
                        <h4 class="mb-3">Data Analytics</h4>
                        <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a class="btn btn-lg btn-primary rounded" href="">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                            <i class="fa fa-code text-white"></i>
                        </div>
                        <h4 class="mb-3">Web Development</h4>
                        <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a class="btn btn-lg btn-primary rounded" href="">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                            <i class="fab fa-android text-white"></i>
                        </div>
                        <h4 class="mb-3">Apps Development</h4>
                        <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a class="btn btn-lg btn-primary rounded" href="">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                            <i class="fa fa-search text-white"></i>
                        </div>
                        <h4 class="mb-3">SEO Optimization</h4>
                        <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a class="btn btn-lg btn-primary rounded" href="">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div class="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <h3 class="text-white mb-3">Call Us For Quote</h3>
                        <p class="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                        <h2 class="text-white mb-0">+012 345 6789</h2>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
    <!-- Service End -->
    
    <!-- Testimonial Start -->
    <!-- <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="section-title text-center position-relative pb-3 mb-4 mx-auto" style="max-width: 600px;">
                <h5 class="fw-bold text-primary text-uppercase">Testimonial</h5>
                <h1 class="mb-0">What Our Clients Say About Our Digital Services</h1>
            </div>
            <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                <div class="testimonial-item bg-light my-4">
                    <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img class="img-fluid rounded" src="assets/img/testimonial-1.jpg" style="width: 60px; height: 60px;" >
                        <div class="ps-4">
                            <h4 class="text-primary mb-1">Client Name</h4>
                            <small class="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div class="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
                <div class="testimonial-item bg-light my-4">
                    <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img class="img-fluid rounded" src="assets/img/testimonial-2.jpg" style="width: 60px; height: 60px;" >
                        <div class="ps-4">
                            <h4 class="text-primary mb-1">Client Name</h4>
                            <small class="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div class="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
                <div class="testimonial-item bg-light my-4">
                    <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img class="img-fluid rounded" src="assets/img/testimonial-3.jpg" style="width: 60px; height: 60px;" >
                        <div class="ps-4">
                            <h4 class="text-primary mb-1">Client Name</h4>
                            <small class="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div class="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
                <div class="testimonial-item bg-light my-4">
                    <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img class="img-fluid rounded" src="assets/img/testimonial-4.jpg" style="width: 60px; height: 60px;" >
                        <div class="ps-4">
                            <h4 class="text-primary mb-1">Client Name</h4>
                            <small class="text-uppercase">Profession</small>
                        </div>
                    </div>
                    <div class="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">        
        <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-4 mx-auto" style="max-width: 600px;">
                    <h5 class="fw-bold text-primary text-uppercase">Témoignages</h5>
                    <h1 class="mb-0">Ce que nos clients disent de nos services</h1>
                </div>
        <ssr-carousel
            :slides-per-page="3"
            :autoplay-delay="1"
            :center="true"
            show-arrows
            show-dots
            paginate-by-slide
            loop
            :responsive="[
              {
                maxWidth: 1400,
                slidesPerPage: 3,
              },
              {
                maxWidth: 1024,
                slidesPerPage: 2,
              },
              {
                maxWidth: 767,
                slidesPerPage: 1,
              },
            ]"
            class="py-5 wow fadeInUp" data-wow-delay="0.6s"
        >
            <div class="slide">
                <div class="testimonial-item bg-light my-4">
                        <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img class="img-fluid rounded" src="assets/img/testimonial-1.jpg" style="width: 60px; height: 60px;" >
                            <div class="ps-4">
                                <h4 class="text-primary mb-1">Client Name</h4>
                                <small class="text-uppercase">Profession</small>
                            </div>
                        </div>
                        <div class="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </div>
                    </div>
            </div>
            <div class="slide">
                <div class="testimonial-item bg-light my-4">
                        <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img class="img-fluid rounded" src="assets/img/testimonial-2.jpg" style="width: 60px; height: 60px;" >
                            <div class="ps-4">
                                <h4 class="text-primary mb-1">Client Name</h4>
                                <small class="text-uppercase">Profession</small>
                            </div>
                        </div>
                        <div class="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </div>
                    </div>
            </div>
            <div class="slide">
                <div class="testimonial-item bg-light my-4">
                        <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img class="img-fluid rounded" src="assets/img/testimonial-3.jpg" style="width: 60px; height: 60px;" >
                            <div class="ps-4">
                                <h4 class="text-primary mb-1">Client Name</h4>
                                <small class="text-uppercase">Profession</small>
                            </div>
                        </div>
                        <div class="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </div>
                    </div>
            </div>
            <div class="slide">
                <div class="testimonial-item bg-light my-4">
                        <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                            <img class="img-fluid rounded" src="assets/img/testimonial-4.jpg" style="width: 60px; height: 60px;" >
                            <div class="ps-4">
                                <h4 class="text-primary mb-1">Client Name</h4>
                                <small class="text-uppercase">Profession</small>
                            </div>
                        </div>
                        <div class="pt-4 pb-5 px-5">
                            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </div>
                    </div>
            </div>
        </ssr-carousel>
    </div>
    </div>
    <!-- Testimonial End -->

  </div>
</template>

<script>
import { CountUp } from 'countup.js';
export default {
  name: 'IndexPage',
  mounted () {    
      const contup0 = new CountUp('counter0',12345.000,{ enableScrollSpy: true });
      const contup1 = new CountUp('counter1',12345.000,{ enableScrollSpy: true });
      const contup2 = new CountUp('counter2',12345.000,{ enableScrollSpy: true });
      contup0.start();
      contup1.start();
      contup2.start();

          // // Testimonials carousel

    //       const $ = window.$;
    // $(".testi-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     dots: true,
    //     loop: true,
    //     center: true,
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         576:{
    //             items:1
    //         },
    //         768:{
    //             items:2
    //         },
    //         992:{
    //             items:3
    //         }
    //     }
    // });


    // Vendor carousel
    // $('.vendors-carousel').owlCarousel({
    //     loop: true,
    //     margin: 45,
    //     dots: false,
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     responsive: {
    //         0:{
    //             items:2
    //         },
    //         576:{
    //             items:4
    //         },
    //         768:{
    //             items:6
    //         },
    //         992:{
    //             items:8
    //         }
    //     }
    // });
  },
}
</script>
<style lang="scss" scoped>
.text-banner{
    justify-content: left;
    text-align: -webkit-left;
}
.fw-bold{
  color: #06a3da !important;
}

</style>
