const randomWords = require('random-words-typed');
import { rword } from 'rword';
import { getRandomWord } from '@cityssm/random-words';

export const generateRandomWord = (level: string) => {
  switch (level) {
    case 'easy':
      return randomWords();
    case 'medium':
      return getRandomWord();
    case 'hard':
      return rword.generate();
    default:
      return;
  }
};
