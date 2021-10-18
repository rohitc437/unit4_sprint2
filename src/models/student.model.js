const mongoose = require("mongoose")

const User = require("./user.model")

const studentSchema = new mongoose.Schema({
    roll_number:{ type:Number, required: true},
    user:{ type:mongoose.Schema.Types.ObjectID, ref:"user", required:true},
    bacth:{ type:String, required: true}

})

const Student = mongoose.model("Student", studentSchema)

module.exports= Student;