const path = require("path");

let indexFile = path.resolve(process.cwd(), "public", "index.html");

exports.rootPage = (req, res) =>
{
    res.sendFile(indexFile);
};

exports.secondPage = (req, res) =>
{
    res.send("This is a test of the exports");
}