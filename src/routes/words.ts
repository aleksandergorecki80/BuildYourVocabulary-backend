import { Request, Response, Router } from 'express';
import { getWord } from '../controllers/words';

const router = Router();

router
    .route('/')
    .get(getWord);

export default router;
