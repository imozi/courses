import { app } from "../app";

export default class Server {
  /**
   * Создает класс для запуска http сервера, принимает номер порта на котором будет запущен сервер
   * @param {Number} port
   * @method start - запускает сервер (по умолчанию порт: 8081)
   */
  constructor(port = 8081) {
    this.port = port;
  }
  start() {
    app.listen({ port: `${this.port}` }, () => console.log(`Server started 🚀 on http://localhost:${this.port}`));
  }
}
