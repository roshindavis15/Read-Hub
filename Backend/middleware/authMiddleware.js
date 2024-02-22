const jwt =require('jsonwebtoken');

const authMiddleware=(req,res,next)=>{
    //get the token from request headers
    const token=req.headers.authorization;

    if(!token){
        return res.status(401).json({message:'No token provided'});

    }
    try {
        //verifying token
        const decoded=jwt.verify(token.split('')[1],process.env.JWT_SECRET);

        //adding the decoded token payload to the request object
        req.user=decoded;
        next();

    } catch (error) {
        return res.status(401).json({message:'Invalid token'});
    }
}

module.exports=authMiddleware;