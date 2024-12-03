const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

//whenever we want to use middleware we need to make use of app.use

//app.use(express.json()) is a Inbuilt middleware which Provide a Parser, which will help us to pass the datastream which we receive from client
app.use(express.json());

//middleware
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoutes"));

//custom middleware
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});


