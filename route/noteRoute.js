var express=require('express');
var router=express.Router();
var noteController=require('../controller/noteController')


router.get('/notes',noteController.getAllNotes);


module.exports = router;