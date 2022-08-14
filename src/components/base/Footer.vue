<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer__block">
        <div class="block-list">
          <ul class="point">
            <p>{{ title_sellpoint }}</p>
            <li class="point-link">
              <a :href="$router.resolve({ name: 'about-us' }).href">{{
                $t("text_about_us")
              }}</a>
            </li>
            <!-- <li class="point-link">
              <a :href="$router.resolve({ name: 'news' }).href">{{ $t("news") }}</a>
            </li> -->
            <li class="point-link">
              <a :href="$router.resolve({ name: 'personal' }).href">{{
                $t("title_personal_data")
              }}</a>
            </li>
            <!-- <li class="point-link">
              <a href="/vacancy">{{ $t("vacancy") }}</a>
            </li> -->
            <!-- <li class="point-link">
              <a href="/mapsCite">{{ $t("citeMaps") }}</a>
            </li> -->
          </ul>
          <ul class="point">
            <p>{{ $t("title_call") }}</p>
            <li>
              <span>09:00 - 18:00<br />{{ $t("weekends") }}</span>
            </li>
            <li class="tel"><a href="tel:0 800 216 317">0 800 216 317</a></li>
            <li class="small-text">
              <p>{{ $t("free_from") }}</p>
            </li>
            <!-- <li class="small-text small-text-1">
              <p>{{ $t("call") }}</p>
            </li> -->
          </ul>
          <ul class="items">
            <p class="items_title">{{ $t("title_item") }}</p>
            <li class="items_1">
              <div class="logo">
                <img src="@/assets/images/Sellpoint_logo_Pin.png" alt="logo" />
              </div>
              <div class="text">
                <p>{{ $t("street") }}</p>
                <p class="small-text">
                  {{ $t("service_center") }}
                </p>
                <p class="small-text">
                  {{ $t("date_week") }}
                </p>
              </div>
            </li>
          </ul>
          <ul class="call">
            <p>{{ $t("title_connect") }}</p>
            <li class="social-icon">
              <!-- <router-link to="" tag="a"
                ><i class="fab fa-twitter" id="twitter"></i
              ></router-link> -->
              <router-link to="" tag="a"
                ><i class="fab fa-facebook-square" id="facebook"></i
              ></router-link>
              <a href="https://www.instagram.com/sellpoint.com.ua/"
                ><i class="fab fa-instagram" id="instagram"></i
              ></a>
              <!-- <router-link to="" tag="a"
                ><i class="fab fa-viber" id="viber"></i
              ></router-link>
              <router-link to="" tag="a"
                ><i class="fab fa-telegram" id="telegram"></i
              ></router-link> -->
            </li>
            <!-- <li class="card-bank">
              <router-link
                v-for="paySystem in paySystems"
                :key="paySystem.alt"
                tag="a"
                to=""
              >
                <img :src="paySystem.url" :alt="paySystem.alt" />
              </router-link>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="author">
        <p>&#169; {{ $t("online_store") }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      title_sellpoint: "SELLPOINT",
      paySystems: [
        { url: require("@/assets/images/VISA.svg"), alt: "visa" },
        { url: require("@/assets/images/MasterCard.svg"), alt: "MasterCard" },
        { url: require("@/assets/images/Privat24.svg"), alt: "privat24" },
        { url: require("@/assets/images/ApplePay.svg"), alt: "ApplePay" },
        { url: require("@/assets/images/GooglePay.svg"), alt: "GooglePay" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: $black;
  color: $white;
  padding-top: 70px;
  padding-bottom: 30px;
  a {
    color: $white;
    text-decoration: none;
  }
  &__block {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $active-dots;
    padding-bottom: 30px;
    .block-list {
      width: 100%;
      justify-content: space-between;
      display: flex;
      flex-wrap: wrap;
      .point {
        margin: 0 20px 20px 0;
        p {
          text-transform: uppercase;
          font-size: 18px;
          font-weight: 900;
        }
        .point-link {
          margin: 5px 0;
          a {
            font-size: 14px;
          }
        }
        .tel span {
          font-size: 18px;
          font-weight: 900;
        }
        .small-text p {
          text-transform: inherit;
          font-size: 12px;
          letter-spacing: 0.1em;
          font-weight: 400;
        }
        .small-text-1 p {
          font-size: 12px;
        }
      }
      .call {
        p {
          text-transform: uppercase;
          font-size: 18px;
          font-weight: 900;
        }
        .social-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          // .card-bank {
          //   display: flex;
          //   align-items: center;
          //   margin-top: 20px;
          //   flex-wrap: wrap;
          //   a {
          //     margin: 0 0 10px 15px;
          //     &:nth-child(1) {
          //       margin-left: 0;
          //     }
          //   }
          // }
          #twitter,
          #facebook,
          #instagram,
          #viber,
          #telegram {
            font-size: 1.8em;
            background-color: #18191f;
            color: #fff;
            box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
              2px 2px 10px #00000080, 2px 2px 3px #00000080,
              inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
              inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080;
            border-radius: 29px;
            padding: 11px 19px;
            animation: animate 3s linear infinite;
            text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
              0 0 200px #0072ff;
          }
          #twitter {
            animation-delay: 0.3s;
          }
          #facebook {
            animation-delay: 0.7s;
          }
          #instagram {
            animation-delay: 0.4s;
          }
          #viber {
            animation-delay: 0.1s;
          }
          #telegram {
            animation-delay: 0.5s;
          }

          @keyframes animate {
            from {
              filter: hue-rotate(0deg);
            }
            to {
              filter: hue-rotate(360deg);
            }
          }
        }
      }
      .items {
        .text {
          margin-left: 10px;
          .small-text {
            font-size: 12px;
            letter-spacing: 0.1em;
          }
        }
        &_title {
          text-transform: uppercase;
          font-size: 18px;
          font-weight: 900;
          margin-left: 20px;
        }
        &_1 {
          display: flex;
          margin-bottom: 30px;
          .logo svg {
            .fil1 {
              fill: white;
            }
            .fil0 {
              fill: url(#id0);
            }
          }
        }
      }
    }
  }
  .author {
    margin-top: 30px;
    p {
      text-align: center;
    }
  }
}
</style>
