const request = require("request");

const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.status(403).send("Incorrect url. Our API doesn't works this way.")
});

router.get("/name-uuid/:name", (req, res) => {
    request({
        url: "https://api.mojang.com/users/profiles/minecraft/" + req.params.name,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.json(body);
            console.log("API [name-uuid]: ", body);
        }
    });
});

router.get("/face/:name", (req, res) => {
    request({
        url: "http://localhost/api/minecraft/name-uuid/" + req.params.name,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const url = "https://crafatar.com/avatars/" + body.id + "?size=" + req.query.size + "&default=MHF_Steve" + (req.query.helm ? "&overlay" : "");
            res.redirect(url);
            console.log("API [face]: ", url);
        }
    });
});

module.exports = router;