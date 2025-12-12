const Joi = require('joi');
  
const SignupValidation = (req , res , next) =>{
       
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required()
    });

    const { error } = schema.validate(req.body);
    if(error){
        // console.log(error);
        return res.status(400).json({
            message: error.details[0].message,
            success: false,
            error: true
        });
    }
    next();
}

const LoginValidation = (req , res , next) =>{
       
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const { error } = schema.validate(req.body);
    if(error){
        // console.log(error);
        return res.status(400).json({
            message: error.details[0].message,
            success: false,
            error: true
        });
    }
    next();
}

module.exports = {SignupValidation , LoginValidation}