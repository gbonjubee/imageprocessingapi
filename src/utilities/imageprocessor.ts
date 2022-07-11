import sharp from 'sharp';

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

export default { resize };
