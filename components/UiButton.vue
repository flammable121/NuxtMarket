<script setup lang="ts">
import { computed } from 'vue'

export interface  UiButtonProps {
  to?: string;
  href?: string;
}

const props = withDefaults(defineProps<UiButtonProps>(), {

})

const componentType = computed(() => {
  if (props.to) return 'NuxtLink';
  if (props.href) return 'a';
  return 'button';
})
</script>

<template>
  <component
      :is="componentType"
      :to="to"
      :href="href"
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
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  gap: 10px;
  cursor: pointer;
  width: 255px;
  height: 50px;

  @media (max-width: 870px) {
    width: 160px;
    height: 40px;
    font-size: 12px;
    padding: 5px;
  }

  &:hover {
    box-shadow: 0 10px 15px map-get($colors, black);
  }
  &:active {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>