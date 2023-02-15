<template>
  <div>
    <div class="container-fluid position-relative p-0">
      <div
        class="container-fluid bg-primary py-5 bg-guangzhou"
        style="margin-bottom: 90px"
      >
        <div class="row py-5">
          <div class="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 class="display-4 text-white animated zoomIn">Destinations</h1>
            <NuxtLink to="/" class="h5 text-white">Acceuil</NuxtLink>
            <i class="far fa-circle text-white px-2"></i>
            <NuxtLink to="destination" class="h5 text-white"
              >Destinations</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar End -->
    <div class="container" style="height: 90vh">
      <div
        class="row mt-n2 wow fadeInUp d-flex justify-content-between"
        data-wow-delay="0.1s"
      >
        <div class="col-md-4 mb-4 text-center d-flex justify-content-center align-items-center" style="background: #091e3e12;">
          <ul id="portfolio-flters-destination" class="list-inline mb-5 w-100">
            <!-- <li class="btn px-3 pe-4 active" data-filter="*">All</li> -->
            <li class="btn btn-iso px-3 pe-4 active" data-filter=".douala">
              Cameroun (Douala)
            </li>
            <li class="btn btn-iso px-3 pe-4" data-filter=".yaounde">
              Cameroun (Yaoundé)
            </li>
            <li class="btn btn-iso px-3 pe-4" data-filter=".bafoussam">
              Cameroun (Bafoussam)
            </li>
            <li class="btn btn-iso px-3 pe-4" data-filter=".cotonou">
              Bénin (Cotonou)
            </li>
            <li class="btn btn-iso px-3 pe-4" data-filter=".accra">Ghana (Accra)</li>
            <li class="btn btn-iso px-3 pe-4" data-filter=".lome">Togo (Lomé)</li>
            <li class="btn btn-iso px-3 pe-4" data-filter=".istanbul">
              Turquie (Istanbul)
            </li>
            <li class="btn btn-iso px-3 pe-4" data-filter=".dubai">Dubaï</li>
          </ul>
        </div>
        <div class="col-md-7 portfolio-container-destination">
          <div
            class="container portfolio-item-destination douala zoomIn mb-4"
          >
            <div class="row">
              <div class="col-md-12">
                <img
                  class="w-100 h-100 rounded zoomIn"
                  data-wow-delay="0.9s"
                  src="assets/img/about/about2.jpg"
                  style="object-fit: cover; max-height: 300px"
                />
              </div>
            </div>
            <div class="row mt-3 mb-3">
              <div class="col-md-6 zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 672 870
                  665
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 690 232
                  734
                </h5>
              </div>
              <div class="col-md-6 zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-envelope text-primary me-3"></i
                  >contact@azizcargo.com
                </h5>
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-check text-primary me-3"></i>Assistance 24h/24
                  et 7j/7
                </h5>
              </div>
            </div>
            <div class="row mt-3 mb-3">
              <div class="col-md-6 zoomIn" data-wow-delay="0.2s">
                <NuxtLink
                  to="contact"
                  class="btn btn-primary py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fas fa-envelope fw-normal me-2"></i>Laissez nous un
                  mail</NuxtLink
                >
              </div>
              <div
                class="col-md-6 zoomIn d-flex justify-content-end"
                data-wow-delay="0.4s"
              >
                <NuxtLink
                  to="contact"
                  class="btn btn-primary btn-whatsapp py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fab fa-whatsapp fw-normal me-2"></i>Ecrivez
                  nous</NuxtLink
                >
              </div>
            </div>
          </div>

          <div
            class="container portfolio-item-destination no-active yaounde zoomIn mb-4"
          >
            <div class="row">
              <div class="col-md-12">
                <img
                  class="w-100 h-100 rounded zoomIn"
                  data-wow-delay="0.9s"
                  src="assets/img/about/about2.jpg"
                  style="object-fit: cover; max-height: 300px"
                />
              </div>
            </div>

            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 672 870
                  665
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 690 232
                  734
                </h5>
              </div>
              <div class="col-sm-6 zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-envelope text-primary me-3"></i
                  >contact@azizcargo.com
                </h5>
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-check text-primary me-3"></i>Assistance 24h/24
                  et 7j/7
                </h5>
              </div>
            </div>
            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <NuxtLink
                  to="contact"
                  class="btn btn-primary py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fas fa-envelope fw-normal me-2"></i>Laissez nous un
                  mail</NuxtLink
                >
              </div>
              <div
                class="col-sm-6 zoomIn d-flex justify-content-end"
                data-wow-delay="0.4s"
              >
                <NuxtLink
                  to="contact"
                  class="btn btn-primary btn-whatsapp py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fab fa-whatsapp fw-normal me-2"></i>Ecrivez
                  nous</NuxtLink
                >
              </div>
            </div>
          </div>

          <div
            class="container portfolio-item-destination no-active bafoussam zoomIn mb-4"
          >
            <div class="row">
              <div class="col-md-12">
                <img
                  class="w-100 h-100 rounded zoomIn"
                  data-wow-delay="0.9s"
                  src="assets/img/about/about2.jpg"
                  style="object-fit: cover; max-height: 300px"
                />
              </div>
            </div>

            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 672 870
                  665
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 690 232
                  734
                </h5>
              </div>
              <div class="col-sm-6 zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-envelope text-primary me-3"></i
                  >contact@azizcargo.com
                </h5>
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-check text-primary me-3"></i>Assistance 24h/24
                  et 7j/7
                </h5>
              </div>
            </div>
            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <NuxtLink
                  to="contact"
                  class="btn btn-primary py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fas fa-envelope fw-normal me-2"></i>Laissez nous un
                  mail</NuxtLink
                >
              </div>
              <div
                class="col-sm-6 zoomIn d-flex justify-content-end"
                data-wow-delay="0.4s"
              >
                <NuxtLink
                  to="contact"
                  class="btn btn-primary btn-whatsapp py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fab fa-whatsapp fw-normal me-2"></i>Ecrivez
                  nous</NuxtLink
                >
              </div>
            </div>
          </div>

          <div
            class="container portfolio-item-destination no-active cotonou zoomIn mb-4"
          >
            <div class="row">
              <div class="col-md-12">
                <img
                  class="w-100 h-100 rounded zoomIn"
                  data-wow-delay="0.9s"
                  src="assets/img/about/about2.jpg"
                  style="object-fit: cover; max-height: 300px"
                />
              </div>
            </div>

            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+229) 96 756 801 
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-envelope text-primary me-3"></i
                  >contact@azizcargo.com
                </h5>
              </div>
              <div class="col-sm-6 zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-check text-primary me-3"></i>Assistance 24h/24
                  et 7j/7
                </h5>
              </div>
            </div>
            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <NuxtLink
                  to="contact"
                  class="btn btn-primary py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fas fa-envelope fw-normal me-2"></i>Laissez nous un
                  mail</NuxtLink
                >
              </div>
              <div
                class="col-sm-6 zoomIn d-flex justify-content-end"
                data-wow-delay="0.4s"
              >
                <NuxtLink
                  to="contact"
                  class="btn btn-primary btn-whatsapp py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fab fa-whatsapp fw-normal me-2"></i>Ecrivez
                  nous</NuxtLink
                >
              </div>
            </div>
          </div>

          <div
            class="container portfolio-item-destination no-active accra zoomIn mb-4"
          >
            <div class="row">
              <div class="col-md-12">
                <img
                  class="w-100 h-100 rounded zoomIn"
                  data-wow-delay="0.9s"
                  src="assets/img/about/about2.jpg"
                  style="object-fit: cover; max-height: 300px"
                />
              </div>
            </div>

            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+233) 244 827 969
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-envelope text-primary me-3"></i
                  >contact@azizcargo.com
                </h5>
              </div>
              <div class="col-sm-6 zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-check text-primary me-3"></i>Assistance 24h/24
                  et 7j/7
                </h5>
              </div>
            </div>
            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <NuxtLink
                  to="contact"
                  class="btn btn-primary py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fas fa-envelope fw-normal me-2"></i>Laissez nous un
                  mail</NuxtLink
                >
              </div>
              <div
                class="col-sm-6 zoomIn d-flex justify-content-end"
                data-wow-delay="0.4s"
              >
                <NuxtLink
                  to="contact"
                  class="btn btn-primary btn-whatsapp py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fab fa-whatsapp fw-normal me-2"></i>Ecrivez
                  nous</NuxtLink
                >
              </div>
            </div>
          </div>

          <div
            class="container portfolio-item-destination no-active lome zoomIn mb-4"
          >
            <div class="row">
              <div class="col-md-12">
                <img
                  class="w-100 h-100 rounded zoomIn"
                  data-wow-delay="0.9s"
                  src="assets/img/about/about2.jpg"
                  style="object-fit: cover; max-height: 300px"
                />
              </div>
            </div>

            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 672 870
                  665
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 690 232
                  734
                </h5>
              </div>
              <div class="col-sm-6 zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-envelope text-primary me-3"></i
                  >contact@azizcargo.com
                </h5>
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-check text-primary me-3"></i>Assistance 24h/24
                  et 7j/7
                </h5>
              </div>
            </div>
            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <NuxtLink
                  to="contact"
                  class="btn btn-primary py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fas fa-envelope fw-normal me-2"></i>Laissez nous un
                  mail</NuxtLink
                >
              </div>
              <div
                class="col-sm-6 zoomIn d-flex justify-content-end"
                data-wow-delay="0.4s"
              >
                <NuxtLink
                  to="contact"
                  class="btn btn-primary btn-whatsapp py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fab fa-whatsapp fw-normal me-2"></i>Ecrivez
                  nous</NuxtLink
                >
              </div>
            </div>
          </div>

          <div
            class="container portfolio-item-destination no-active istanbul zoomIn mb-4"
          >
            <div class="row">
              <div class="col-md-12">
                <img
                  class="w-100 h-100 rounded zoomIn"
                  data-wow-delay="0.9s"
                  src="assets/img/about/about2.jpg"
                  style="object-fit: cover; max-height: 300px"
                />
              </div>
            </div>

            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 672 870
                  665
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 690 232
                  734
                </h5>
              </div>
              <div class="col-sm-6 zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-envelope text-primary me-3"></i
                  >contact@azizcargo.com
                </h5>
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-check text-primary me-3"></i>Assistance 24h/24
                  et 7j/7
                </h5>
              </div>
            </div>
            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <NuxtLink
                  to="contact"
                  class="btn btn-primary py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fas fa-envelope fw-normal me-2"></i>Laissez nous un
                  mail</NuxtLink
                >
              </div>
              <div
                class="col-sm-6 zoomIn d-flex justify-content-end"
                data-wow-delay="0.4s"
              >
                <NuxtLink
                  to="contact"
                  class="btn btn-primary btn-whatsapp py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fab fa-whatsapp fw-normal me-2"></i>Ecrivez
                  nous</NuxtLink
                >
              </div>
            </div>
          </div>

          <div
            class="container portfolio-item-destination no-active dubai mb-4"
          >
            <div class="row">
              <div class="col-md-12">
                <img
                  class="w-100 h-100 rounded zoomIn"
                  data-wow-delay="0.9s"
                  src="assets/img/about/about2.jpg"
                  style="object-fit: cover; max-height: 300px"
                />
              </div>
            </div>

            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 672 870
                  665
                </h5>
                <h5 class="mb-3">
                  <i class="fa fa-phone text-primary me-3"></i> (+237) 690 232
                  734
                </h5>
              </div>
              <div class="col-sm-6 zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-envelope text-primary me-3"></i
                  >contact@azizcargo.com
                </h5>
                <h5 class="mb-3 d-flex justify-content-end align-items-center">
                  <i class="fa fa-check text-primary me-3"></i>Assistance 24h/24
                  et 7j/7
                </h5>
              </div>
            </div>
            <div class="row g-0 mt-3 mb-3">
              <div class="col-sm-6 zoomIn" data-wow-delay="0.2s">
                <NuxtLink
                  to="contact"
                  class="btn btn-primary py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fas fa-envelope fw-normal me-2"></i>Laissez nous un
                  mail</NuxtLink
                >
              </div>
              <div
                class="col-sm-6 zoomIn d-flex justify-content-end"
                data-wow-delay="0.4s"
              >
                <NuxtLink
                  to="contact"
                  class="btn btn-primary btn-whatsapp py-3 px-5 mt-3 zoomIn"
                  data-wow-delay="0.9s"
                  ><i class="fab fa-whatsapp fw-normal me-2"></i>Ecrivez
                  nous</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- destination Start -->
    <!-- <div class="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div
          class="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style="max-width: 600px"
        >
          <h5 class="fw-bold text-primary text-uppercase">Nos destinations</h5>
          <h1 class="mb-0">
            Ici vous avez les address de nos differents sièges
          </h1>
        </div>
        <div class="row g-5 justify-content-center">
          <div class="col-lg-8 wow slideInUp" data-wow-delay="0.6s">
            <div id="accordionPanelsStayOpenExample" class="accordion">
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingOne" class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <h4><img src="assets/img/contries/chine.png" alt="" width="50" style="border-radius: 5px;"> CHINE</h4>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <strong>Warehouse :</strong> (0086) 020-36384135 <i class="fa fa-phone"></i> <br> <br>
                    <strong>Aziz :</strong> (+86) 136 3242 4504 <i class="fa fa-phone"></i> 
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingTwo" class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <h4><img src="assets/img/contries/cameroun.jpg" alt="" width="50" style="border-radius: 5px;"> CAMEROUN</h4>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <strong>Cameroon (Douala) :</strong> (+237) 672 870 665 <i class="fa fa-phone"></i> <br> <br>
                    <strong>Cameroon (Douala) :</strong> (+237) 690 232 734 <i class="fa fa-phone"></i>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingThree" class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    <h4><img src="assets/img/contries/benin.png" alt="" width="50" style="border-radius: 5px;"> BENIN</h4>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                    <strong>Benin (Cotonou) :</strong> (+229) 96 756 801 <i class="fa fa-phone"></i> <br> 
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingFour" class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    <h4><img src="assets/img/contries/ghana.png" alt="" width="50" style="border-radius: 5px;"> GHANA</h4>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body">
                    <strong>Ghana (Accra) :</strong> (+233) 244 827 969 <i class="fa fa-phone"></i> <br>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 id="panelsStayOpen-headingFive" class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    <h4><img src="assets/img/contries/togo.png" alt="" width="50" style="border-radius: 5px;"> TOGO</h4>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div class="accordion-body">
                    <strong>Warehouse :</strong> (0086) 020-36384135 <i class="fa fa-phone"></i> <br> <br>
                    <strong>Aziz :</strong> (+86) 136 3242 4504 <i class="fa fa-phone"></i> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- destination End -->
  </div>
</template>

<script>
export default {
  mounted() {
    const $ = window.$
    $('.no-active').css('display', 'none')
    const portfolioIsotope = $('.portfolio-container-destination').isotope({
      itemSelector: '.portfolio-item-destination',
      layoutMode: 'fitRows',
    })
    // $('#portfolio-flters-destination li').on('mousedown', function () {
    //   $('.portfolio-item-destination').removeClass('no-active')
    // })
    $('#portfolio-flters-destination li').on('click', function () {
      $('#portfolio-flters-destination li').removeClass('active')
      $('.portfolio-item-destination').removeClass('no-active')
      $(this).addClass('active')

      portfolioIsotope.isotope({ filter: $(this).data('filter') })
    })
  },
}
</script>

<style lang="scss" scoped>
.btn-iso {
  display: grid !important;
}
.btn-whatsapp {
  background-color: lightseagreen;
  border-color: lightseagreen;
}
.tab {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
