const http = require('http');
const router = require('./router.js');

const port = 3000;

const server = http.createServer((req, res) => {
	//our created module
  router.home(req, res);

}).listen(port, () => {
  console.log(`Server running at http://:${port}/`);
});