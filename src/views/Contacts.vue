<template name="contacts">
  <div>
    <Header-New />
    <section class="contact">
      <div class="wrap">
        <div class="contacts">
          <!-- info -->
          <div class="info">
            <div class="info__title">
              <h5 class="title">{{ $t("contact_page.title") }}</h5>
            </div>
            <div class="info__block-time">
              <div class="info__block-time_consult">
                <p>
                  <b>{{ $t("contact_page.title_1") }}</b>
                </p>
                <a class="phone" href="tel:0 800 216 317"
                  ><b>0 800 216 317</b></a
                >
                <p>
                  {{ $t("contact_page.call_1") }}<br />
                  {{ $t("contact_page.call_2") }}
                </p>
              </div>
              <div class="info__block-time_consult">
                <p>
                  <b>{{ $t("contact_page.title_2") }}</b>
                </p>
                <p class="phone"><b>09:00–18:00</b></p>
                <p>
                  {{ $t("contact_page.weekend") }}<br />
                  <span>office@sellpoint.com.ua</span>
                </p>
              </div>
            </div>
            <div class="info__block-point">
              <p>
                <b>{{ $t("contact_page.title_3") }}</b>
              </p>
              <p class="street">{{ $t("contact_page.street") }}</p>
              <p class="phone">09:00–18:00</p>
              <p>{{ $t("contact_page.weekend") }}</p>
            </div>
          </div>
          <!-- end info -->
          <!-- map -->
          <div class="map">
            <l-map class="map-block" :zoom="zoom" :center="center">
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              ></l-tile-layer>
              <l-marker :lat-lng="markerLatLng"></l-marker>
            </l-map>
          </div>
          <!-- end map -->
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import HeaderNew from "@/components/base/HeaderNew";
import Footer from "@/components/base/Footer";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  name: "contacts",
  metaInfo() {
    return {
      title: this.$t("text_contact"),
    };
  },
  components: {
    HeaderNew,
    Footer,
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "Iнтернет-магазин SellPoint",
      zoom: 20,
      center: [50.43017, 30.51645],
      markerLatLng: [50.43017, 30.51645],
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  .contacts {
    display: flex;
    justify-content: space-between;
    padding: 40px 0 55px 0;
    align-items: center;
    .info {
      width: 40%;
      .phone {
        font-weight: 600;
        font-size: 26px;
        margin: 16px 0;
        color: $black;
        text-decoration: none;
      }
      &__title {
        margin-bottom: 25px;
        .title {
          font-weight: 600;
          font-size: 26px;
        }
      }
      &__block-time {
        display: flex;
        justify-content: space-between;
        &_consult {
          p {
            line-height: 1.6em;
            span {
              color: $bg-blue;
            }
          }
        }
      }
      &__block-point {
        margin-top: 60px;
        .street {
          font-weight: 600;
          font-size: 18px;
          margin: 16px 0;
        }
      }
    }
    .map {
      width: 50%;
      height: 100%;
      .map-block {
        height: 300px;
      }
    }
  }
}
</style>
