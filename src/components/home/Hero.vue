<template>
  <section class="hero">
    <div class="hero__img"></div>
    <div class="hero__content">
      <div>
        <h1>Create and share your photo stories.</h1>
        <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
        <router-link to="#" class="btn-cta btn-cta--white">GET AN INVITE <img src="@/assets/images/shared/desktop/arrow-white.svg" alt="right arrow"></router-link>
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
    height: 65rem
  &__img
    background-image: url(~@/assets/images/home/mobile/create-and-share.jpg)
    background-size: cover
    background-position: center
    height: 29.4rem
    width: 100%
    @include media('medium')
      background-image: url(~@/assets/images/home/tablet/create-and-share.jpg)
      height: 100%
      width: 35.547%
    @include media('huge')
      background-image: url(~@/assets/images/home/desktop/create-and-share.jpg)
      width: 57.639%
  &__content
    padding: 7.2rem 2.4rem 7.2rem 3.3rem
    position: relative
    min-height: 41.9rem
    @include media('medium')
      display: flex
      justify-content: center
      padding: 0 4.8rem
      min-height: initial
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