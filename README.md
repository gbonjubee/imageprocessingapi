### imageprocessingapi

This project provides API for image resizing. The API implements caching so that repeated requests are not regenerated but fetch pre-stored images if they exist.

### Usage
 1. Can be used to place images into frontend applications with the size set via URL parameters for rapid prototyping.

 2. Can be used as a library to serve properly scaled versions of images to the front end to reduce page load size.


### Testing
The API uses `supertest` for endpoint testing and jasmine for unit testing. To run the test simple run the command below;

```
npm run test

```

### Running the api

Run `npm run start`
 

### NOTE:
For more details on the scripts excuted please see  `[scripts]` object in `package.json` file.