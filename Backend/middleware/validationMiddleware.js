const {z}=require("zod");

const userRegistrationSchema=z.object({
    name:z.string().min(3),
    email:z.string().email(),
    mobile:z.string().min(10),
    password:z.string().min(6)
});

const validateUserRegistration=(req,res,next)=>{
    try {
        const{name,email,mobile,password}=userRegistrationSchema.parse(
            req.body
        );
        req.validatedUserData={name,email,mobile,password};
        next();
    } catch (error) {
        res.status(400).json({message:error.errors});
    }
}

module.exports=validateUserRegistration