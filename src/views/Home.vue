<template>
  <main class="home">
    <Hero />
    <Section />
    <Gallery />
    <Features />
  </main>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import Section from '@/components/home/Section.vue'
import Gallery from '@/components/home/Gallery.vue'
import Features from '@/components/home/Features.vue'


export default {
  components: {
    Hero,
    Section,
    Gallery,
    Features
  }
}
</script>
