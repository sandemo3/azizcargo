<template>
  <div>
    <!-- Spinner Start -->
    <div
      id="spinner"
      class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div class="spinner"></div>
    </div>
    <!-- Spinner End -->

    <!-- Topbar Start -->
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
      <div class="row gx-0">
        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div class="d-inline-flex align-items-center" style="height: 45px">
            <!-- <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small> -->
            <small class="me-3 text-light"
              ><i class="fa fa-phone-alt me-2"></i>(+86) 136 3242 4504</small
            >
            <small class="text-light"
              ><i class="fa fa-envelope-open me-2"></i
              >contact@azizcargo.com</small
            >
          </div>
        </div>
        <div class="col-lg-4 text-center text-lg-end">
          <div class="d-inline-flex align-items-center" style="height: 45px">
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
              ><i class="fab fa-whatsapp fw-normal"></i
            ></a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
              ><i class="fab fa-facebook-f fw-normal"></i
            ></a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
              ><i class="fab fa-instagram fw-normal"></i
            ></a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
              ><i class="fab fa-twitter fw-normal"></i
            ></a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
              href=""
              ><i class="fab fa-linkedin-in fw-normal"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar & Carousel Start -->
    <div class="container-fluid position-relative p-0">
      <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <Nuxt-Link to="/" class="navbar-brand p-2">
          <img src="assets/azizcargo-white.png" alt="" width="70" />
        </Nuxt-Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <div class="navbar-nav ms-auto py-0">
            <Nuxt-Link to="/" class="nav-item nav-link active"
              >Acceuil</Nuxt-Link
            >
            <Nuxt-Link to="about" class="nav-item nav-link"
              >Qui sommes nous</Nuxt-Link
            >
            <div class="nav-item dropdown">
              <Nuxt-Link
                to="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Cargo-Maritime</Nuxt-Link
              >
              <div class="dropdown-menu m-0">
                <Nuxt-Link to="guangzhou" class="dropdown-item"
                  >Guangzhou</Nuxt-Link
                >
                <Nuxt-Link to="yiwu" class="dropdown-item">Yiwu</Nuxt-Link>
              </div>
            </div>
            <div class="nav-item dropdown">
              <Nuxt-Link
                to="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Air-Cargo</Nuxt-Link
              >
              <div class="dropdown-menu m-0">
                <Nuxt-Link to="/guangzhou" class="dropdown-item"
                  >Guangzhou</Nuxt-Link
                >
                <Nuxt-Link to="/dubai" class="dropdown-item">Dubaï</Nuxt-Link>
                <Nuxt-Link to="/istanbul" class="dropdown-item"
                  >Istanbul</Nuxt-Link
                >
              </div>
            </div>
            <!-- <div class="nav-item dropdown">
                        <Nuxt-Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Destinations</Nuxt-Link>
                        <div class="dropdown-menu m-0">
                            <Nuxt-Link to="/douala" class="dropdown-item">Douala</Nuxt-Link>
                            <Nuxt-Link to="/yaounde" class="dropdown-item">Yaounde</Nuxt-Link>
                            <Nuxt-Link to="/bafoussam" class="dropdown-item">Bafoussam</Nuxt-Link>
                            <Nuxt-Link to="/coton" class="dropdown-item">Cotonou</Nuxt-Link>
                            <Nuxt-Link to="quote" class="dropdown-item">Accra</Nuxt-Link>
                            <Nuxt-Link to="quote" class="dropdown-item">Lome</Nuxt-Link>
                            <Nuxt-Link to="quote" class="dropdown-item">Istanbul</Nuxt-Link>
                            <Nuxt-Link to="quote" class="dropdown-item">Dubaï</Nuxt-Link>
                            <Nuxt-Link to="quote" class="dropdown-item">Accra</Nuxt-Link>
                        </div>
                    </div> -->
            <!-- <Nuxt-Link to="air-cargo" class="nav-item nav-link">Air-Cargo</Nuxt-Link> -->
            <Nuxt-Link to="destination" class="nav-item nav-link"
              >Destinations</Nuxt-Link
            >
            <Nuxt-Link to="gallery" class="nav-item nav-link"
              >Gallerie</Nuxt-Link
            >
            <Nuxt-Link to="contact" class="nav-item nav-link"
              >Contact</Nuxt-Link
            >
          </div>
          <button
            id="track"
            type="button"
            class="btn text-primary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i class="fa fa-search"></i>
          </button>
          <v-tour name="myTour" :steps="steps" :options="options"></v-tour>
          <button
            class="btn btn-primary py-2 px-4 ms-3"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Login
          </button>
        </div>
      </nav>
    </div>
    <!-- Navbar & Carousel End -->

    <!-- Full Screen Search Start -->
    <div id="searchModal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" style="background: rgba(9, 30, 62, 0.7)">
          <div class="modal-header border-0">
            <button
              type="button"
              class="btn bg-white btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="modal-body d-flex align-items-center justify-content-center"
          >
            <div class="input-group form-floating" style="max-width: 600px">
              <input
                id="floatingSearch search-colis"
                v-model="colisId"
                type="text"
                class="form-control bg-transparent border-primary p-3"
                placeholder="Entrez l'ID de votre colis"
              />
              <label for="floatingSearch">Entrez l'ID de votre colis</label>
              <button class="btn btn-primary px-4" @click="goToTrackingPage()">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Full Screen Search End -->
    <!-- Full Screen Search Start -->
    <div id="loginModal" class="modal modal-login fade" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" style="background: rgba(9, 30, 62, 0.7)">
          <div class="modal-header border-0">
            <button
              type="button"
              class="btn bg-white btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="modal-body d-flex align-items-center justify-content-center"
          >
            <div class="input-group" style="max-width: 600px">
              <form action="" style="width: 100%;">
                <div class="form-floating mb-3">
                    <input
                      id="floatingInput"
                      type="email"
                      class="form-control bg-transparent border-primary"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Adresse email</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      id="floatingPassword"
                      type="password"
                      class="form-control bg-transparent border-primary"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Mot de passe</label>
                  </div>
                  <div class="col-auto d-flex">
                  <button type="submit" class="btn btn-primary">Envoyer</button>
                </div>
              </form>
              <!-- <form
                class="col-lg-6 pt-5 wow fadeInUp py-5"
                data-wow-delay="0.1s"
              >
                <div class="col-auto d-flex">
                  <button type="submit" class="btn btn-primary">Envoyer</button>
                </div>
              </form> -->
              <!-- <input
                type="text"
                class="form-control bg-transparent border-primary p-3"
                placeholder="form "
              /> -->
              <!-- <button class="btn btn-primary px-4">
                <i class="bi bi-search"></i>
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Full Screen Search End -->
  </div>
</template>

<script>
export default {
  name: 'MyTour',
  data() {
    return {
      colisId: '',
      steps: [
        {
          target: '#track',
          header: {
            title: 'Trackez votre colis ICI !!',
          },
          content: ' ',
        },
      ],
      options: {
        buttonText: {
          next: 'Next',
          prev: 'Prev',
          last: 'Compris!',
        },
      },
    }
  },
  mounted: function () {
    this.$tours.myTour.start()
    // Spinner
    const $ = window.$
    const spinner = function () {
      setTimeout(function () {
        if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show')
        }
      }, 1)
    }
    spinner()
  },
  methods: {
    goToTrackingPage() {
            // Logique de validation du formulaire
            if (this.colisId === '') {
        alert('Le champ est vide');
        return;
      }
      
      // Navigation vers la nouvelle page
      this.$router.push('tracking');
    }
  },
}
</script>

<style lang="scss">
.text-banner {
  justify-content: left;
  text-align: -webkit-left;
}
.fa-search {
  color: #06a3da;
}

//------------vue-tour------------------

.v-step {
  color: #515a6c !important;
}
.v-step__header {
  background-color: white !important;
}
.v-step__arrow--dark:before {
  background: white !important;
}

// .nav-item:hover {
//   color: #06a3da !important;
// }

.nuxt-link-exact-active {
  color: #06a3da !important;
}
</style>
