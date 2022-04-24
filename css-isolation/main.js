// ============================================================================
// app
// ============================================================================
const app = document.createElement("div");
document.body.appendChild(app);

const appContent = document.createElement("h1");
appContent.textContent = "Outer";
app.appendChild(appContent);

const appStyle = document.createElement("style");
appStyle.textContent = `
  h1 {
    color: red;
  }
`;
app.appendChild(appStyle);

// ============================================================================
// sub app (no-isolation)
// ============================================================================
const NoIsolationAppContent = (() => {
  const NoIsolationAppContent = document.createElement("h1");
  NoIsolationAppContent.textContent = "No-isolation app (this should be red)";
  return NoIsolationAppContent;
})();

const NoIsolationAppScript = (() => {
  const NoIsolationAppScript = document.createElement("script");
  NoIsolationAppScript.textContent = `console.log('[no-isolation]', document);`;
  return NoIsolationAppScript;
})();

const NoIsolationApp = (() => {
  const NoIsolationApp = document.createElement("div");
  NoIsolationApp.appendChild(NoIsolationAppContent);
  NoIsolationApp.appendChild(NoIsolationAppScript);
  return NoIsolationApp;
})();

app.appendChild(NoIsolationApp);

// ============================================================================
// sub app (shadow dom)
// ============================================================================
const shadowDomAppContent = (() => {
  const shadowDomAppContent = document.createElement("h1");
  shadowDomAppContent.textContent = "Shadow DOM app (this should NOT be red)";
  return shadowDomAppContent;
})();

const shadowDomAppScript = (() => {
  const shadowDomAppScript = document.createElement("script");
  shadowDomAppScript.textContent = `console.log('[shadow dom]', document);`;
  return shadowDomAppScript;
})();

const shadowDomApp = (() => {
  const shadowDomApp = document.createElement("div");

  const shadowDomAppRoot = shadowDomApp.attachShadow({ mode: "open" });
  shadowDomAppRoot.appendChild(shadowDomAppContent);
  shadowDomAppRoot.appendChild(shadowDomAppScript);

  return shadowDomApp;
})();
app.appendChild(shadowDomApp);
