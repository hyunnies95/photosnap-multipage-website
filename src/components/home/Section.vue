<template>
  <section class="section">
    <div class="section__img"></div>
    <div class="section__content">
      <div>
        <h1>BEAUTIFUL STORIES EVERY TIME</h1>
        <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
        <router-link to="/stories" class="btn-cta btn-cta--black">VIEW THE STORIES <img src="@/assets/images/shared/desktop/arrow.svg" alt="right arrow"></router-link>
      </div>
    </div>
  </section>
  <section class="section section--reverse">
    <div class="section__img section__img--reverse"></div>
    <div class="section__content">
      <div>
        <h1>DESIGNED FOR EVERYONE</h1>
        <p>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
        <router-link to="/stories" class="btn-cta btn-cta--black">VIEW THE STORIES <img src="@/assets/images/shared/desktop/arrow.svg" alt="right arrow"></router-link>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.section
  @include media('medium')
    display: flex
    align-items: center
    height: 65rem
    &--reverse
      flex-direction: row-reverse
  &__img
    background-image: url(~@/assets/images/home/mobile/beautiful-stories.jpg)
    background-size: cover
    background-position: center
    height: 29.4rem
    width: 100%
    @include media('medium')
      background-image: url(~@/assets/images/home/tablet/beautiful-stories.jpg)
      height: 100%
      width: 35.547%
    @include media('huge')
      background-image: url(~@/assets/images/home/desktop/beautiful-stories.jpg)
      width: 57.639%
    &--reverse
      background-image: url(~@/assets/images/home/mobile/designed-for-everyone.jpg)
      @include media('medium')
        background-image: url(~@/assets/images/home/tablet/designed-for-everyone.jpg)
      @include media('huge')
        background-image: url(~@/assets/images/home/desktop/designed-for-everyone.jpg)

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
    & h1
      max-width: 31.8rem
      @include media('medium')
        max-width: 38.7rem
    & p
      @include media('medium')
        max-width: 38.7rem
</style>