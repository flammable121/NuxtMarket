<script setup lang="ts">
  import { onMounted } from "vue";

  const columnInfo = reactive({
    company: false,
    useful: false,
    buyer: false,
    contacts: false
  })

  type ColumnKey = keyof typeof columnInfo

  const toggleColumnInfo = (menu: ColumnKey) => {
    columnInfo[menu] = !columnInfo[menu];
  }

  const windowWidth = ref(window ? window.innerWidth : 0);

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  }

  onMounted( () => {
    window.addEventListener('resize', handleResize);
  })
</script>

<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__column company">
        <h3 @click="toggleColumnInfo('company')" class="footer__column-title title typography--20">КОМПАНИЯ <Svgo-Arrow class="arrowToggle"/></h3>
        <div v-if="columnInfo.company || windowWidth > 870" class="footer__column-text column">
          <p class="footer__column-text text typography--16">О нас</p>
          <p class="footer__column-text text typography--16">Контакты</p>
        </div>
        </div>

      <div class="footer__column useful">
        <h3 @click="toggleColumnInfo('useful')" class="footer__column-title title typography--20">ПОЛЕЗНОЕ <Svgo-Arrow class="arrowToggle"/></h3>
        <div v-if="columnInfo.useful || windowWidth > 870" class="footer__column-text column">
          <p class="footer__column-text text typography--16">Оплата и доставка</p>
          <p class="footer__column-text text typography--16">Условия возврата</p>
          <p class="footer__column-text text typography--16">Бонусная система</p>
        </div>
      </div>

      <div class="footer__column buyer">
        <h3 @click="toggleColumnInfo('buyer')" class="footer__column-title title typography--20">ПОКУПАТЕЛЮ <Svgo-Arrow class="arrowToggle"/></h3>
        <div v-if="columnInfo.buyer || windowWidth > 870" class="footer__column-text">
          <p class="footer__column-text text typography--16">Избранное</p>
          <p class="footer__column-text text typography--16">Публичная оферта</p>
          <p class="footer__column-text text typography--16">Политика конфиденциальности</p>
        </div>
      </div>

      <div class="footer__column contacts">
        <h3 @click="toggleColumnInfo('contacts')" class="footer__column-title title typography--20">КОНТАКТЫ <Svgo-Arrow class="arrowToggle"  /></h3>
        <div v-if="columnInfo.contacts || windowWidth > 870" class="footer__column-text">
          <div class="footer__column-text text">
            <Svgo-Insta class="icon"/>
            <Svgo-Tg class="icon"/>
          </div>
          <p class="footer__column-text text typography--16">+38(073) 096 36 44</p>
          <p class="footer__column-text text typography--16">info@yanki.com</p>
        </div>
      </div>
    </div>
    <p class="footer__copyright typography--12">©️ 2021 Yanki. All rights reserved</p>
  </div>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;

  &__container {
    display: flex;
    justify-content: space-between;
    padding: 0 150px;
    transition: 0.3s;

    @media (max-width: 1200px) {
      padding: 0 30px;
      transition: 0.3s;
    }
    @media (max-width: 870px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 100%;
    @media (max-width: 870px) {
      border-bottom: solid black 1px;
      min-width: 320px;
      &:last-child {
        border-bottom: none;
      }
    }

    &-text {
      @media (max-width: 870px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &.text {
        margin-bottom: 10px;
      }
    }
  }
  &__copyright {
    text-align: center;
    padding: 50px 0 10px 0
  }
}
.title {
  width: 100%;
  margin-bottom: 0;

  @media (max-width: 870px) {
    display: flex;
    justify-content: center;

  }
}
.icon {
  width: 16px;
  height: 16px;
  color: map-get($colors, gold);
}
.arrowToggle {
  display: none;
  @media (max-width: 870px) {
    display: block;
  }
}
</style>