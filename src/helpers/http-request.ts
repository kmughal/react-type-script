import chalk from "chalk";
import axios from "axios";

export class HttpRequest {
  async get(url: string) {
    chalk.green(`HttRequest:${new Date()}, url:  ${url}`);
    const request = axios.request;
    const response = await request({ url: url });
    chalk.green(`Time:${new Date()},response:${response.data}`);
    return response.data;
  }
}
