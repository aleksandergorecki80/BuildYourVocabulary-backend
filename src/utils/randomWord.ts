const randomWords = require('random-words-typed');
import { rword } from 'rword';
import { getRandomWord } from '@cityssm/random-words';

export const generateRandomWord = (level: string) => {
  console.log(level);
  switch (level) {
    case 'easy':
      return getRandomWord();
    case 'medium':
      return randomWords();
    case 'hard':
      return rword.generate();
    default:
      return;
  }
};
