import express, { Request, Response, NextFunction } from 'express';
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require("helmet");
const xss = require('xss-clean');
import wordsRoutes from './routes/words';

const app = express();

// Define routes
app.use('/api/v1/words', wordsRoutes);

// Error hendeling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS
app.use(xss());


const SERVER = 8080;
app.listen(SERVER, () => {
  console.log(`The app is running at ${SERVER}`);
});
