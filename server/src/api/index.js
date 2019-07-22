const apiRoute = require('./v1/v1');

const init = (server) => {

    server.use('/api', apiRoute);
};

module.exports = init;