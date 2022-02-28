<template>
  <main class="stories">
    <Hero />
    <Gallery />
  </main>
</template>

<script>
import Hero from '@/components/stories/Hero.vue'
import Gallery from '@/components/stories/Gallery.vue'

export default {
  components: {
    Hero,
    Gallery
  }
}
</script>