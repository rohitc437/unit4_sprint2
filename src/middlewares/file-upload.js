const multer = require("multer");
const path = require("path")

const storage= multer.diskStorage({
    destination:function( req, file, cb){
        cb(null, path.join(__dirname,"../uploads"));
    },
    filename:function( req, file, cb){
        const uniqueSuffix = Date.now()+'-'+ Math.round(Math.random()* 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

    function fileFilter ( req, file, cb){
        if(file.mimtype == "image/jpeg" || file.mimetype == "image/png"){
            cb(null, true)
        }else{
            cb(null, false)
        }
    }

    const upload = multer({
        storage: storage,
        fileFilter:fileFilter,
        limits:{
            size: 1024 * 1024 * 5
        }
    })

module.exports= upload;