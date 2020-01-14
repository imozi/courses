import express from 'express';
import cors from 'cors';

export const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('<h1>This is courses server!</h1>');
});
