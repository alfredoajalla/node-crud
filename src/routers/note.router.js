import express from 'express';
import { getOwnList, getNoteById, create, update } from '../controllers/note/index.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/list', authMiddleware, getOwnList);
router.get('/:noteId', authMiddleware, getNoteById);
router.post('/create', authMiddleware, create);
router.put('/:noteId', authMiddleware, update);

export default router;