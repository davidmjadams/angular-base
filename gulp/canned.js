var canned = require('canned')
,   http = require('http')
,   opts = { cors: true, logger: process.stdout }


module.exports = function() {
    var options = {
        port: 3000,
        src: './mock_api'
    }

    can = canned(options.src, opts);
    http.createServer(can).listen(options.port);

    console.log('Mock API server running at http://localhost:' + options.port + ', serving files from ' + options.src)
};