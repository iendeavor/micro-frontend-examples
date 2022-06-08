<script>
import { defineComponent, reactive } from "vue";
import AboutComponent from "./AboutComponent.vue";

export default defineComponent({
  props: {
    observableRootProps: {
      type: Object,
    },
  },
  setup({ observableRootProps }) {
    const rootProps = reactive({});
    observableRootProps.subscribe((newRootProps) => {
      Object.assign(rootProps, newRootProps);
    });
    return {
      rootProps,
    };
  },
  components: { AboutComponent },
});
</script>

<template>
  <AboutComponent v-bind="rootProps" />
</template>
