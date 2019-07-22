/* -------------------------------------------
                 GENERAL DEPENDENCIES
  ---------------------------------------------     
*/

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

module.exports = function () {
    let server = express(),
        create,
        start;

    create = (config) => {
        let routes = require('../src/api');
        // set server settings
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        // add middleware to recognize incoming Request as a JSON object
        server.use(express.json());
        server.use(express.urlencoded({
            extended: false
        }));

        // add middleware to allow cross-origin access
        server.use(cors());

        // add middleware to log client's requests
        server.use(morgan('dev'));

        // Set routes
        routes(server);
    };

    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');

        // Start server
        server.listen(port, function () {
            console.log(`Express server listening on - http://${hostname}:${port}`);
        });

    };
    return {
        create: create,
        start: start
    };
};
