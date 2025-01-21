
//const { json } = require('body-parser');
var generator = require('../util/generator');//import
var memoryStroage=require('../util/memory.storge');
var noteModel=require("../model/note.model");

exports.getAllNotess = (req, res) => {
    var new_id_1   = generator.generate();
      memoryStroage.storage.setItem(new_id_1, "note1");//(key, value)
      var new_id_2   = generator.generate();
      memoryStroage.storage.setItem(new_id_2, "note2");
    var keys =memoryStroage.getKeys(memoryStroage.storage);
    var values =memoryStroage.getValues(memoryStroage.storage);
    var note=noteModel.Note;
    var noteObj=new Note(new_id_1,"a","b","c",new Date());
    console.log("keys..."+JSON.stringify(keys),"values..."+json.stringify(values)+"noteObj..."+JSON.stringify(noteObj));
    res.send("get all notes..."+JSON.stringify(keys));
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

// module.exports={
//     getAllNotess
// }
