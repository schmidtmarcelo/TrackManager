import express from 'express';
import routes from './routes';
import cors from 'cors';
require('../config/associations')

const app = express();

app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000'
  }));
app.use(express.json());
app.use(routes);

app.listen(3001);