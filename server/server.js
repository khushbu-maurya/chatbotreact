const http = require('http');
const App = require('./App');

const server = http.createServer(App);

server.listen(5000);