const express = require("express");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(process.cwd(), "public")));
app.use(userRoutes);


// start the application
app.listen(3000, ()=>
{
    console.log("Server is listening on http://localhost:3000");
});

module.exports = app;