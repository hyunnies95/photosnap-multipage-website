<template>
  <main class="stories">
    <Hero />
    <Pricing />
    <Compare />
    <Cta />
  </main>
</template>

<script>
import Hero from '@/components/pricing/Hero.vue'
import Pricing from '@/components/pricing/Pricing.vue'
import Compare from '@/components/pricing/Compare.vue'
import Cta from '@/components/layout/Cta.vue'

export default {
  components: {
    Hero,
    Pricing,
    Compare,
    Cta
  }
}
</script>