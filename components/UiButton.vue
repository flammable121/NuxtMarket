<script setup lang="ts">
  import { computed } from 'vue'

  export interface  UiButtonProps {
      sizes?: "small" | "big";
  }

  const buttonClasses = computed(() => [
      `btn--${props.sizes}`,
  ])

  const props = withDefaults(defineProps<UiButtonProps>(), {
      sizes: "big",
  })
</script>

<template>
  <component
    :class="buttonClasses"
    class="btn"
  >
    <span v-if="$slots.default" class="btn__icon">
      <slot/>
    </span>
    <span v-if="$slots.secondslot" class="btn__title">
      <slot name="secondslot"/>
    </span>
  </component>
</template>

<style scoped lang="scss">
  .btn {
    margin: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    gap: 10px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 10px 15px map-get($colors, black);
    }
    &:active {
      box-shadow: none;
    }

    $sizes: (
      big: (
          width: 255px,
          height: 50px,
      ),
      small: (
          width: 160px,
          height: 400px,
      )
    );
    @each $size, $config in $sizes {
      &--#{$size} {
        width: map-get($config, width);
        height: map-get($config, height);
      }
    }
  }
</style>