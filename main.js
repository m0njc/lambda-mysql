//const db = require('./connect.js')
var mysql = require('mysql');
var config = require('./config/config.json');

var pool  = mysql.createPool({
    host     : config.dbhost,
    user     : config.dbuser,
    password : config.dbpassword,
    database : config.dbname
  });


exports.handler =  (event, context, callback) => {
  //prevent timeout from waiting event loop
  context.callbackWaitsForEmptyEventLoop = false;
  pool.getConnection(function(err, connection) {
    connection.query('select * from msCourse', function (error, results, fields) {
      connection.release();
      if (error) callback(error);
      else callback(null,results);
    });
  });
};

//db.doConnect('select * from msCourse');
