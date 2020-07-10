const router = require("express").Router();
const db = require("../../db/db.json");
const {
    createNewNote
} = require("../../lib/notes");

router.get("/notes", (req, res) => {
    let result = db;
    //if (res.query) result = req.query;
    res.json(result)
});

router.post("/notes", (req, res) => {

    // set id based on what the next index of the array will be
    req.body.id = db.length.toString();
    

    // add animal to json file and animals array in this function
    // if (!validateAnimal(req.body)) {
    //     res.status(400).send("The animal is not properly formatted");
    // } else {
    // }

    const note = createNewNote(req.body, db);

    res.json(note);
});

module.exports = router;