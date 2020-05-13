require("dotenv").config();

const express = require("express");
const consolidate = require("consolidate");
const path = require("path");

const mongodb = require("./libs/mongodb").connect();

const app = express();
const httpServer = require("http").createServer(app);

const api = require("./api/api");
app.use("/api", api);

app.engine("html", consolidate.ejs);
app.set("view engine", "html");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "/public/html"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/members", (req, res) => {
    if (!req.query.force) { res.redirect("/soon"); return; }
    mongodb.findAll("web", "members", (err, documents) => {
        res.render("members", {members: documents});
    });
});

app.get("/soon", (req, res) => {
    res.render("soon");
});

httpServer.listen(process.env.PORT, () => {
    console.log("Server listening in port " + process.env.PORT + "...");
});