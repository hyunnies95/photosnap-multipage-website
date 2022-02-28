<template>
  <section class="cta">
    <div class="container">
      <h1>We’re in beta. <br> Get your invite today!</h1>
      <router-link to="#" class="btn-cta btn-cta--white">GET AN INVITE <img src="@/assets/images/shared/desktop/arrow-white.svg" alt="right arrow"></router-link>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.cta
  background-image: url(~@/assets/images/shared/mobile/bg-beta.jpg)
  background-repeat: no-repeat
  background-size: cover
  color: $col-white
  position: relative
  min-height: 28.8rem
  @include media('medium')
    background-image: url(~@/assets/images/shared/tablet/bg-beta.jpg)
    min-height: 28rem
  @include media('large')
    background-image: url(~@/assets/images/shared/desktop/bg-beta.jpg)
  &::after
    background: $col-accent
    content: ''
    position: absolute
    top: 0
    left: 3.3rem
    height: 0.6rem
    width: 12.8rem
    @include media('medium')
      left: 0
      height: 100%
      width: 0.6rem
  & h1
    margin-bottom: 2.4rem
    @include media('medium')
      margin: 0
      max-width: 40rem
  & .container
    padding: 6.4rem 3.2rem 6.4rem 3.3rem
    @include media('medium')
      display: flex
      align-items: center
      justify-content: space-between
      padding: 6.8rem 4rem 6.8rem 3.9rem
    & .btn-cta
      margin: 0
    
</style>