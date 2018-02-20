//our connect server
let connect = require('connect');
 let http = require('http');

 let app = connect();
 const port = 3000;

 app.listen(port);
 console.log("node sServer listening at port: " + port);