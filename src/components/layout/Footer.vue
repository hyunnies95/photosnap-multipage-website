<template>
  <footer class="footer">
    <div class="container">
      <router-link to="/"><img class="footer__logo" src="@/assets/images/shared/desktop/logo-footer.svg" alt="logo"></router-link>
      <ul class="footer__social">
        <li><a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener"><div class="icon icon--facebook"></div></a></li>
        <li><a href="https://www.youtube.com/" aria-label="Twitter" target="_blank" rel="noopener"><div class="icon icon--youtube"></div></a></li>
        <li><a href="https://www.twitter.com/" aria-label="YouTube" target="_blank" rel="noopener"><div class="icon icon--twitter"></div></a></li>
        <li><a href="https://www.pinterest.com/" aria-label="Pinterest" target="_blank" rel="noopener"><div class="icon icon--pinterest"></div></a></li>
        <li><a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener"><div class="icon icon--instagram"></div></a></li>
      </ul>
      <ul class="footer__links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/stories">Stories</router-link></li>
        <li><router-link to="/features">Features</router-link></li>
        <li><router-link to="/pricing">Pricing</router-link></li>
      </ul>
      <router-link to="#" class="btn-cta btn-cta--white">GET AN INVITE <img src="@/assets/images/shared/desktop/arrow-white.svg" alt="right arrow"></router-link>
      <p class="footer__copyright">Copyright 2019. All Rights Reserved</p>
    </div>

  </footer>
</template>

<style lang="sass" scoped>
.footer
  background-color: $col-black
  text-align: center
  padding: 5.6rem 0
  height: 53.9rem
  @include media('medium')
    text-align: left
    padding: 6.4rem 0
    height: 28.4rem
  @include media('large')
    height: 25rem
  & .container
    display: grid
    @include media('medium')
      grid-template-columns: 1fr 1fr
      align-items: start
    @include media('large')
      grid-template-columns: 27.9rem 1fr 1fr

  &__logo
    margin-bottom: 3.2rem
    @include media('large')
      margin: 0

  &__social
    display: flex
    justify-content: center
    gap: 1.3rem
    margin-bottom: 4.9rem
    @include media('medium')
      grid-row: 3 / 4
      justify-content: start
      margin: 0
      margin-top: 7.4rem
    @include media('large')
      margin-top: 8.5rem
  &__links
    color: $col-white
    display: flex
    flex-direction: column
    align-items: center
    gap: 1.9rem
    font-size: 1.2rem
    font-weight: bold
    letter-spacing: 2px
    text-transform: uppercase
    margin-bottom: 11.9rem
    @include media('medium')
      flex-direction: row
      margin: 0
    @include media('large')
      grid-column: 2 / 3
      grid-row: 1 / 4
      flex-direction: column
      align-items: start
    & li
      transition: $transition
      &:hover
        opacity: .3

  &__copyright
    color: $col-white
    margin-top: 3.4rem
    @include media('medium')
      grid-row: 3 / 4
      text-align: right
      margin: auto 0 0 auto
  & .btn-cta
    justify-content: center
    @include media('medium')
      grid-column: 2 / 3
      grid-row: 1 / 2
      margin: 0
      margin-left: auto
    @include media('large')
      grid-column: 3 / 4

.icon
  background-repeat: no-repeat
  background-size: contain
  transition: $transition
  height: 2rem
  width: 2rem
  &--facebook
    background-image: url(~@/assets/images/shared/desktop/facebook.svg)
    &:hover
      background-image: url(~@/assets/images/shared/desktop/facebook-hover.svg)
  &--youtube
    background-image: url(~@/assets/images/shared/desktop/youtube.svg)
    &:hover
      background-image: url(~@/assets/images/shared/desktop/youtube-hover.svg)
  &--twitter
    background-image: url(~@/assets/images/shared/desktop/twitter.svg)
    &:hover
      background-image: url(~@/assets/images/shared/desktop/twitter-hover.svg)
  &--pinterest
    background-image: url(~@/assets/images/shared/desktop/pinterest.svg)
    &:hover
      background-image: url(~@/assets/images/shared/desktop/pinterest-hover.svg)
  &--instagram
    background-image: url(~@/assets/images/shared/desktop/instagram.svg)
    &:hover
      background-image: url(~@/assets/images/shared/desktop/instagram-hover.svg)
</style>