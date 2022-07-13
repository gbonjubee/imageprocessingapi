import express from 'express';
import imageprocessor from './../../utilities/imageprocessor';

const image = express.Router();

image.get('/', (req: express.Request, res: express.Response): void => {
  imageprocessor.processImage(req, res);
});

export default image;
