import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    let app = null;
    const containerSelectors = "#about";
    (async () => {
      app = await serviceLocator.resolve("vue-component");

      app.mount({
        containerSelectors,
      });
    })();

    return () => {
      app?.unmount({
        containerSelectors,
      });
      app = null;
    };
  }, []);

  return <div id="about"></div>;
};

export default About;
