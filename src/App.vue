<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition @before-enter="scrollToTop" name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    scrollToTop(){
      document.getElementById('app').scrollIntoView()
    }
  }
}
</script>

<style lang="sass">
.fade-enter-active,
.fade-leave-active
  transition: opacity 0.4s ease

.fade-enter-from,
.fade-leave-to
  opacity: 0
</style>
