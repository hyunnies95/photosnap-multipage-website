<template>
  <section class="features container">
    <ul>
      <Feature v-for="feature in features" :key="feature.id" :icon="feature.icon" :title="feature.title" :text="feature.text" />
    </ul>
  </section>
</template>

<script>
import Feature from '@/components/layout/Feature.vue'

export default {
  components: { Feature },
  data() {
    return {
      features: [
        { icon: 'responsive', title: '100% Responsive', text: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.' },
        { icon: 'no-limit', title: 'No Photo Upload Limit', text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.' },
        { icon: 'embed', title: 'Available to Embed', text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ' },
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.features ul
  display: grid
  text-align: center
  justify-items: center
  gap: 5.6rem
  padding-top: 8rem
  padding-bottom: 8rem
  @include media('medium')
    gap: 8rem
    padding-top: 12rem
    padding-bottom: 12rem
  @include media('large')
    grid-template-columns: 1fr 1fr 1fr
    gap: 10.4rem 3rem

</style>