const express = require("express");
const debug = require("debug")("dhx:index");
const path = require("path");
const http = require("http");
const app = express();

app.use(
  "/codebase",
  express.static(path.join(__dirname, "node_modules", "dhx-suite", "codebase"))
);
app.use("/", express.static(path.join(__dirname, "public")));

const server = http.createServer(app);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("listening on " + bind);
});
server.on("error", err => {
  if (err.syscall !== "listen") throw err;

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (err.code) {
    case "EACCES":
      console.err(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.err(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw err;
  }
});

server.listen(3000);
