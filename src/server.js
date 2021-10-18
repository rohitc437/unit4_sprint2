
const express = require('express');

const app = express();

const connect = require("./config/db")

app.use(express.json())

const userController = require("./controllers/user.controller")

app.use("/users", userController)

const start = async () =>{
    await connect()

    app.listen(2345, () => {
        console.log("listinig on port 2345")

    });

};

module.exports = start;