const express = require("express")
const router= express.Router()

require("dotenv").config()

const User= require("../models/user.model")

router.post("/register")