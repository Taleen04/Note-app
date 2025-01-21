var express = require('express');
var router = express.Router();
var noteController = require('../controller/noteController');
var Callbacks = require('../handlers/getNotesHandler');

//Ensure Callbacks is an array
if (Array.isArray(Callbacks)) {
    const allNotesCallBack = Callbacks.find(obj => obj.key === 'all').callback;
    router.get('/notes',noteController.getAllNotes,allNotesCallBack);
} else {
    console.error('Callbacks is not an array');
    router.get('/notes', (req, res) => {
        res.status(500).send('Internal server error');
    });
}

router.post('/notes/save', noteController.saveNote);
router.put('/notes/update', noteController.updateNote);
router.delete('/notes/delete', noteController.deleteNote);

module.exports = router;