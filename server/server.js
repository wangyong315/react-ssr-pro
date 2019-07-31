const express = require('express');
const ReactSSR = require('react-dom/server');
const serverEntry = require('../dist/server-entry');

const app = express();

app.get('*', function (req, res) {
  const appStr = ReactSSR.render(serverEntry);
  res.send(appStr)
})

app.listen(3333, function (params) {
  
})