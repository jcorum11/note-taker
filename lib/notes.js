const fs = require("fs");
const path = require("path");

function createNewNote(body, notesObject) {
    const note = body;
    notesObject.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesObject, null, 2)
    );
    return note;
};

module.exports = {
    createNewNote
};