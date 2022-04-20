const minimist = require("minimist");
const express = require("express");

// Parse command line arguments
const argv = minimist(process.argv.slice(2));
const host = argv.h || "localhost";
const port = argv.p || "3000";
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
app.listen(port, host, () => {
  console.log(`http server listening on ${host}:${port}`);
});
