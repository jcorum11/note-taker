const router = require("express").Router();
const noteRoutes = require("./noteroutes");

router.use(noteRoutes)

module.exports = router;