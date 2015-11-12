var sanitizeHtml = require('sanitize-html');
var htmlToText = require('html-to-text');
var db = require('../config/db');

var UserSchema = db.Schema({
  name: String,
  username: String,
  password: String
});


module.exports = UserSchema;
