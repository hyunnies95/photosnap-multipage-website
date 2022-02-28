<template>
  <section class="gallery">
    <Photo v-for="photo in photos" :key="photo.id" :name="photo.name" :img="photo.img" :photographer="photo.photographer"/>
  </section>
</template>

<script>
import Photo from '@/components/layout/Photo.vue'

export default {
  components: { Photo },
  data() {
    return {
      photos: [
        { name: 'The Mountains', img:'mountains', photographer: 'John Appleseed', link: '/stories' },
        { name: 'Sunset Cityscapes', img:'cityscapes', photographer: 'Benjamin Cruz', link: '/stories' },
        { name: '18 Days Voyage', img:'18-days-voyage', photographer: 'Alexei Borodin', link: '/stories' },
        { name: 'Architecturals', img:'architecturals', photographer: 'Samantha Brooke', link: '/stories' },
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.gallery
  display: grid
  @include media('medium')
    grid-template-columns: 1fr 1fr
  @include media('large')
    grid-template-columns: repeat(4, 1fr)

</style>