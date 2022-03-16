import { RequestHandler } from 'express';
import axios from 'axios';
import { definitionsApi } from './apis';
import { generateRandomWord } from '../utils/randomWord';

// const randomWords = require('random-words-typed');

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getDefinitions: RequestHandler = async (req, res, next) => {
  const randomWord = generateRandomWord(req.params.level);

  try {
    const getDefinitionsAPI = definitionsApi(randomWord);
    const result = await axios.get(getDefinitionsAPI, config);
    res.json({ data: result.data });
  } catch (err) {
    console.log(err);
  }
};
