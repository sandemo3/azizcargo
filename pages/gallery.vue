<template>
  <div>
    <!-- Navbar Start -->
    <div class="container-fluid position-relative p-0">
      <div
        class="container-fluid bg-primary py-5 bg-guangzhou"
        style="margin-bottom: 90px"
      >
        <div class="row py-5">
          <div class="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 class="display-4 text-white animated zoomIn">Gallerie</h1>
            <NuxtLink to="" class="h5 text-white">Acceuil</NuxtLink>
            <i class="far fa-circle text-white px-2"></i>
            <NuxtLink to="gallery" class="h5 text-white">Gallerie</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar End -->

    <!-- Portfolio Start -->
    <div class="container-xxl py-5">
      <div class="container px-lg-5">
        <!-- <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4">Nos Photos</h6>
                    <h2 class="mt-2">Ici vous avez des photo sur presque tout ce que nous faisons au quotidien.</h2>
                </div> -->
        <div
          class="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style="max-width: 600px"
        >
          <h5 class="fw-bold text-primary text-uppercase">Nos Photos</h5>
          <h1 class="mb-0">
            Ici vous avez des photos sur presque toute notre activité.
          </h1>
        </div>
        <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
          <div class="col-12 text-center">
            <ul id="portfolio-flters" class="list-inline mb-5">
              <li class="btn px-3 pe-4 active" data-filter="*">All</li>
              <li class="btn px-3 pe-4" data-filter=".first">Cargo-Maritime</li>
              <li class="btn px-3 pe-4" data-filter=".second">Air-Cargo</li>
            </ul>
          </div>
        </div>
        <div class="row g-4 portfolio-container">
          <div
            class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
            data-wow-delay="0.1s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img class="img-fluid w-100" src="assets/img/yiwu.jpg" alt="" />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="assets/img/yiwu.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Cargo-Maritime</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >embarquement</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
            data-wow-delay="0.3s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img
                class="img-fluid w-100"
                src="assets/img/guangzhou.jpg"
                alt=""
              />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="assets/img/guangzhou.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Cargo-Maritime</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >embarquement</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
            data-wow-delay="0.6s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img class="img-fluid w-100" src="assets/img/dubai.jpg" alt="" />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="assets/img/dubai.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Cargo-Maritime</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >embarquement</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
            data-wow-delay="0.1s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img
                class="img-fluid w-100"
                src="assets/img/istanbul.jpg"
                alt=""
              />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="assets/img/istanbul.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Air-Cargo</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >embarquement</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
            data-wow-delay="0.3s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img class="img-fluid w-100" src="assets/img/yiwu.jpg" alt="" />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="assets/img/yiwu.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Air-Cargo</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >embarquement</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
            data-wow-delay="0.6s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img
                class="img-fluid w-100"
                src="assets/img/guangzhou.jpg"
                alt=""
              />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="assets/img/guangzhou.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Air-Cargo</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >embarquement</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio End -->
  </div>
</template>

<script>
export default {
  mounted() {
    const $ = window.$;
    const portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
    })
    $('#portfolio-flters li').on('click', function () {
      $('#portfolio-flters li').removeClass('active')
      $(this).addClass('active')

      portfolioIsotope.isotope({ filter: $(this).data('filter') })
    })
  },
}
</script>

<style lang="scss" scoped></style>
