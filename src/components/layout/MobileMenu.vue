<template>
  <div class="overlay"></div>
  <nav>
    <ul class="header__nav-menu">
      <li><router-link to="/stories">Stories</router-link></li>
      <li><router-link to="/features">Features</router-link></li>
      <li><router-link to="/pricing">Pricing</router-link></li>
    </ul>
    <div class="divider"></div>
    <router-link to="/pricing" class="header__cta btn">Get an invite</router-link>
  </nav>
</template>

<style lang="sass" scoped>
.header
  & nav
    background-color: $col-white
    text-align: center
    position: absolute
    top: 7.2rem
    left: 0
    padding: 3.2rem
    width: 100%
    z-index: 10
    @include media('hide-mobile-menu')
      display: none
    & ul li
      font-size: 1.5rem
      font-weight: bold
      text-transform: uppercase
      letter-spacing: 2.5px
      &:not(:last-of-type)
        margin-bottom: 2rem
  &__cta
    width: 100%

.overlay
  background-color: $col-black
  opacity: .5
  position: fixed
  top: 7.2rem
  right: 0
  bottom: 0
  left: 0
  z-index: 1
  @include media('hide-mobile-menu')
    display: none
    
.divider
  background-color: $col-grey
  margin: 2rem 0
  height: 0.1rem
  width: 100%
  @include media('hide-mobile-menu')
    display: none

</style>