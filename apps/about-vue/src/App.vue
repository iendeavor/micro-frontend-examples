<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const appPromise = window.serviceLocator.resolve("about-uni");
const about = ref();
let isMounting = false;
onMounted(async () => {
  isMounting = true;
  const app = await appPromise;

  if (isMounting) {
    app.mount({
      containerSelectors: about.value,
    });
  }
});
onBeforeUnmount(() => {
  isMounting = false;
});
</script>

<template>
  <div ref="about"></div>
</template>
