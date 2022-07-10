import express from "express";
import image from './api/image'

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Main api route');
});

routes.use('/image', image);

export default routes;

