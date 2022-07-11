import fs from 'fs';
import imageprocessor from './../../utilities/imageprocessor';

describe('Test image processor utility', () => {
  it('test that file was resized and kept in cache', async () => {
    const outdir = await imageprocessor.resize(
      './assets/encenadaport.jpg',
      5,
      7,
      'encenadaport.jpg'
    );
    expect(fs.existsSync(outdir)).toBeTruthy;
    fs.unlinkSync(outdir);
  });
});
