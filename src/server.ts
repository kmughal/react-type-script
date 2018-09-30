import * as express from "express";
import chalk from "chalk";
import { HttpRequest } from "./helpers/http-request";

export class Server {
  public static DefaultInstance: Server = new Server(express());
  private readonly httpRequest: HttpRequest;
  constructor(private app: express.Express) {
    this.httpRequest = new HttpRequest();
  }
  start() {
    this.setPublicAssets()
      .setRoutes()
      .setPortAndStartServer();
  }
  private setRoutes(): Server {
    this.app
      .get("/records", (req, res) => {
        const url = "http://api.population.io/1.0/wp-rank/1952-03-11/male/United%20Kingdom/today/";
        this.httpRequest.get(url).then(json => {
          res.json(json);
        });
      })
      .get("/index", (req, res) => {
        res.sendfile("./dist/index.html");
      })
      .get("*", (req, res) => {
        chalk.green("request received");
        res.send(`hello world ${new Date()}`);
      });
    return this;
  }
  private setPublicAssets(): Server {
    this.app.use(express.static("dist"));
    return this;
  }
  private setPortAndStartServer(): Server {
    this.app.listen(8000);
    return this;
  }
}