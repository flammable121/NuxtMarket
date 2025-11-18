<script setup lang="ts">
import { NuxtLink } from "#components";

export interface  UiButtonProps {
  variant?: 'primary' | 'gold'
  to?: string;
  href?: string;
}

const props = withDefaults(defineProps<UiButtonProps>(), {
  variant: 'gold',
});

const componentType = computed(() => {
  if (props.to) return NuxtLink;
  if (props.href) return 'a';
  return 'button';
})
</script>

<template>
  <component
      :is="componentType"
      :to="to"
      :href="href"
      :class="['btn', `btn--${variant}`]"
  >
    <span v-if="$slots.default" class="btn__icon">
      <slot/>
    </span>
    <span v-if="$slots.title" class="btn__title typography-16">
      <slot name="title"/>
    </span>
  </component>
</template>

<style scoped lang="scss">
@use "assets/style/mixins";
@use "assets/style/typography";
@use "assets/style/breakpoints";

.btn {
  @include mixins.flex-center;
  @extend .typography-16;
  gap: 10px;
  min-width: 150px;
  min-height: 40px;
  cursor: pointer;
  @include breakpoints.media(desktop) {
    padding: 18px 30px;
  }
  @include breakpoints.media(mobile) {
    padding: 12px 20px;
    font-size: 14px;
  }


  &:hover {
    box-shadow: 0 15px 10px map-get($colors, black);
  }
  &:active {
    box-shadow: none;
  }

  &--primary {
    border: 1px solid black;
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  &--gold {
    border: none;
    background-color: map-get($colors, gold);
    color: map-get($colors, white);
    &:active {
      background-color: #CCA88A;
    }
  }
}
</style>