import express from 'express';

const app = express();

const SERVER = 3000;
app.listen(SERVER, () => {
  console.log(`The app is running at ${SERVER}`);
});
