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
              {{ step_data.catalog }}
            </router-link>
          </p>
        </li>
        <li class="item">
          <p>
            <router-link to="" tag="a" class="link-default-cursor">
              <span>&#8250;</span>
              {{ step_data.category }}
            </router-link>
          </p>
        </li>
        <li class="item">
          <p>
            <router-link to="" tag="a" class="link-default-cursor">
              <span>&#8250;</span>
              {{ step_data.name }}
            </router-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.link-default-cursor {
  cursor: default;
}
</style>
