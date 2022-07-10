import express from "express";

const image = express.Router();

image.get('/', (req, res) => {
    res.send('Image route');
  });

export default image;

