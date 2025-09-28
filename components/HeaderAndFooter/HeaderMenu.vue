<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="header__container">

      <div class="header__left">
        <Svgo-Burger class="header__burger"/>
        <nav class="header__nav">
          <NuxtLink to="/"  class="header__nav-link typography--18">NEW</NuxtLink>
          <NuxtLink to="/" class="header__nav-link typography--18">КАТАЛОГ</NuxtLink>
          <NuxtLink to="/" class="header__nav-link typography--18">О НАС</NuxtLink>
        </nav>
      </div>

      <div class="header__center">
        <SvgoLogo class="header__center--logo"/>
      </div>

      <div class="header__right">
        <div class="header__selects">
          <UiSelect class="header__selects--select"/>
          <UiSelect class="header__selects--select"/>
        </div>
        <div class="header__menu">
          <SvgoSearch class="header__menu-icon hidden"/>
          <SvgoPersonalacc class="header__menu-icon hidden"/>
          <SvgoFavorites class="header__menu-icon"/>
          <SvgoCart class="header__menu-icon"/>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/variables/animation";
@use "assets/style/breakpoints";
@use "assets/style/mixins";

.header {
  display: flex;
  width: 100%;

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 24px 20px;
    max-width: 1140px;
  }

  &__left {
    width: 33.333%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__burger {
    width: 34px;
    height: 24px;
    color: map-get($colors, gold);
    cursor: pointer;
    @include animation.transition03;
    @include breakpoints.media(mobile) {
      width: 24px;
      height: 24px;
    }
  }

  &__nav {
    display: flex;
    gap: 25px;

    @include breakpoints.media(mobile) {
      display: none
    }
  }

  &__center {
    @include mixins.flex-center;
    width: 33.333%;
      &--logo {
        width: 192px;
        height: 40px;
        color: map-get($colors, gold);
        cursor: pointer;
        @include animation.transition03
      }
    }

  &__right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 33.333%;
  }

  &__menu {
    display: flex;
    gap: 30px;

    &-icon {
      width: 25px;
      height: 25px;
      color: map-get($colors, gold);
      cursor: pointer;
      transition: 0.3s;

      &:first-child {
        color: black;
      }

      @include breakpoints.media(mobile) {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (max-width: 870px) {
    .hidden {
      transition: 0.3s;
      display: none;
    }
  }
}
</style>