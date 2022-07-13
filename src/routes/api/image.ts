import express from 'express';
import imageprocessor from './../../utilities/imageprocessor';

const image = express.Router();

image.get('/', async (req, res) => {
  imageprocessor.processImage(req, res);
});

export default image;
