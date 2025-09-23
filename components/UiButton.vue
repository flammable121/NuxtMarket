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
      :class="['btn', `btn-${variant}`]"
  >
    <span v-if="$slots.default" class="btn__icon">
      <slot/>
    </span>
    <span v-if="$slots.title" class="btn__title">
      <slot name="title"/>
    </span>
  </component>
</template>

<style scoped lang="scss">
@use "assets/style/mixins";
.btn {
  @include mixins.flex-center;
  gap: 10px;
  min-width: 150px;
  min-height: 40px;
  cursor: pointer;


  &:hover {
    box-shadow: 0 10px 15px map-get($colors, black);
  }
  &:active {
    box-shadow: none;
  }

  &-primary {
    border: 1px solid black;
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  &-gold {
    border: none;
    background-color: map-get($colors, gold);
    color: map-get($colors, white);
    &:active {
      background-color: #CCA88A;
    }
  }
}
</style>