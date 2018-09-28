var mysql = require('mysql');
var config = require('../config/config.json');

exports.doConnect = function(query) {
  var pool  = mysql.createPool({
      host     : config.dbhost,
      user     : config.dbuser,
      password : config.dbpassword,
      database : config.dbname
    });


  pool.getConnection(function(err, connection) {
    connection.query(query, function (error, results, fields) {
      connection.release();
      if (error) callback(error);
      else callback(null,JSON.stringify(results));
    });
  });
};
