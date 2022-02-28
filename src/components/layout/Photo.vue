<template>
  <div class="photo">
    <router-link to="/stories">
      <picture>
        <source :srcset="require('@/assets/images/stories/desktop/' + img + '.jpg')" media="(min-width: 600px)">
        <img class="photo__img" :src="require('@/assets/images/stories/mobile/' + img + '.jpg')" :alt="img">
      </picture>
      <div class="photo__info">
        <h2>{{ name }}</h2>
        <p>by {{ photographer }}</p>
        <router-link to="/stories" class="btn-cta btn-cta--white">READ STORY <img src="@/assets/images/shared/desktop/arrow-white.svg" alt="right arrow"></router-link>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['name', 'img', 'photographer']
}
</script>

<style lang="sass" scoped>
.photo
  position: relative
  transition: $transition transform
  height: 37.5rem
  z-index: 2
  @include media('medium')
    height: 50rem
  &:hover
    transform: translateY(-2.4rem)
    &::after
      width: 100%
  &::after
    background: $col-accent
    content: ''
    position: absolute
    bottom: 0
    left: 0
    transition: 0.2s
    height: 0.6rem
    width: 0%
  & picture
    position: relatives
    &::before
      background: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.66) 100%)
      content: ''
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
  &__img
    object-fit: cover
    height: 100%
    width: 100%
  &__info
    color: $col-white
    position: absolute
    left: 3.3rem
    right: 3.2rem
    bottom: 4rem
  & h2
    font-size: 1.8rem
    line-height: 2.5rem
    margin: 0
  & p
    font-size: 1.3rem
    position: relative
    opacity: 1
    margin-bottom: 1.6rem
    &::after
      background-color: $col-white
      content: ''
      position: absolute
      bottom: -0.9rem
      left: 0
      opacity: .25
      height: 0.1rem
      width: 100%

  & .btn-cta
    pointer-events: none
    margin-top: 2rem
</style>