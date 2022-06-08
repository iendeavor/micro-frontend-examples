<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "About",
    },
  },
  setup() {
    const count = ref(0);
    const increment = () => count.value++;

    return {
      count,
      increment,
    };
  },
});
</script>

<template>
  <div
    :style="{
      margin: '10px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'green',
      color: 'white',
    }"
  >
    <h1>Props: {{ title }}</h1>
    <button @click="increment">{{ count }}</button>
  </div>
</template>
