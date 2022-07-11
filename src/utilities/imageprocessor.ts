import express from 'express';
import sharp from 'sharp';
import fs from 'fs';

const assetpath = './assets/';

const processImage = async (req: express.Request, res: express.Response) => {
  if (!req.query.filename || !req.query.width || !req.query.height) {
    res
      .status(400)
      .send(`filename, width and height are all required query paramenters`);
    return;
  }

  const filename = req.query.filename;
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  //Allow flexible image extension and default to jpg is not set
  let type = req.query.imagetype;
  if (!type) {
    type = 'jpg';
  }
  const inputdir = assetpath + filename + '.' + type;
  const outputdir =
    assetpath + 'cache/' + filename + '_' + width + '_' + height + '.' + type;

  //Use pre-strored image if the image has already been resized with same width and height otherwise resize
  if (fs.existsSync(outputdir)) {
    res.sendFile(outputdir, { root: './' });
    return;
  }

  //Validate that the input image exists
  if (!fs.existsSync(inputdir)) {
    res.status(404).send(`Input file ${filename} of type  is missing`);
    return;
  }

  //Return bad request if the width and height are invalid
  if (width <= 0 || height <= 0) {
    res.status(400).send(`width and height must be greater than zero(0)`);
    return;
  }

  const resizedImage = await resize(inputdir, width, height, outputdir);
  res.sendFile(resizedImage, { root: './' });
};

const resize = async (
  filename: string,
  width: number,
  height: number,
  outdir: string
): Promise<string> => {
  await sharp(filename)
    .metadata()
    .then(() => sharp(filename).resize(width, height).toFile(outdir));
  return outdir;
};

export default { resize, processImage };
