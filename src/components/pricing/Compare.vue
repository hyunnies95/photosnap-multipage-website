<template>
  <section class="compare">
    <div class="container">
      <h1>Compare</h1>
      <div class="table">
        <div class="table__heading">
          <h2>THE FEATURES</h2>
          <div class="hide-for-mobile">
            <h2>BASIC</h2>
            <h2>PRO</h2>
            <h2>BUSINESS</h2>
          </div>
        </div>
        <div class="table__row" v-for="feature in features" :key="feature.id">
          <h2>{{ feature.name }}</h2>

          <div class="table__row-plan">
            <div>
              <span>BASIC</span>
              <img v-show="feature.basic" src="@/assets/images/pricing/desktop/check.svg" alt="check">
            </div>
            <div>
              <span>PRO</span>
              <img v-show="feature.pro" src="@/assets/images/pricing/desktop/check.svg" alt="check">
            </div>
            <div>
              <span>BUSINESS</span>
              <img v-show="feature.business" src="@/assets/images/pricing/desktop/check.svg" alt="check">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        { name: 'Unlimited Story Posting', basic: true, pro: true, business: true },
        { name: 'Unlimited Photo Upload', basic: true, pro: true, business: true },
        { name: 'Embedding Custom Content', basic: false, pro: true, business: true },
        { name: 'Customize Metadata', basic: false, pro: true, business: true },
        { name: 'Advanced Metrics', basic: false, pro: false, business: true },
        { name: 'Photo Downloads', basic: false, pro: false, business: true },
        { name: 'Search Engine Indexing', basic: false, pro: false, business: true },
        { name: 'Custom Analytics', basic: false, pro: false, business: true }
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.compare
  padding-bottom: 6.4rem
  margin: 0 auto
  max-width: 50rem
  @include media('medium')
    padding-bottom: 11.2rem
    max-width: 73.1rem
  @include media('large')
    padding-bottom: 16rem
  & h1
    display: none
    @include media('medium')
      display: block
      text-align: center
      margin-bottom: 6.4rem
    @include media('large')
      margin-bottom: 5.6rem

.table
  &__heading
    display: flex
    border-bottom: 1px solid #000
    padding-bottom: 2.3rem
    @include media('medium')
      display: grid
      grid-template-columns: 1fr 1fr
      padding: 0 2.4rem 2.3rem
  &__row
    border-bottom: 1px solid #DFDFDF
    padding: 2.4rem 0
    @include media('medium')
      display: grid
      grid-template-columns: 1fr 1fr
      padding: 2.4rem
    &-plan
      display: grid
      grid-template-columns: repeat(3, 1fr)
      @include media('medium')
        justify-items: center
      & div
        display: inline-flex
        flex-direction: column
    & span
      font-size: 1rem
      font-weight: bold
      letter-spacing: 1.67px
      margin-bottom: 0.8rem
      opacity: .5
      @include media('medium')
        display: none
    & img
      height: 1.2rem
      width: 1.6rem

h2
  font-size: 1.2rem
  line-height: 1.6rem
  letter-spacing: 2px
  text-transform: uppercase
  margin-bottom: 1.6rem
  @include media('medium')
    margin: 0
    
.hide-for-mobile
  display: none
  @include media('medium')
    display: grid
    grid-template-columns: repeat(3, 1fr)
    justify-items: center
</style>