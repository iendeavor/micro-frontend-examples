import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

const app = express();

app.use(express.static("dist/client"));

app.get("*", (req, res) => {
  const html = `
<html>
  <head></head>
  <body>
    <div id="app">${renderToString(<App url={req.url} />)}</div>
    <script src="main.js"></script>
  </body>
</html>
`.trim();

  return res.send(html);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
