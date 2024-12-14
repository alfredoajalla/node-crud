import express from 'express';
import { getOwnList, getNoteById } from '../controllers/note/index.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/list', authMiddleware, getOwnList);
router.get('/:noteId', authMiddleware, getNoteById);

export default router;