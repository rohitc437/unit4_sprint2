
const express = require('express');

const app = express();

const connect = require("./config/db")

const start = async () =>{
    await connect()

    app.listen(2345, () => {
        console.log("listinig on port 2345")

    });

};

module.exports = start;