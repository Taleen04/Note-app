// Ensure Callbackss is an array
const Callbacks = [
    {
        key: 'all',
        callback: (req, res) => {
            res.send('Fetching all notes');
        }
    },
    {
        key: 'create',
        callback: (req, res) => {
            res.send('Creating a new note');
        }
    },
    {
        key: 'delete',
        callback: (req, res) => {
            res.send('Deleting a note');
        }
    }
];

module.exports = Callbacks;
