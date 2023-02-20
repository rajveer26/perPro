const jwt = require("jsonwebtoken");
const secretKey = "secretkey";


const admin = (req, res)=>{
    const admin={
        id:1,
        username:"rajveer26talview",
        email:"rajveer@talview.com",
    }
    jwt.sign({admin},secretKey,{expiresIn:'3000s'},(err,token)=>{
        res.json({
            token
        })
    })
}



function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader!== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        console.log(bearerHeader);
        req.token = bearerToken;
        next();
    }
    else
    {
        console.log(bearerHeader);
        res.send({
            result:"Token is not valid"
        });
    }
}
let accessGranted = false;
function grantAccess(req, res){

    jwt.verify(req.token,secretKey,(err,authData)=>{

        if(err){
            res.send({result:"invalid-token"});
        }
        else
        {
            accessGranted = true;
            res.json({

                message: "profile accessed",
                authData
            });
        }
    })
}

module.exports = {verifyToken,admin,grantAccess};