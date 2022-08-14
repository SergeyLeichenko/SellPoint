<template>
  <div class="modal-wrap">
    <div class="content-form">
      <div class="modal-tabs">
        <button class="close" @click="$emit('showModalForm')">
          <span>&times;</span>
        </button>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#login">{{
              $t("auth.enter")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#registration">{{
              $t("auth.registration")
            }}</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane fade show active" id="login">
            <Login />
          </div>
          <div class="tab-pane fade" id="registration">
            <Register />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";

export default {
  components: {
    Login,
    Register,
  },
};
</script>
