const db = require('./connect.js')




exports.getCourse =  (event, context, callback) => {
  //prevent timeout from waiting event loop
  context.callbackWaitsForEmptyEventLoop = false;
  db.doConnect('select * from msCourse');
};
