<template>
  <div>
    <div class="personal-order-block personal_border list-del">
      <!-- created_at -->
      <div class="personal-order__time">
        <p class="personal-order__time_date date-ml">
          {{ $t("cabinet.reviews.review") }}
        </p>
        <p class="personal-order__time_time">
          {{ overwiev_data_item.created_at }}
        </p>
        <!-- <p class="personal-order__time_time">в дорозі</p> -->
      </div>

      <!-- ratting -->
      <div class="personal-order__time">
        <p class="personal-order__time_date date-ml">
          {{ $t("cabinet.reviews.ratting") }}
        </p>
        <p class="personal-order__time_time">
          {{ overwiev_data_item.rating }}
        </p>
      </div>

      <!-- product -->
      <div class="personal-order__list">
        <div class="personal-order__list_item">
          <div class="personal-order__list_item_img">
            <p class="title date-ml">
              {{ overwiev_data_item.product }}
            </p>
          </div>
        </div>
      </div>

      <!-- text comment-->
      <div class="personal-order__more-text moreOpen">
        <p>{{ overwiev_data_item.text }}</p>
        <p class="plus">
          <b>{{ $t("cabinet.reviews.plus") }} </b><br />{{
            overwiev_data_item.plus
          }}
        </p>
        <p class="plus">
          <b>{{ $t("cabinet.reviews.minus") }} </b><br />{{
            overwiev_data_item.minus
          }}
        </p>
      </div>

      <!-- answer comment -->
      <div class="personal-order__answer">
        <p
          class="answer"
          v-for="(item, index) in overwiev_data_item.children"
          :key="index"
        >
          <b>{{ $t("cabinet.reviews.answer") }} </b><br />{{ item.text }}
        </p>
      </div>
    </div>

    <!-- <div class="personal-order-block personal_border">
      <div class="personal-order__time">
        <p class="personal-order__time_date date-ml">Звернення</p>
        <p class="personal-order__time_time">19:23</p>
        <p class="personal-order__time_made">
          <i class="far fa-check-circle"></i> виконано
        </p>
      </div>
      <div class="personal-order__list">
        <div class="personal-order__list_item">
          <div class="personal-order__list_item_img">
            <p class="title-black">Скасування замовлення службою доставки</p>
          </div>
          <div class="personal-order__list_item_price">
            <p class="show-more">Показати<i class="fas fa-chevron-down"></i></p>
            <p class="remove-edit number-cod">№ 42836</p>
          </div>
        </div>
      </div>
      <div class="personal-order__more-text moreOpen">
        <p>
          <b>Василій Константинопольський</b> 24 жовтня 2020<br />
          Куди звертатись, якщо посилка на Укрпошті пропала? Причому посилка
          немаленька і недешева — телевізор LG, акустична система Sonos і
          Смарт-годинник Amazfit. У вас на сайті написано, що 25 числа її
          відправили в моє відділення, моя мама була на пошті, питала, а там
          кажуть, що доставку скасовано. Як правило, вже на другий день посилки
          приходять. Пробую дзвонити у відділення, де вона була зареєстрована
          востаннє, то додзвонитись не можу, то кудись мене відфутболюють.
          Порадьте, що робити?
        </p>
        <p>
          <b>Служба підтримки клієнтів Sellpoint</b> 25 жовтня 2020<br />
          Шановний Василій, дуже прикро, що вам довелося стикнутися з такою
          проблемою. Ми звернулися до відділення Укрпошти, з якого мало бути
          виконане відправлення і виявилося, що посилка у них, але співробітники
          відділення не відправили її через брак упаковочного матеріалу великого
          формату. Ми скасували замовлення в Укрпошті та перенаправили посилку
          через кур’єрську доставку Нової Пошти. В якості компенсації за
          спричинені незручності наш магазин покриває вартість доставки.
        </p>
        <p>
          <b>Василій Константинопольський</b> 26 жовтня 2020<br />
          Дуже вам дякую за вирішення цього питання! Посилку отримано!
        </p>
        <p>
          <b>Служба підтримки клієнтів Sellpoint</b> 26 жовтня 2020<br />
          Дякуємо вам за звернення!
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "overwiev-user",
  props: {
    overwiev_data_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      src: require("@/assets/images/pointer.png"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
