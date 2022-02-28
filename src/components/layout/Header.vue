<template>
  <header class="header">
    <nav class="container">
      <router-link to="/"><img class="header__logo" src="@/assets/images/shared/desktop/logo.svg" alt="logo"></router-link>
      <div class="header__btn" @click="openMobileMenu">
        <img v-if="!isOpened" src="@/assets/images/shared/mobile/menu.svg" alt="menu">
        <img v-if="isOpened" src="@/assets/images/shared/mobile/close.svg" alt="menu">
      </div>
      <ul class="header__nav-menu">
        <li><router-link to="/stories">Stories</router-link></li>
        <li><router-link to="/features">Features</router-link></li>
        <li><router-link to="/pricing">Pricing</router-link></li>
      </ul>
      <MobileMenu v-if="isOpened" />
      <router-link to="#" class="header__cta btn">Get an invite</router-link>
    </nav>
  </header>
</template>

<script>
import MobileMenu from '@/components/layout/MobileMenu.vue'

export default {
  components: { MobileMenu },
  data() {
    return {
      isOpened: false
    }
  },
  methods: {
    openMobileMenu() {
      this.isOpened = !this.isOpened
      document.body.classList.toggle('disable-scroll')
    }
  },
  watch: {
    '$route' () {
      this.isOpened = false
      document.body.classList.remove('disable-scroll')
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  height: 7.2rem
  &__nav-menu
    display: none
    @include media('hide-mobile-menu')
      display: flex
      gap: 3.7rem
      font-size: 1.2rem
      font-weight: bold
      letter-spacing: 2px
      text-transform: uppercase
    & li
      transition: $transition
      &:hover
        opacity: .3
  &__cta
    display: none
    @include media('hide-mobile-menu')
      display: flex
  &__btn
    cursor: pointer
    margin-left: auto
    @include media('hide-mobile-menu')
      display: none

.container
  display: flex
  justify-content: space-between
  align-items: center
  height: 100%
  
</style>