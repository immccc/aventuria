"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

import {AppRouter} from "./routes/app.router";

class Server {

    public app: express.Application;

    public static bootstrap() : Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.config();
        this.defineRouting();
    }

    private config() {
      this.app.set("views", path.join(__dirname, "..", "frontend", "views"));
      this.app.set("view engine", "hbs");

      this.app.use("/scripts", express.static(path.join(__dirname, "..", "frontend")));
      this.app.use("/node_modules", express.static(path.join(__dirname, "..", "..", "node_modules")));
      this.app.use("/resources/styles", express.static(path.join(__dirname, "..", "resources", "styles")));
    }

    private defineRouting() {
      var router = express.Router();
      AppRouter.configureRouting(router);
      this.app.use("/", router);
    }
}

var server = Server.bootstrap();
export = server.app;
