const minimist = require("minimist");
const express = require("express");

// Parse command line arguments
const argv = minimist(process.argv.slice(2));
const host = argv.h || process.env.HOST || "localhost";
const port = argv.p || process.env.PORT || "3000";
const dist = argv.d || "dist";
const headers = (argv.headers ?? "")
  .split(",")
  .filter(Boolean)
  .map((header) => {
    const [name, value] = [
      header.split(":")[0].trim(),
      header.split(":").slice(1).join(":").trim(),
    ];

    return [name, value];
  });
console.info(`[http-server] host: ${host}`);
console.info(`[http-server] port: ${port}`);
console.info(`[http-server] dist: ${dist}`);
headers.forEach(([name, value]) => {
  console.log(`[http-server] header: ${name}, ${value}`);
});

// Create express app
const app = express();
app.use(function (req, res, next) {
  headers.forEach(([name, value]) => {
    res.header(name, value);
  });
  return next();
});
app.use(express.static(dist));
app.get("*", (req, res, next) => {
  if (req.url.endsWith("/")) {
    res.redirect(301, req.url.slice(0, -1));
    return;
  }

  if (/\/[^/.]+$/.test(req.url)) {
    res.sendFile(`${process.cwd()}/${dist}/index.html`);
    return;
  }

  const match = req.url.match(/^\/.+\/([^/]+)$/);
  if (match) {
    res.sendFile(`${process.cwd()}/${dist}/${match[1]}`);
    return;
  }

  next();
});
app.listen(port, host, () => {
  console.log(`http server listening on ${host}:${port}`);
});
