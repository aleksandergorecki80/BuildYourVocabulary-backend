import { Router } from 'express';
import { getDefinitions } from '../controllers/getDefinitions';

const router = Router();

router
    .route('/')
    .get(getDefinitions);

export default router;
