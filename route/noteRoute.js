var express=require('express');
var router=express.Router();
var noteController=require('../controller/noteController')


router.get('/notes',noteController.getAllNotes);
router.post('/notes/save',noteController.saveNote);
router.put('/notes/update',noteController.updateNote);
router.delete('/notes/delete',noteController.deleteNote);


module.exports = router;