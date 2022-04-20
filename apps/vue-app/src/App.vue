<script>
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  components: {
    RouterLink,
    RouterView,
  },
});
</script>

<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Vue App Home</router-link>
        </li>

        <li>
          <router-link to="/about">Vue App About</router-link>
        </li>

        <li>
          <router-link to="/about/detail">Vue App About Detail</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>
