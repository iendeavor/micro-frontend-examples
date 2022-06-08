<script setup>
import { ref, defineProps, onMounted, onBeforeUnmount } from "vue";
import useObservableRootProps from "./use-observable-root-props.g.js";

const rootProps = defineProps({
  title: String,
});
const observableRootProps = useObservableRootProps(rootProps);

const appPromise = window.serviceLocator.resolve("about-uni");
const container = ref();
let isMounting = false;
onMounted(async () => {
  isMounting = true;

  const app = await appPromise;

  if (isMounting) {
    app.mount({
      containerSelectors: container.value,
      observableRootProps,
    });
  }
});
onBeforeUnmount(() => {
  isMounting = false;
});
</script>

<template>
  <div ref="container"></div>
</template>
