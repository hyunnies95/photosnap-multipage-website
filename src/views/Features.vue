<template>
  <main class="features">
    <Hero />
    <Features />
    <Cta />
  </main>
</template>

<script>
import Hero from '@/components/features/Hero.vue'
import Features from '@/components/features/Features.vue'
import Cta from '@/components/layout/Cta.vue'

export default {
  components: {
    Hero,
    Features,
    Cta
  }
}
</script>