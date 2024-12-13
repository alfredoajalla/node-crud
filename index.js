import express from 'express';
import dotenv from 'dotenv';
import router from './src/routers/user.router';

dotenv.config()
const { HTTP_PORT } = process.env

const api = express();
api.use(router);

api.listen(HTTP_PORT, () => {
    console.log(`Server on port http://localhost:${HTTP_PORT}`)
})

