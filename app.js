require("dotenv").config();

const express = require("express");
const consolidate = require("consolidate");
const path = require("path");

const app = express();
const httpServer = require("http").createServer(app);

app.engine("html", consolidate.ejs);
app.set("view engine", "html");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "/public/html"));

app.get("/", (req, res) => {
    res.render("index");
});

httpServer.listen(process.env.PORT, () => {
    console.log("Server listening in port " + process.env.PORT + "...");
});