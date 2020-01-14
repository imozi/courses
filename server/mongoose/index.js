import mongoose from 'mongoose';
import saslprep from 'saslprep';

mongoose.Promise = require('bluebird');

export class Mongoose {
  /**
   * Создает класс подключения к базе данных MongoDB, принимает url базы данных и набор опций moongose
   * @param {String} url
   * @param {Object} options
   * @method connect - метод подключения к базе данных возвращяет mongoose.connection
   */
  constructor(url, options) {
    this.url = url;
    this.options = options;
  }

  connect() {
    mongoose.connect( process.env.DATA_BASE_URL, this.options);
    mongoose.connection.on('error', (error) => console.error(`Произошла ошибка соединения с базой данных! 💀  Ошибка: ${error}`))
    return mongoose.connection;
  }
}
