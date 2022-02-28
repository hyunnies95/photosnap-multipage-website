<template>
  <li class="feature">
    <div class="feature__icon">
      <img :src="require('@/assets/images/features/desktop/' + icon + '.svg')" :alt="icon">
    </div>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </li>
</template>

<script>
export default {
  props: ['icon', 'title', 'text']
}
</script>

<style lang="sass" scoped>
.feature
  max-width: 31rem
  @include media('medium')
    max-width: 45.7rem
  @include media('large')
    max-width: 35rem
  & h2
    font-size: 1.8rem
    line-height: 2.5rem
    margin-bottom: 1.6rem
  &__icon
    margin-bottom: 4.8rem
    @include media('medium')
      display: flex
      justify-content: center
      align-items: center
      margin-bottom: 3.3rem
      height: 9.1rem
    @include media('large')
      margin-bottom: 4.8rem
</style>