exports.Note=class Note{
    constructor(noteId,noteTitle,noteContent,createdBy,createdOn) {
        this.noteId=noteId;
        this.noteTitle=noteTitle;
        this.noteContent=noteContent;
        this.createdBy=createdBy;
        this.createdOn=createdOn;
    }
};