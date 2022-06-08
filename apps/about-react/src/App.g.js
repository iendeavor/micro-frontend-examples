import React from "react";
import useObservableRootProps from "./use-observable-root-props.g.js";

const About = (rootProps) => {
  const observableRootProps = useObservableRootProps(rootProps);

  const containerSelectors = "#about";

  React.useEffect(() => {
    let isMounting = true;
    let app = null;

    (async () => {
      app = await window.serviceLocator.resolve("about-uni");

      if (isMounting === false) return;

      app.mount({
        containerSelectors,
        observableRootProps,
      });
    })();

    return () => {
      isMounting = false;

      app?.unmount({
        containerSelectors,
      });
    };
  }, [app]);

  return <div id="about"></div>;
};

export default About;
