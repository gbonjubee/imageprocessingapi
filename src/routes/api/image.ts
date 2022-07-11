import express from 'express';
import fs from 'fs';
import imageprocessor from './../../utilities/imageprocessor';

const image = express.Router();

image.get('/', async (req, res) => {
  imageprocessor.processImage(req, res);
});

export default image;
