import 'dotenv/config';
import { Server } from "./server";
import { Mongoose } from './mongoose';

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex : true
}

const server = new Server(process.env.PORT);
const mongoose = new Mongoose(process.env.DATA_BASE_URL, mongooseOptions);

mongoose.connect().once('open', () => {
  console.log(`Mongoose - successful connection ...`);
  server.start();
});
