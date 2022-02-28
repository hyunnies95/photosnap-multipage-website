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
        { img: 'mountains', date: 'April 16th 2020', name: 'The Mountains', photographer: 'John Appleseed' },
        { img: 'cityscapes', date: 'April 14th 2020', name: 'Sunset Cityscapes', photographer: 'Benjamin Cruz' },
        { img: '18-days-voyage', date: 'April 11th 2020', name: '18 Days Voyage', photographer: 'Alexei Borodin' },
        { img: 'architecturals', date: 'April 9th 2020', name: 'Architecturals', photographer: 'Samantha Brooke' },
        { img: 'world-tour', date: 'April 7th 2020', name: 'World Tour 2019', photographer: 'Timothy Wagner' },
        { img: 'unforeseen-corners', date: 'April 3rd 2020', name: 'Unforeseen Corners', photographer: 'William Malcolm' },
        { img: 'king-on-africa', date: 'March 29th 2020', name: 'King on Africa: Part II', photographer: 'Tim Hillenburg' },
        { img: 'trip-to-nowhere', date: 'March 21st 2020', name: 'The Trip to Nowhere', photographer: 'Felicia Rourke' },
        { img: 'rage-of-the-sea', date: 'March 19th 2020', name: 'Rage of The Sea', photographer: 'Mohammed Abdul' },
        { img: 'running-free', date: 'March 16th 2020', name: 'Running Free', photographer: 'Michelle' },
        { img: 'behind-the-waves', date: 'March 11th 2020', name: 'Behind the Waves', photographer: 'Lamarr Wilson' },
        { img: 'calm-waters', date: 'March 9th 2020', name: 'Calm Waters', photographer: 'Samantha Brooke' },
        { img: 'milky-way', date: 'March 5th 2020', name: 'The Milky Way', photographer: 'Benjamin Cruz' },
        { img: 'dark-forest', date: 'March 4th 2020', name: 'Night at The Dark Forest', photographer: 'Mohammed Abdul' },
        { img: 'somwarpet', date: 'March 1st 2020', name: 'Somwarpet’s Beauty', photographer: 'Michelle' },
        { img: 'land-of-dreams', date: 'February 25th 2020', name: 'Land of Dreams', photographer: 'William Malcolm '}
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