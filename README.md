### imageprocessingapi

This project provides API for image resizing. The API implements caching so that repeated requests are not regenerated but fetch pre-stored images if they exist.

### Usage
 1. Can be used to place images into frontend applications with the size set via URL parameters for rapid prototyping.

 2. Can be used as a library to serve properly scaled versions of images to the front end to reduce page load size.


### Testing
The API uses `supertest` for endpoint testing and jasmine for unit testing. To run the test simple run the command below.

Run `npm run test`

### Building the app

Run `npm run build`

### Starting the api

Run `npm run start`

- Application will be running at http://localhost:3000/

### Test Image Processing API

- Run without imagetype parameter to default to `.jpg` 
 http://localhost:3000/api/images?filename=encenadaport&width=300&height=60 
 
 or with imagetype/extension 
 
 http://localhost:3000/api/images?filename=encenadaport&width=300&height=60&imagetype=jpg

- Test without any parameter to see error message and error 400 -  http://localhost:3000/api/images

- Test with invalid image to see error message displayed and error 404 -  http://localhost:3000/api/images?filename=invalid&width=300&height=60&imagetype=jpg

- Test with invalid width to see error message displayed and error 400 -  http://localhost:3000/api/images?filename=invalid&width=0&height=100&imagetype=jpg

- Test with invalid height to see error message displayed and error 400-  http://localhost:3000/api/images?filename=invalid&width=-5&height=0&imagetype=jpg

 

### NOTE:
For more details on the scripts excuted please see  `[scripts]` object in `package.json` file.