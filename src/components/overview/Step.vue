<template>
  <div>
    <div class="step-block">
      <ul class="step-block__list">
        <li class="item">
          <a href="/">
            <img
              src="@/assets/images/sellpoint_icon_step.svg"
              alt="sellpoint-icon"
            />
          </a>
        </li>
        <li class="item">
          <p>
            <router-link to="" tag="a" class="link-default-cursor">
              <span>&#8250;</span>
              {{ this.catalog }}
            </router-link>
          </p>
        </li>
        <li class="item">
          <p>
            <router-link to="" tag="a" class="link-default-cursor">
              <span>&#8250;</span>
              {{ this.category }}
            </router-link>
          </p>
        </li>
        <li class="item">
          <p>
            <a
              :href="
                $router.resolve({
                  name: 'products',
                  params: { slug: this.prod_type.slug },
                }).href
              "
            >
              <span>&#8250;</span>
              <p class="item-active-link">{{ this.prod_type.name }}</p>
            </a>
          </p>
        </li>
        <li class="item">
          <p>
            <router-link to="" tag="a" class="link-default-cursor">
              <span>&#8250;</span>
              {{ this.step_data.title }}
            </router-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "step",
  props: {
    step_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      catalog: "",
      category: "",
      prod_type: "",
    };
  },
  created() {
    this.stepData();
  },
  methods: {
    stepData() {
      localStorage.setItem("pageNumber", 1);
      for (let i = 0; i < this.step_data.bread_crumbs.length; i++) {
        this.catalog = this.step_data.bread_crumbs[0].catalog.name;
        this.category = this.step_data.bread_crumbs[1].category.name;
        this.prod_type = this.step_data.bread_crumbs[2].prod_type;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.link-default-cursor {
  cursor: default;
}
</style>
