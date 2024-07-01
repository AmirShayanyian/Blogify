const express = require('express');
const connectToMongoose = require('./src/configs/mongoose.config');
require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;
const mongoDB_url = process.env.MONGODB_URL;

async function app() {
  const app = express();
  await connectToMongoose(mongoDB_url);
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

app();
