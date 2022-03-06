import { RequestHandler } from 'express';
import  config  from 'config';

export const getWord: RequestHandler = (req, res, next) => {
    res.json({ data: 'Test ...'});
}