import React from "react";
import { Observable } from "rxjs";

const useObservableRootProps = (rootProps) => {
  const [subscriber, setSubscriber] = React.useState(null);
  const [observableRootProps] = React.useState(
    new Observable((subscriber) => {
      setSubscriber(subscriber);
    })
  );
  subscriber?.next(rootProps);

  return observableRootProps;
};

export default useObservableRootProps;
