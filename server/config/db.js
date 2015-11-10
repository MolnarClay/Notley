var db = require('mongoose');

db.connect('mongodb://notelyuser:notelypass@ds035663.mongolab.com:35663/notelydb');

module.exports = db;
