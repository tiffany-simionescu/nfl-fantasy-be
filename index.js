require('dotenv').config();

const server = require('./api/server');
//host
const host = process.env.HOST || "127.0.0.1";
//post
const port = process.env.PORT || 5000;

server.listen(port, host, () => {
  console.log(`API is running at http://${host}:${port}...`);
});