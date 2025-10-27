<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <div class="footer__container">
      <UiAccordion class="footer__container--accordion">
        <template #title>
          КОМПАНИЯ
        </template>
        <template #column>
          <NuxtLink to="/"> О наc </NuxtLink>
          <NuxtLink to="/"> Контакты </NuxtLink>
        </template>
      </UiAccordion>
      <UiAccordion class="footer__container--accordion">
        <template #title>
          ПОЛЕЗНОЕ
        </template>
        <template #column>
          <NuxtLink to="/"> Оплата и доставка </NuxtLink>
          <NuxtLink to="/"> Условия возврата </NuxtLink>
          <NuxtLink to="/"> Бонусная система </NuxtLink>
        </template>
      </UiAccordion>
      <UiAccordion class="footer__container--accordion">
        <template #title>
          ПОЛЕЗНОЕ
        </template>
        <template #column>
          <NuxtLink to="/"> Избранное </NuxtLink>
          <NuxtLink to="/"> Публичная оферта </NuxtLink>
          <NuxtLink to="/"> Политика конфиденциальности </NuxtLink>
        </template>
      </UiAccordion>
      <UiAccordion class="footer__container--accordion">
        <template #title>
          КОНТАКТЫ
        </template>
        <template #column>
          <div>
            <NuxtLink> <SvgoInsta/> </NuxtLink>
            <NuxtLink> <SvgoTg/> </NuxtLink>
          </div>
          <NuxtLink to="/"> +38(073) 096 36 44 </NuxtLink>
          <NuxtLink to="/"> info@yanki.com </NuxtLink>
        </template>
      </UiAccordion>
    </div>
    <p class="footer__copyright">©️ 2021 Yanki. All rights reserved</p>
  </div>
</template>

<style scoped lang="scss">
@use "assets/style/mixins";
@use "assets/style/breakpoints";

.footer {
  @include mixins.flex-center;
  flex-direction: column;
  width: 100%;
  &__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    max-width: 1140px;

    @include breakpoints.media(mobile) {
      flex-direction: column;
    }
    &--accordion {
      padding-top: 20px;
    }
  }
  &__copyright {
  }
}
</style>