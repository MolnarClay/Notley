var db = require('../config/db');
var NoteSchema = require('./user-schema');

var Note = db.model('User', NoteSchema);
module.exports = Note;
