<script setup lang="ts">
import { computed, ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const isOpen = ref(false);
const isDesktop = computed(() => width.value >= 870);
const isContentVisible = computed(() => isDesktop.value || isOpen.value);

function toggleColumn() {
  if (isDesktop.value) {
    return;
  }

  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="accordion">
    <div class="accordion__title typography--20" @click="toggleColumn">
      <div class="accordion__title-content">
        <slot name="title" />
      </div>
      <SvgoArrow
        class="accordion__title-icon"
        :class="{ 'accordion__title-icon--rotated': isOpen }"
      />
    </div>
    <div v-if="isContentVisible" class="accordion__column typography--16">
      <slot name="column" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/style/breakpoints";
@use "assets/variables/animation";

.accordion {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include breakpoints.media(mobile) {
    max-width: 300px;
    width: 100%;
    border-bottom: 1px solid black;
    margin: 0 auto;
    align-items: center;
    gap: 10px;
  }

  &__title {
    position: relative;
    display: flex;
    gap: 16px;
    width: 100%;

    @include breakpoints.media(mobile) {
      justify-content: center;
      cursor: pointer;
    }

    @include breakpoints.media(desktop) {
      cursor: default;
    }

    &-content {
      flex: 1 1 auto;

      @include breakpoints.media(mobile) {
        text-align: center;
      }
    }

    &-icon {
      color: map-get($colors, gold);
      @include animation.transition03;
      position: absolute;

      @include breakpoints.media(desktop) {
        display: none;

      }

      &--rotated {
        transform: rotate(180deg);
      }
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include breakpoints.media(mobile) {
      gap: 5px;
      align-items: center;

      &:last-child {
        padding-bottom: 5px;
      }
    }
  }
}
</style>