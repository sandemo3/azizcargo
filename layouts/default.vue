<template>
    <div>
        <navbar-component/>
        <Nuxt/>
        <footer-component/>
    </div>
</template>

<script>
import FooterComponent from '~/components/FooterComponent.vue'
import NavbarComponent from '~/components/NavbarComponent.vue'
    export default {
  components: { NavbarComponent , FooterComponent},
        
    }
</script>

<style lang="scss" scoped>

</style>