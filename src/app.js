const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();


app.use(userRoutes);

// start the application
app.listen(3000, ()=>
{
    console.log("Server is listening on http://localhost:3000");
});

module.exports = app;