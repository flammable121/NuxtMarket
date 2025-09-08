<script setup>
import { ref } from "vue";
import arrow from '@/assets/icons/arrow.svg'

const selectedCurrency = ref("UAH")
const isDropdownOpen = ref(false)

const currencies = ref(['UAH', 'USD', 'EUR'])

const toggleDropDown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectCurrency = (currency) => {
  selectedCurrency.value = currency;
  isDropdownOpen.value = false
}

</script>

<template>
  <div class="select typography--18">
    <div class="select__currency" @click="toggleDropDown">
      <span class="select__name">{{selectedCurrency}}</span>
      <arrow
          :class="isDropdownOpen"
          class="select__arrow"
      />
    </div>
    <div v-if="isDropdownOpen" class="select__ul">
      <ul class="select__list">
        <li
            v-for="currency in currencies"
            :key="currency"
            :class="['select__list--item', { selected: selectedCurrency === currency }]"
            @click="selectCurrency(currency)"
        >
          {{currency}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select {
  width: 62px;
  & .select__currency {
    display: flex;
    justify-content: space-between;

    & .select__arrow {
      transform: rotate(180deg);
    }

  }
  & .select__ul {
    display: flex;
    justify-content: center;

    & .select__list {

      & .select__list--item{
        border-bottom: 1px solid map-get($colors, gold);

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>