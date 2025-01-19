
var generator = require('../util/generator');//import



exports.getAllNotess = (req, res) => {
    var new_id_1   = generator.generate();  
    res.send("get all notes..."+new_id_1);
}

exports.saveNote = (req, res) => {
    res.send("save note...");
}


exports.updateNote = (req, res) => {
    res.send("update note...");
}


exports.deleteNote = (req, res) => {
    res.send("delete note...");
}


