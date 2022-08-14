<template name="products">
  <div>
    <Header v-on:event="showSidebar" />

    <Notification :messages="messages" :timeout="4000" />

    <!-- modal login -->
    <div class="modal-content-form" v-if="showModalForm">
      <AuthForm @showModalForm="showModalForm = false" />
    </div>
    <!-- end modal login -->

    <section class="sidebar-banner">
      <div class="wrap">
        <div class="sidebar-banner__block sidebar-banner__block-absol">
          <Sidebar
            v-if="sidebarDropdown"
            :sidebar_data="SIDEBARS"
            class="sidebar-desctop"
          />
          <transition name="dropdown">
            <SidebarMobile
              v-if="sidebarUp"
              :sidebar_data="SIDEBARS"
              class="sidebar-mobile"
              @closeCatalog="closeCatalog"
            />
          </transition>
        </div>
      </div>
    </section>

    <section class="products">
      <div class="wrap">
        <!-- step -->
        <StepTree :step_data="stepItem" />
        <!-- end step -->

        <div class="title-block">
          <div class="title-block__search-prod" v-if="count">
            <p>
              <b>{{ $t("products.search") }}</b> {{ getTitle }}
            </p>
          </div>

          <!-- sorting products -->
          <Sorting @uniqueCheckSort="uniqueCheckSort" />
        </div>

        <!-- block filters active -->
        <div class="filters-active">
          <button type="button" class="btn-clear-all" @click="removeAllCheck()">
            {{ $t("products.btn_delete_all") }}
          </button>
          <div class="filters-active__block">
            <!-- producers item-->
            <ul class="filters-active__block_list">
              <li
                v-for="(produser, index) in searchBrands"
                :key="index"
                class="filters-active__block_list_link"
                :class="{ activeItem: isShowItem[index] }"
              >
                <input
                  type="checkbox"
                  v-model="additional"
                  :value="produser.name"
                  :id="produser.name"
                  @change="uniqueCheckBrands(index)"
                />
                <label class="item-brand-top" :for="produser.name">
                  {{ produser.name }}
                </label>
              </li>
            </ul>
            <!-- end producers item-->

            <!-- properties item-->
            <ul
              class="filters-active__block_list"
              v-for="(item, index) in characteristics"
              :key="index"
            >
              <div v-if="index === 0" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 1" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_1[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_1"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck1(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 2" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_2[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_2"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck2(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 3" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_3[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_3"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck3(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 4" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_4[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_4"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck4(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 5" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_5[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_5"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck5(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 6" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_6[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_6"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck6(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 7" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_7[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_7"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck7(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 8" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_8[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_8"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck8(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 9" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_9[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_9"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck9(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 10" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_10[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_10"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck10(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 11" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_11[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_11"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck11(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 12" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_12[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_12"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck12(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 13" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_13[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_13"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck13(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 14" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_14[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_14"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck14(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 15" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_15[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_15"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck15(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 16" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_16[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_16"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck16(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 17" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_17[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_17"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck17(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 18" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_18[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_18"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck18(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
              <div v-if="index === 19" class="block-list">
                <li
                  v-for="(n, index) in item.values"
                  :key="index"
                  class="filters-active__block_list_link"
                  :class="{ activeItemProp: isShowItemProperty_19[index] }"
                >
                  <input
                    type="checkbox"
                    v-model="property_19"
                    :value="n.id"
                    :id="n.value"
                    @change="uniqueCheck19(index)"
                  />
                  <label
                    class="item-brand-top"
                    :for="n.value"
                    :class="{ active: isProperty[index] }"
                  >
                    {{ n.value }}
                  </label>
                </li>
              </div>
            </ul>
            <!-- end properties item-->
          </div>
        </div>
        <!-- end block filters active -->

        <div class="filter-touch">
          <div class="filter-btn" @click="openFilterMobile">
            <img src="@/assets/images/filter_icon.svg" alt="" />
            <p>{{ $t("products.filter") }}</p>
          </div>

          <div class="select-sort">
            <div class="dropdown">
              <Sorting @uniqueCheckSort="uniqueCheckSort" />
            </div>
          </div>
        </div>

        <div class="filters-product">
          <!-- filters desctop -->
          <div class="filters filters-desctop">
            <div class="filters__title">
              <img src="@/assets/images/filter_icon.svg" alt="" />
              <p>{{ $t("products.filter") }}</p>
            </div>
            <!-- price -->
            <div class="block-filters">
              <div class="block-filters__price">
                <div
                  class="block-filters__price_title fil-btn"
                  @click="openListPrice = !openListPrice"
                >
                  <p class="title-name">{{ $t("products.price") }}</p>
                  <i
                    class="fas fa-chevron-down"
                    :class="{ 'arrow-up': openListPrice === true }"
                  ></i>
                </div>
                <div class="body-block" v-if="openListPrice">
                  <div class="block-filters__price_block">
                    <input
                      type="number"
                      class="input-i input-i_long input-min"
                      :min="minP"
                      :max="maxP"
                      v-model.number="minPrice"
                      @input="priceInput"
                    />
                    <p>-</p>
                    <input
                      type="number"
                      class="input-i input-i_long"
                      :min="minP"
                      :max="maxP"
                      v-model.number="maxPrice"
                      @input="priceInput"
                    />
                    <div class="block-filters__price_block_btn">
                      <button type="submit" @click="setPrice" class="btn-price">
                        OK
                      </button>
                    </div>
                  </div>
                  <div class="block-filters__price_range">
                    <!-- range -->
                    <div class="container">
                      <div class="slider-track" ref="sliderTrack"></div>
                      <input
                        type="range"
                        :min="minP"
                        :max="maxP"
                        step="1"
                        v-model.number="minPrice"
                        @input="rangeInput"
                        class="range-min"
                      />
                      <input
                        type="range"
                        :min="minP"
                        :max="maxP"
                        step="1"
                        v-model.number="maxPrice"
                        @input="rangeInput"
                        class="range-max"
                      />
                    </div>
                    <!-- end range -->
                  </div>
                </div>
              </div>
            </div>
            <!-- end price -->

            <!-- any in stock button-->
            <div class="block-filters">
              <div class="block-filters__price">
                <div
                  class="block-filters__price_title fil-btn"
                  @click="openListAnyInStock = !openListAnyInStock"
                >
                  <p class="title-name">{{ $t("products.any_in_stock") }}</p>
                  <i
                    class="fas fa-chevron-down"
                    :class="{ 'arrow-up': openListAnyInStock === true }"
                  ></i>
                </div>
                <div
                  class="block-filters__producer_i fil-block"
                  v-if="openListAnyInStock"
                >
                  <div class="block-filters__producer_i_check">
                    <li>
                      <input
                        type="checkbox"
                        v-model="anyInStock"
                        id="anyInStock"
                        @change="checkAnyInStock"
                      />
                      <label
                        class="item-brand any-in-stock"
                        for="anyInStock"
                        :class="{ active: anyInStock === true }"
                      >
                        {{ $t("card.available") }}
                      </label>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <!-- end any in stock button -->

            <!-- producer -->
            <div class="block-filters">
              <div class="block-filters__price">
                <div
                  class="block-filters__price_title fil-btn"
                  @click="openListBrand = !openListBrand"
                >
                  <p class="title-name">
                    {{ $t("products.producer") }}
                  </p>
                  <i
                    class="fas fa-chevron-down"
                    :class="{ 'arrow-up': openListBrand === true }"
                  ></i>
                </div>
                <div class="block-filters__producer_block" v-if="openListBrand">
                  <input
                    type="text"
                    class="input-i"
                    id="input-i"
                    autocomplete="on"
                    :placeholder="$t('search')"
                    v-model="searchProducer"
                  />
                </div>
                <div
                  class="block-filters__producer_i fil-block scroll"
                  id="fil-block"
                  v-if="openListBrand"
                >
                  <div class="block-filters__producer_i_check">
                    <li v-for="(produser, index) in searchBrands" :key="index">
                      <input
                        type="checkbox"
                        v-model="additional"
                        :value="produser.name"
                        :id="produser.name"
                        @change="uniqueCheckBrands(index)"
                      />
                      <label
                        class="item-brand"
                        :for="produser.name"
                        :class="{ active: isActiveBrand[index] }"
                      >
                        {{ produser.name }}
                      </label>
                      <span class="producer-numb">{{
                        produser.item_amount
                      }}</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <!-- end producer -->

            <!-- all filters -->
            <div class="block-filters">
              <div
                class="block-filters__price"
                v-for="(item, index) in characteristics"
                :key="index"
              >
                <div class="block-filters__producer_i fil-block">
                  <!-- index 0 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 0"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList = !isOpenList"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 1 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 1"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_1 = !isOpenList_1"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_1 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_1"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_1"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck1(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_1[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 2 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 2"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_2 = !isOpenList_2"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_2 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_2"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_2"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck2(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_2[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 3 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 3"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_3 = !isOpenList_3"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_3 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_3"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_3"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck3(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_3[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 4 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 4"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_4 = !isOpenList_4"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_4 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_4"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_4"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck4(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_4[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 5 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 5"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_5 = !isOpenList_5"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_5 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_5"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_5"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck5(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_5[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 6 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 6"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_6 = !isOpenList_6"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_6 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_6"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_6"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck6(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_6[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 7 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 7"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_7 = !isOpenList_7"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_7 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_7"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_7"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck7(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_7[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 8 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 8"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_8 = !isOpenList_8"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_8 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_8"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_8"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck8(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_8[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 9 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 9"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_9 = !isOpenList_9"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_9 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_9"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_9"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck9(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_9[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 10 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 10"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_10 = !isOpenList_10"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_10 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_10"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_10"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck10(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_10[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 11 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 11"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_11 = !isOpenList_11"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_11 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_11"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_11"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck11(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_11[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 12 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 12"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_12 = !isOpenList_12"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_12 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_12"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_12"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck12(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_12[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 13 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 13"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_13 = !isOpenList_13"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_13 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_13"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_13"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck13(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_13[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 14 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 14"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_14 = !isOpenList_14"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_14 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_14"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_14"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck14(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_14[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 15 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 15"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_15 = !isOpenList_15"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_15 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_15"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_15"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck15(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_15[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 16 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 16"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_16 = !isOpenList_16"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_16 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_16"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_16"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck16(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_16[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 17 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 17"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_17 = !isOpenList_17"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_17 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_17"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_17"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck17(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_17[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 18 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 18"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_18 = !isOpenList_18"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_18 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_18"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_18"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck18(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_18[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>

                  <!-- index 19 -->
                  <div
                    class="block-filters__producer_i_check"
                    v-if="index === 19"
                  >
                    <div
                      class="block-filters__price_title fil-btn"
                      @click="isOpenList_19 = !isOpenList_19"
                    >
                      <p class="title-name">
                        {{ item.name }}
                      </p>
                      <i
                        class="fas fa-chevron-down"
                        :class="{ 'arrow-up': isOpenList_19 === true }"
                      ></i>
                    </div>
                    <div
                      class="block-filters__producer_i_check scroll"
                      v-if="isOpenList_19"
                    >
                      <li v-for="(n, index) in item.values" :key="index">
                        <input
                          type="checkbox"
                          v-model="property_19"
                          :value="n.id"
                          :id="n.value"
                          @change="uniqueCheck19(index)"
                        />
                        <label
                          class="item-brand"
                          :for="n.value"
                          :class="{ active: isProperty_19[index] }"
                        >
                          {{ n.value }}
                        </label>
                        <span class="producer-numb">{{ n.product_count }}</span>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end all filters -->
          </div>

          <!-- filters mobile -->
          <transition name="filter-list">
            <div class="filters filters-mobile" v-if="filterBlock">
              <!-- count -->
              <div class="count-product">
                <div class="arrow-block" @click="openFilterMobile">
                  <span class="arrow-left"></span>
                </div>
                <p v-if="count">
                  <b>{{ $t("products.search") }}</b> {{ getTitle }}
                </p>
              </div>
              <!-- end count -->

              <div class="filters__title">
                <div class="title">
                  <img src="@/assets/images/filter_icon.svg" alt="" />
                  <p>{{ $t("products.filter") }}</p>
                </div>
                <button
                  type="button"
                  class="clear-all"
                  @click="removeAllCheck()"
                >
                  {{ $t("products.btn_delete_all") }}
                </button>
              </div>

              <!-- price -->
              <div class="block-filters">
                <div class="block-filters__price">
                  <div
                    class="block-filters__price_title fil-btn"
                    @click="openListPrice = !openListPrice"
                  >
                    <p class="title-name">{{ $t("products.price") }}</p>
                    <i
                      class="fas fa-chevron-down"
                      :class="{ 'arrow-up': openListPrice === true }"
                    ></i>
                  </div>
                  <div class="body-block" v-if="openListPrice">
                    <div class="block-filters__price_block">
                      <input
                        type="number"
                        class="input-i input-i_long input-min"
                        :min="minP"
                        :max="maxP"
                        v-model.number="minPrice"
                        @input="priceInput"
                      />
                      <p>-</p>
                      <input
                        type="number"
                        class="input-i input-i_long"
                        :min="minP"
                        :max="maxP"
                        v-model.number="maxPrice"
                        @input="priceInput"
                      />
                      <div class="block-filters__price_block_btn">
                        <button
                          type="submit"
                          @click="setPrice"
                          class="btn-price"
                        >
                          OK
                        </button>
                      </div>
                    </div>
                    <div class="block-filters__price_range">
                      <!-- range -->
                      <div class="container">
                        <div class="slider-track" ref="sliderTrack"></div>
                        <input
                          type="range"
                          :min="minP"
                          :max="maxP"
                          step="1"
                          v-model.number="minPrice"
                          @input="rangeInput"
                          class="range-min"
                        />
                        <input
                          type="range"
                          :min="minP"
                          :max="maxP"
                          step="1"
                          v-model.number="maxPrice"
                          @input="rangeInput"
                          class="range-max"
                        />
                      </div>
                      <!-- end range -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- end price -->

              <!-- any in stock button-->
              <div class="block-filters">
                <div class="block-filters__price">
                  <div
                    class="block-filters__price_title fil-btn"
                    @click="openListAnyInStock = !openListAnyInStock"
                  >
                    <p class="title-name">{{ $t("products.any_in_stock") }}</p>
                    <i
                      class="fas fa-chevron-down"
                      :class="{ 'arrow-up': openListAnyInStock === true }"
                    ></i>
                  </div>
                  <div
                    class="block-filters__producer_i fil-block"
                    v-if="openListAnyInStock"
                  >
                    <div class="block-filters__producer_i_check">
                      <li>
                        <input
                          type="checkbox"
                          v-model="anyInStock"
                          id="anyInStock"
                          @change="checkAnyInStock"
                        />
                        <label
                          class="item-brand any-in-stock"
                          for="anyInStock"
                          :class="{ active: anyInStock === true }"
                        >
                          {{ $t("card.available") }}
                        </label>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end any in stock button -->

              <!-- producer -->
              <div class="block-filters">
                <div class="block-filters__price">
                  <div
                    class="block-filters__price_title fil-btn"
                    @click="openListBrand = !openListBrand"
                  >
                    <p class="title-name">
                      {{ $t("products.producer") }}
                    </p>
                    <i
                      class="fas fa-chevron-down"
                      :class="{ 'arrow-up': openListBrand === true }"
                    ></i>
                  </div>
                  <div
                    class="block-filters__producer_block"
                    v-if="openListBrand"
                  >
                    <!-- count -->
                    <div class="count-product" v-if="count">
                      <p>
                        <b>{{ $t("products.search") }}</b> {{ getTitle }}
                      </p>
                    </div>
                    <!-- end count -->
                    <input
                      type="text"
                      class="input-i"
                      id="input-i"
                      autocomplete="on"
                      :placeholder="$t('search')"
                      v-model="searchProducer"
                    />
                  </div>
                  <div
                    class="block-filters__producer_i fil-block scroll"
                    id="fil-block"
                    v-if="openListBrand"
                  >
                    <div class="block-filters__producer_i_check">
                      <li
                        v-for="(produser, index) in searchBrands"
                        :key="index"
                      >
                        <input
                          type="checkbox"
                          v-model="additional"
                          :value="produser.name"
                          :id="produser.name"
                          @change="uniqueCheckBrands(index)"
                        />
                        <label
                          class="item-brand"
                          :for="produser.name"
                          :class="{ active: isActiveBrand[index] }"
                        >
                          {{ produser.name }}
                        </label>
                        <span class="producer-numb">{{
                          produser.item_amount
                        }}</span>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end producer -->

              <!-- all filters -->
              <div class="block-filters">
                <div
                  class="block-filters__price"
                  v-for="(item, index) in characteristics"
                  :key="index"
                >
                  <div class="block-filters__producer_i fil-block">
                    <!-- index 0 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 0"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList = !isOpenList"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 1 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 1"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_1 = !isOpenList_1"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_1 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_1"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_1"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck1(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_1[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 2 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 2"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_2 = !isOpenList_2"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_2 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_2"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_2"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck2(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_2[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 3 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 3"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_3 = !isOpenList_3"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_3 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_3"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_3"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck3(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_3[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 4 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 4"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_4 = !isOpenList_4"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_4 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_4"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_4"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck4(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_4[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 5 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 5"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_5 = !isOpenList_5"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_5 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_5"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_5"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck5(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_5[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 6 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 6"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_6 = !isOpenList_6"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_6 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_6"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_6"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck6(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_6[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 7 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 7"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_7 = !isOpenList_7"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_7 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_7"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_7"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck7(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_7[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 8 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 8"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_8 = !isOpenList_8"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_8 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_8"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_8"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck8(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_8[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 9 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 9"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_9 = !isOpenList_9"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_9 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_9"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_9"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck9(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_9[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 10 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 10"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_10 = !isOpenList_10"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_10 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_10"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_10"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck10(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_10[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 11 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 11"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_11 = !isOpenList_11"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_11 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_11"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_11"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck11(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_11[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 12 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 12"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_12 = !isOpenList_12"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_12 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_12"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_12"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck12(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_12[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 13 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 13"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_13 = !isOpenList_13"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_13 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_13"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_13"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck13(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_13[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 14 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 14"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_14 = !isOpenList_14"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_14 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_14"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_14"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck14(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_14[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 15 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 15"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_15 = !isOpenList_15"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_15 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_15"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_15"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck15(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_15[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 16 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 16"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_16 = !isOpenList_16"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_16 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_16"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_16"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck16(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_16[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 17 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 17"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_17 = !isOpenList_17"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_17 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_17"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_17"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck17(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_17[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 18 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 18"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_18 = !isOpenList_18"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_18 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_18"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_18"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck18(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_18[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>

                    <!-- index 19 -->
                    <div
                      class="block-filters__producer_i_check"
                      v-if="index === 19"
                    >
                      <div
                        class="block-filters__price_title fil-btn"
                        @click="isOpenList_19 = !isOpenList_19"
                      >
                        <p class="title-name">
                          {{ item.name }}
                        </p>
                        <i
                          class="fas fa-chevron-down"
                          :class="{ 'arrow-up': isOpenList_19 === true }"
                        ></i>
                      </div>
                      <div
                        class="block-filters__producer_i_check scroll"
                        v-if="isOpenList_19"
                      >
                        <li v-for="(n, index) in item.values" :key="index">
                          <input
                            type="checkbox"
                            v-model="property_19"
                            :value="n.id"
                            :id="n.value"
                            @change="uniqueCheck19(index)"
                          />
                          <label
                            class="item-brand"
                            :for="n.value"
                            :class="{ active: isProperty_19[index] }"
                          >
                            {{ n.value }}
                          </label>
                          <span class="producer-numb">{{
                            n.product_count
                          }}</span>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end all filters -->
            </div>
          </transition>

          <!-- block products -->
          <div class="products">
            <div class="products__block">
              <catalog-item
                v-for="(product, index) in products"
                :key="index"
                :product_data="product"
                @addToCart="addToCart"
                @addOverview="addOverview"
                @addFavorite="addFavorite"
                @removeFavorite="removeFavorite(product)"
                @openLoginForm="showForm"
              />
            </div>
            <h1 v-if="this.count === 0" class="products__empty">
              {{ $t("products.empty_product") }}
            </h1>
            <b-pagination
              v-if="this.count > 24"
              v-model="page"
              :total-rows="count"
              :per-page="24"
              @change="loadListProduct"
              v-scroll-to="'#top'"
            ></b-pagination>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Sidebar from "@/components/home/sidebar/Sidebar";
import CatalogItem from "@/components/products/Catalog-Item";
import Footer from "@/components/base/Footer";
import { mapGetters } from "vuex";
import Notification from "@/components/messages/Notification";
import Sorting from "@/components/products/Sorting";
import Property from "@/mixins/productsList/property";
import Brands from "@/mixins/productsList/brands";
import removeAllCheck from "@/mixins/removeAllCheck";
import Pagination from "@/mixins/productsList/pagination";
import AnyInStock from "@/mixins/productsList/anyInStock";
import GetProductFiltersList from "@/mixins/productsList/getProductFiltersList";
import Sort from "@/mixins/productsList/sorting";
import Price from "@/mixins/productsList/price";
import ViewProduct from "@/mixins/viewedProducts";
import Cart from "@/mixins/cart";
import axios from "axios";
import StepTree from "@/components/products/StepTree";
import AuthForm from "@/components/auth/AuthForm";
import ClickOutside from "vue-click-outside";
import Favorites from "@/mixins/favorites";
import Auth from "@/mixins/auth";
import SidebarMobile from "@/components/home/sidebar-mobile/Sidebar";
import SidebarM from "@/mixins/sidebarMobile";
export default {
  name: "products",
  mixins: [
    Property,
    Brands,
    removeAllCheck,
    Pagination,
    Sort,
    Price,
    ViewProduct,
    Cart,
    AnyInStock,
    GetProductFiltersList,
    Favorites,
    Auth,
    AuthForm,
    SidebarM,
  ],
  components: {
    Header,
    Sidebar,
    CatalogItem,
    Footer,
    Notification,
    Sorting,
    StepTree,
    SidebarMobile,
  },
  data: () => {
    return {
      sidebarDropdown: false,
      filterBlock: false,
      stepItem: {},
    };
  },
  computed: {
    ...mapGetters(["SIDEBARS"]),
    // numerals for products
    getTitle() {
      return `${this.count} ${
        this.count % 100 < 11 || this.count % 100 > 19
          ? this.count % 10 != 1
            ? this.count % 10 > 1 && this.count % 10 < 5
              ? this.$t("products.product_1")
              : this.$t("products.product_2")
            : this.$t("products.product")
          : this.$t("products.product_2")
      }`;
    },
  },
  methods: {
    openFilterMobile() {
      this.filterBlock = !this.filterBlock;
    },
  },
  mounted() {
    // document title
    axios
      .get(`products/product-type/${this.$route.params.slug}/`)
      .then((response) => {
        // console.log(response);
        document.title = response.data.name;
        this.stepItem = response.data;
        this.maxP = response.data.max_price;
        if (this.maxP) {
          this.maxPrice = this.maxP;
        } else {
          this.maxPrice = "0";
        }
      });
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style lang="scss" scoped>
.arrow-up {
  transform: rotateZ(-180deg);
  transform-origin: 50% 50%;
}
</style>
