const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

class Server {
  constructor() {
    this.app = app;
    this.settings()
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("view engine", "ejs");
    this.app.set("views", "./src/app/views/pages");
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new Server();
