const request = require("request");

const express = require("express");
var router = express.Router();

const minecraft = require("./minecraft");

router.use("/minecraft", minecraft);

router.get("/", (req, res) => {
    res.status(403).send("Incorrect url. Our API doesn't works this way.")
});

module.exports = router;