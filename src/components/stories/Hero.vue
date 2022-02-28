<template>
  <section class="hero" :class="{ active: active }">
    <div class="hero__img"></div>
    <div class="hero__content">
      <h4>LAST MONTH'S FEATURED STORY</h4>
      <h1>HAZY FULL MOON OF APPALACHIA</h1>
      <div class="hero__story-date">
        <p>March 2nd 2020</p>
        <p>by John Appleseed</p>
      </div>
      <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
      <router-link to="/stories" @mouseover="active = true" @mouseleave="active = false" class="btn-cta btn-cta--white">READ THE STORY <img src="@/assets/images/shared/desktop/arrow-white.svg" alt="right arrow"></router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="sass" scoped>
.hero
  position: relative
  @include media('medium')
    display: flex
    align-items: center
    height: 65rem
  &::before
    @include media('medium')
      background: radial-gradient(ellipse at bottom left, #FFC593 0%, rgba(188,113,152,0.50) 38%, rgba(90,119,255,0.00) 73%)
      content: ''
      position: absolute
      left: 0
      opacity: 0
      transition: $transition
      height: 100%
      width: 50%
  &.active::before
    opacity: .5
  &__img
    background-image: url(~@/assets/images/stories/mobile/moon-of-appalacia.jpg)
    background-repeat: no-repeat
    background-size: cover
    background-position: top center
    height: 31.7rem
    width: 100%
    @include media('medium')
      background-image: url(~@/assets/images/stories/tablet/moon-of-appalacia.jpg)
      height: 100%
    @include media('large')
      background-image: url(~@/assets/images/stories/desktop/moon-of-appalacia.jpg)
  &__story-date
    display: flex
    margin-bottom: 2.4rem
    & p
      font-size: 1.3rem
      &:first-of-type
        opacity: .75
        margin-right: 0.9rem
      &:last-of-type
        opacity: 1
  &__content
    background-color: $col-black
    color: $col-white
    padding: 4.8rem 2.8rem 4.8rem 2.9rem
    @include media('medium')
      background-color: transparent
      padding: 0 3.9rem
      position: absolute
      left: 50%
      transform: translateX(-50%)
      max-width: 128.8rem
      width: 100%
    & h4
      margin-bottom: 1.6rem
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