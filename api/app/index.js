import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import logging from '../logging';

export const app = express();

app.use(morgan('combined', logging.error));
app.use(morgan('combined', logging.access));

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('<h1>This is courses server!</h1>');
});

