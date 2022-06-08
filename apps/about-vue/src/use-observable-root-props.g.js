import { watch } from "vue";
import { Observable } from "rxjs";

const useObservableRootProps = (reactiveObject) =>
  new Observable((subscriber) => {
    watch(
      reactiveObject,
      (newRootProps) => {
        subscriber.next(newRootProps);
      },
      {
        deep: true,
      }
    );
  });

export default useObservableRootProps;
