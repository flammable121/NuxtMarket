<script setup lang="ts">
defineProps({
  label: String
})

</script>

<template>
  <component class="btn">
    <span v-if="$slots.icon" class="btn__icon">
      <slot name="icon"/>
    </span>
    <span class="btn__label">
      {{ label }}
    </span>
  </component>
</template>

<style scoped lang="scss">
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    gap: 10px;
    cursor: pointer;
    padding: 12px 24px;
    max-width: 200px;
    height: auto;

    &:hover {
      box-shadow: 0px 10px 15px map-get($colors, black);
    }
    &:active {
      box-shadow: none;
      background-color: map-get($colors, black);
      z-index: 2;
    }
  }
</style>