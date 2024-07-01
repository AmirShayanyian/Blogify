const express = require('express');
require('dotenv').config();

async function app() {
  const app = express();
  const port = process.env.SERVER_PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

app();
