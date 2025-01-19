var express = require('express');
var router = express.Router();
var noteController = require('../controller/noteController');
var Callbackss = require('../handlers/getNotesHandler');

// Ensure Callbackss is an array
if (Array.isArray(Callbackss)) {
    const allNotesCallBack = Callbackss.find(obj => obj.key === 'all').callback;
    router.get('/notes', noteController.getAllNotes, allNotesCallBack);
} else {
    console.error('Callbackss is not an array');
    router.get('/notes', (req, res) => {
        res.status(500).send('Internalgggggg server error');
    });
}

router.post('/notes/save', noteController.saveNote);
router.put('/notes/update', noteController.updateNote);
router.delete('/notes/delete', noteController.deleteNote);

module.exports = router;