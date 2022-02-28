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
        { icon: 'custom-domain', title: 'Custom Domain', text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!' },
        { icon: 'boost-exposure', title: 'Boost Your Exposure', text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.' },
        { icon: 'drag-drop', title: 'Drag & Drop Image', text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.' },
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
  padding-top: 6.4rem
  padding-bottom: 6.4rem
  @include media('medium')
    grid-template-columns: 1fr 1fr
    gap: 7.2rem 1.1rem
    padding-top: 11.2rem
    padding-bottom: 11.2rem
  @include media('large')
    grid-template-columns: 1fr 1fr 1fr
    gap: 10.4rem 3rem
    padding-top: 16rem
    padding-bottom: 16rem
    

</style>