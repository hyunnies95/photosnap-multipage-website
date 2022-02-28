<template>
  <section class="pricing container">
    <div class="switcher">
      <span>Monthly</span>
      <div @click="yearly = !yearly" class="switcher__toggle" :class="{ active: yearly }"></div>
      <span>Yearly</span>
    </div>

    <ul class="options">
      <li class="option">
        <div class="option__details">
          <h2>Basic</h2>
          <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
        </div>
        <div class="option__price">
          <span>{{ yearly ? '$190.00' : '$19.00'}}</span>
          <p>per {{ yearly ? 'year' : 'month'}}</p>
        </div>
        <router-link to="#" class="btn">Pick Plan</router-link>
      </li>

      <li class="option option--pro">
        <div class="option__details">
          <h2>Pro</h2>
          <p>More advanced features available. Recommended for photography veterans and professionals.</p>
        </div>
        <div class="option__price">
          <span>{{ yearly ? '$390.00' : '$39.00'}}</span>
          <p>per {{ yearly ? 'year' : 'month'}}</p>
        </div>
        <router-link to="#" class="btn btn--white">Pick Plan</router-link>
      </li>

      <li class="option">
        <div class="option__details">
          <h2>Business</h2>
          <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
        </div>
        <div class="option__price">
          <span>{{ yearly ? '$990.00' : '$99.00'}}</span>
          <p>per {{ yearly ? 'year' : 'month'}}</p>
        </div>
        <router-link to="#" class="btn">Pick Plan</router-link>
      </li>

    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      yearly: false
    }
  },
}
</script>

<style lang="sass" scoped>
.pricing
  display: flex
  flex-direction: column
  align-items: center
  padding: 6.4rem 2.8rem 6.4rem 2.9rem
  @include media('medium')
    padding: 11.2rem 4rem 11.2rem 3.9rem
  @include media('large')
    padding: 12rem 4rem 16rem 3.9rem

.switcher
  display: inline-flex
  align-items: center
  margin-bottom: 4rem
  @include media('large')
    margin-bottom: 4.8rem
  &__toggle
    background-color: $col-grey
    border-radius: 1.6rem
    cursor: pointer
    margin: 0 3.2rem
    position: relative
    transition: $transition
    height: 3.2rem
    width: 6.4rem
    &::after
      background-color: $col-black
      border-radius: 50%
      content: ''
      position: absolute
      left: 0.4rem
      top: 50%
      transform: translateY(-50%)
      transition: $transition
      height: 2.4rem
      width: 2.4rem
    &.active
      background-color: $col-black
      &::after
        background-color: $col-white
        left: initial
        right: 0.4rem
      
  & span
    font-size: 1.8rem
    font-weight: bold

.options
  @include media('large')
    display: flex
    align-items: center
  & .option
    background-color: #F5F5F5
    display: grid
    text-align: center
    padding: 5.6rem 3.6rem 4rem 3.7rem
    @include media('medium')
      grid-template-columns: 1.3fr 1fr
      gap: 3.2rem
      text-align: left
      padding: 4rem 4.8rem 4rem 4rem
    @include media('large')
      grid-template-columns: 1fr
      gap: 0
      text-align: center
      align-items: center
      padding: 5.6rem 4rem 4rem
      height: 40.7rem
    &--pro
      background-color: $col-black
      color: $col-white
      position: relative
      margin: 2.4rem 0
      @include media('large')
        padding: 8.8rem 4rem 7.1rem
        margin: 0 3rem
        height: 47rem
      &::after
        content: ''
        background: $col-accent
        position: absolute
        left: 0
        top: 0
        height: 0.6rem
        width: 100%
        z-index: 9
    &__details
      @include media('medium')
        max-width: 27rem
    &__price
      margin: 4rem 0
      @include media('medium')
        text-align: right
        margin: 0 0 0 auto
      @include media('large')
        text-align: center
        margin: 4rem 0
      & span
        font-size: 4rem
        font-weight: bold
        letter-spacing: 4.17px
    & .btn
      width: 100%
      @include media('medium')
        max-width: 27rem
</style>