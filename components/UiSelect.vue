<script setup lang="ts">
  import { ref } from 'vue';

  const dropDown = ref(false);

  const toggleDropDown = () => {
    dropDown.value = !dropDown.value
  };
</script>

<template>
 <component class="ui-select">
   <div
       v-if="$slots.default"
       class="ui-select__selected"
       @click="toggleDropDown"
   >
     <span class="ui-select__selected__value"> </span>
     <slot name="default"/> <svgo-arrow :class="{ rotated: dropDown }"/>
   </div>
   <div class="ui-select__list" v-show="dropDown">
     <slot name="items"/>
   </div>
 </component>
</template>

<style scoped lang="scss">
.ui-select {
  &__selected {
    &__value {
    }
  }
  &__list {
    &--item {
    }
  }
}
</style>