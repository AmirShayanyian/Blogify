const express = require('express');
const connectToMongoose = require('./src/configs/mongoose.config');
const NotFoundHandler = require('./src/common/middlewares/notFound.handler');
const GlobalExceptionHandler = require('./src/common/middlewares/globalException.handler');
const { MainRouter } = require('./src/modules/index.routes');
require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;
const mongoDB_url = process.env.MONGODB_URL;

async function app() {
  const app = express();
  await connectToMongoose(mongoDB_url);

  app.use(MainRouter);
  NotFoundHandler(app);
  GlobalExceptionHandler(app);
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

app();
