<script setup>
import favorites from "./assets/icons/favorites.svg";
</script>

<template>
  <button class="btn">
    <favorites class="btn__icon"/>
    <span class="btn__text typography--16">В ИЗБРАННОЕ</span>
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 30px;
  width: 200px;
  border: 1px solid #252525;
  & .btn__icon {
    color: map-get($colors, gold);
  }
  &:hover {
    transition: 0.1s;
    box-shadow: 0px 10px 12px #f5f5f5;
  }
  &:active {
    box-shadow: none;
    background-color: map-get($colors, black);
  }
}
</style>