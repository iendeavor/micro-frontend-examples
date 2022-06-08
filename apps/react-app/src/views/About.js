import React, { lazy, Suspense } from "react";

const AboutLazy = lazy(() => window.serviceLocator.resolve("about-react"));

export default () => {
  const [title, setTitle] = React.useState("About React");

  const toggleTitle = () => {
    setTitle(() => (title === "About" ? "About React" : "About"));
  };

  return (
    <Suspense fallback={<div>loading...</div>}>
      <>
        <button onClick={() => toggleTitle()}>toggle title</button>
        <AboutLazy title={title} />
      </>
    </Suspense>
  );
};
