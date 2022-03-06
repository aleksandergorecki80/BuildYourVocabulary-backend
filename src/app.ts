import express, { Request, Response, NextFunction } from 'express';
import wordsRoutes from './routes/words';

const app = express();

// Define routes
app.use('/api/v1/words', wordsRoutes);

// Error hendeling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

const SERVER = 3000;
app.listen(SERVER, () => {
  console.log(`The app is running at ${SERVER}`);
});
