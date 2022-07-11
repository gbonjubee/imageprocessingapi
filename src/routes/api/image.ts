import express from 'express';
import fs from 'fs';
import imageprocessor from './../../utilities/imageprocessor';

const image = express.Router();
const assetpath = './assets/';
const outputpath = './cache/';

image.get('/', async (req, res) => {
  const filename = req.query.filename;
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  let inputdir = assetpath + filename;
  if (!fs.existsSync(inputdir)) {
    res.status(404).send(`Unable to find image ${filename} in assets`);
    return;
  }
  if (width <= 0 || height <= 0) {
    res.status(400).send(`width and height must be greater than zero(0)`);
    return;
  }

  const outdir = await imageprocessor.resize(
    inputdir,
    width,
    height,
    outputpath + filename
  );
  res.sendFile(outdir, { root: './' });
});

export default image;
