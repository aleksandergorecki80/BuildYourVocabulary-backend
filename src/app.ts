import express, { Request, Response, NextFunction } from 'express';
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const path = require('path');
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

// PRODUCTION STATIC ASSETS
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));
  app.get('^(?!api\/)[\/\w\.\,-]*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontend', 'build', 'index.html'));
  });
}
console.log(process.env.NODE_ENV);

const SERVER = 8080;
app.listen(SERVER, () => {
  console.log(`The app is running at ${SERVER}`);
});
