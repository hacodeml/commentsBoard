/* -------------------------------------------
                 MODULE DEPENDENCIES
  ---------------------------------------------     
*/

const server = require('../configs/app')();
const config = require('../configs/config/index');

//creating the server with our specific config setup 
server.create(config);

//start the server
server.start();  