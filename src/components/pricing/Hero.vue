<template>
  <section class="hero">
    <div class="hero__img"></div>
    <div class="hero__content">
      <div>
        <h1>PRICING</h1>
        <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.hero
  background-color: $col-black
  @include media('medium')
    display: flex
    flex-direction: row-reverse
    align-items: center
    height: 49rem
  &__img
    background-image: url(~@/assets/images/pricing/mobile/hero.jpg)
    background-size: cover
    background-position: center
    height: 29.4rem
    width: 100%
    @include media('medium')
      background-image: url(~@/assets/images/pricing/tablet/hero.jpg)
      height: 100%
      width: 35.547%
    @include media('huge')
      background-image: url(~@/assets/images/pricing/desktop/hero.jpg)
      width: 57.639%
  &__content
    padding: 7.2rem 2.8rem 7.2rem 2.9rem
    position: relative
    @include media('medium')
      display: flex
      justify-content: center
      padding: 0 4.8rem
      width: 64.453%
    @include media('huge')
      width: 42.361%
    &::after
      background: $col-accent
      content: ''
      position: absolute
      top: 0
      height: 0.6rem
      width: 12.8rem
      @include media('medium')
        left: 0
        height: 100%
        width: 0.6rem
    & h1
      max-width: 31.8rem
      @include media('medium')
        max-width: 38.7rem
    & h1, p
      color: $col-white
    & p
      @include media('medium')
        max-width: 38.7rem

</style>