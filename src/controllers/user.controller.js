const express = require("express")
const router= express.Router()
const jwt = require("jsonwebtoken")
require("dotenv").config()


const User= require("../models/user.model")
const upload = require("../middlewares/file-upload")

function newToken(user){
    return jwt.sign({user},process.env.KEY)
}
router.post("/register", upload.single("profile_pic"), async (req, res) =>{
    let user = await User.findOne({email:req.body.email});

    if(user) return res.status(400).send({status:"failed", message:"email is alerdy used"})

    let userData = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        profile_pic: req.file.path,
        roles:req.body.roles
    })

    let token = newToken(userData);

    return res.status(201).send({ status:"done!!", message:"data sucessfully added", userData, token})
})  

router.post("/login",async (req, res) => {
    let user = await User.findOne({email:req.body.email})
    console.log(user.password)
    if(!user) return res.status(400).send({status:"failed", message:"User not register"});

    let check = user.checkPassword(req.body.password);

    if(!check) return res.status(400).send({status:"failed", message:"pass is wrong"});

    let token = newToken(user);

    return res.status(200).send({user, token});

})
module.exports = router