var StaticServer = require('static-server');

var server = new StaticServer({
    rootPath: '.',            // required, the root of the server file tree
    port: 1337,               // required, the port to listen
    name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
    host: '10.0.0.100',       // optional, defaults to any interface
    cors: '*',                // optional, defaults to undefined
    followSymlink: true,      // optional, defaults to a 404 error
    templates: {
        index: 'index.html',      // optional, defaults to 'index.html'
    }
});

server.start(function () {
    console.log('Server listening to', server.port);
});