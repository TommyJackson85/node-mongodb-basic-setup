var configValues = require('./config');//JSON file removed through .gitignore. 

module.exports = {
  url : 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds139890.mlab.com:39890/my-database'  
};
//create a new mLab database, database username and password and change the above link to it.
//this project is just a prototype node.js/mongoDB project