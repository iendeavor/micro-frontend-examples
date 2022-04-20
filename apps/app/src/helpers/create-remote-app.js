import { ref, onMounted, onBeforeUnmount, onUpdated } from "vue";

const createComponent = ({ fetchAppLifecycles, entry }) => ({
  setup() {
    const root = ref(null);
    const error = ref(null);
    const attached = ref(false);

    const appLifecycles = ref(null);

    function mountOrUpdateApp() {
      if (!appLifecycles.value || !!error.value) return;

      if (attached.value) return;
      attached.value = true;

      // isolate the styles
      const shadowDom = root.value.attachShadow({ mode: "open" });
      appLifecycles.value.mount({ container: shadowDom, entry });

      console.debug("app mounted");
    }

    function unmountApp() {
      if (!appLifecycles.value || !!error.value) return;

      root.value && appLifecycles.value.unmount({ container: root.value });
      console.debug("app unmounted");
    }

    onMounted(mountOrUpdateApp);
    onUpdated(mountOrUpdateApp);
    onBeforeUnmount(unmountApp);

    fetchAppLifecycles()
      .then((lifecycles) => {
        appLifecycles.value = lifecycles;
        mountOrUpdateApp();
      })
      .catch((e) => {
        console.error(e);
        error.value = e;
      });

    return { root, appLifecycles, error };
  },

  template: `
    <!-- this element is just served to mount the element  -->
    <div v-if="error">error...</div>
    <div v-else-if="appLifecycles === null">loading...</div>
    <div ref="root"></div>
  `,
});

export default createComponent;
