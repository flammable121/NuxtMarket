<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="header__container">

      <div class="header__left">
        <Svgo-Burger class="header__burger"/>
        <nav class="header__nav">
          <div class="header__nav-link typography--18">NEW</div>
          <div class="header__nav-link typography--18">КАТАЛОГ</div>
          <div class="header__nav-link typography--18">О НАС</div>
        </nav>
      </div>

      <div class="header__center">
        <div class="header__logo">
          <Svgo-Logo class="header__logo-icon"/>
        </div>
      </div>

      <div class="header__right">
        <div class="header__selects">
          <UiSelect class="header__select-selected"/>
          <UiSelect class="header__select-selected"/>
        </div>
        <div class="header__menu">
          <Svgo-Search class="header__menu-icon hidden"/>
          <Svgo-Personalacc class="header__menu-icon hidden"/>
          <Svgo-Favorites class="header__menu-icon"/>
          <Svgo-Cart class="header__menu-icon"/>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  height: 85px;

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 150px;
    transition: 0.2s;

    @media (max-width: 1200px) {
      padding: 0 30px;
      transition: 0.2s;
    }
  }

  &__left {
    width: 33.33%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__burger {
    width: 34px;
    height: 24px;
    color: map-get($colors, gold);
    cursor: pointer;

    @media (max-width: 560px) {
      width: 30px;
      height: 20px;
    }
  }

  &__nav {
    display: flex;
    gap: 25px;

    @media (max-width: 870px) {
      display: none
    }
  }

  &__nav-link {
    cursor: pointer;
  }

  &__center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.33%;
  }

  &__logo {
    &-icon {
      width: 192px;
      height: 40px;
      color: map-get($colors, gold);
      cursor: pointer;
      transition: 0.3s;
      @media (max-width: 560px) {
        width: 79px;
        height: 20px;
      }
    }
  }

  &__right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 33.33%;
  }

  &__selects {
    cursor: pointer;
  }

  &__menu {
    display: flex;
    gap: 30px;
  }

  &__menu-icon {
    width: 25px;
    height: 25px;
    color: map-get($colors, gold);
    cursor: pointer;
    transition: 0.3s;
    &:first-child {
      color: black;
    }
    @media (max-width: 870px) {
      width: 20px;
      height: 20px;
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