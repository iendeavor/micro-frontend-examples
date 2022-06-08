<script>
import { defineComponent, defineAsyncComponent, ref } from "vue";

export default defineComponent({
  components: {
    AboutComponent: defineAsyncComponent(() =>
      window.serviceLocator.resolve("about-vue")
    ),
  },

  setup() {
    const title = ref("About");
    const toggleTitle = () => {
      title.value = title.value === "About" ? "About Vue" : "About";
    };

    return {
      title,
      toggleTitle,
    };
  },
});
</script>

<template>
  <button @click="toggleTitle">Toggle Title</button>
  <AboutComponent :title="title" />
</template>
