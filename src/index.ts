import express from 'express';
import routes from './routes/index'

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Image Processor Home');
});

app.listen(port, () => {
  console.log(`Server started successfully at http://localhost:${port}`);
});
