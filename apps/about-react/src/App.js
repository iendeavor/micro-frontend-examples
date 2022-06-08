import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    let app = null;
    const containerSelectors = "#about";
    (async () => {
      app = await window.serviceLocator.resolve("about-uni");

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
