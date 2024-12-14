import express from 'express';
import { getOwnList } from '../controllers/note/index.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router();

router.get('/list', authMiddleware, getOwnList);

export default router;