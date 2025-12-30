<script setup lang="ts">
import footerMenuJson from '~/assets/data/footerMenuJson.json';
import type { FooterData } from '~/assets/types/footer.ts';

const footerMenu = footerMenuJson as FooterData

</script>

<template>
  <div class="footer">
    <div class="footer__container">
      <UiAccordion
          v-for="(col, index) in footerMenu.footer.columns"
          :key="index"
          :to="col.items"
          class="footer__container--accordion"
      >
        <template #title>
          {{ col.title }}
        </template>

        <template #column>
          <div v-for="(items, i) in col.items" :key="i">
            <div class="icon" v-if="items.type === 'social'">
              <a
                  v-for="icon in items.icons"
                  :key="icon.name"
                  :href="icon.url"
              >
                <img :src="icon.icon" :alt="icon.name" class="icon" />
              </a>
            </div>
            <a  v-else-if="items.link" :href="items.link">
              {{ items.text }}
            </a>
          </div>
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
      .icon {
        display: flex;
      }
    }
  }
  &__copyright {
    margin: 30px;
  }
}
</style>