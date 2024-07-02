const express = require('express');
const connectToMongoose = require('./src/configs/mongoose.config');
const NotFoundHandler = require('./src/common/middlewares/notFound.handler');
const GlobalExceptionHandler = require('./src/common/middlewares/globalException.handler');
const { MainRouter } = require('./src/modules/index.routes');
const path = require('path');
const swaggerConfig = require('./src/configs/swagger.config');
require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;
const mongoDB_url = process.env.MONGODB_URL;

async function app() {
  const app = express();
  await connectToMongoose(mongoDB_url);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname + '\\public'));
  app.use(MainRouter);

  swaggerConfig(app);
  NotFoundHandler(app);
  GlobalExceptionHandler(app);
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

app();
