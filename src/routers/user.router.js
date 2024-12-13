import express from 'express';

const router = express.Router();

router.post('/create', (req, res) => {
    res.send('ruta de creacion de usuarios')
})
export default router;