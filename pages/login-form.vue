<template>
  <div>
    <div class="container-fluid py-5">
        <div class="row g-5 justify-content-center py-5">
          <form class="col-lg-6 pt-5  wow fadeInUp py-5" data-wow-delay="0.1s">
              <div class="form-floating mb-3">
                <input
                  id="floatingInput"
                  type="email"
                  class="form-control"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Adresse email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  id="floatingPassword"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
                <label for="floatingPassword">Mot de passe</label>
              </div>
              <div class="col-auto d-flex">
                <button type="submit" class="btn btn-primary">
                  Envoyer
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.mx-auto{
  height: 100vh;
    background: #091e3e;
    z-index: -1;
}
.nuxt-link-exact-active {
    color: white !important;
}
</style>
