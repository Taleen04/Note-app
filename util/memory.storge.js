var memoryStroage=require("memorystorage");
var storage = new memoryStroage('note_app');



exports.getKeys=(storage)=>{
    var keys = [];
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
        keys.push(key);
    }
    return keys;
}
exports.getValues=(storage)=>{
    var values = [];
    for (var i=0; i<store.length; i++) {
        var key = store.key(i);
        var value=storage.getItem(key);
        values.push(value);
        console.info(key + ': ' + value);
    }
    return values;
}



exports.storage=storage;