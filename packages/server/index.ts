import express from 'express';
import dotenv from 'dotenv';
import Router from './routes/routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(Router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
