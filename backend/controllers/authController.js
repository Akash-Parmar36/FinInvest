const {userModel} = require("../models/userModel.js");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const Signup = async (req,res) => { 
     try{
        const {name , email , password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
               message: "Please fill all the fields",
               success: false,
               error: true
            }) 
        }
   
        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.status(409).json({
               message: "User Already Exists",
               success: false,
               error: true
            })
        }

        const user = new userModel({
              name,
              email,
              password
        })

        user.password = await bcrypt.hash(password , 10);

        await user.save();

        return res.status(201).json({
            message: "User registered Successfully",
            success: true,
            error: false
        })
     }catch(error){
        console.log(error);
        return res.status(401).json({message: "Error in Registering user",success:false ,error:true});
     }
}

const Login = async (req,res) => {
     
      try{
           const { email , password } = req.body;

           if(!email || !password){
              return res.status(400).json({
                message: "Please fill all the fields",
                success: false,
                error: true
             }) 
           }

           const user = await userModel.findOne({email});
           

           if(!user){
            return res.status(400).json({
                message: "Invalid Email or Password",
                success: false,
                error: true
            })}

           const isMatch = await bcrypt.compare(password , user.password);
           
           if(!isMatch){
            return res.status(400).json({
                message: "Invalid Email or Password",
                success: false,
                error: true
            })}
           
         //   console.log(user);
           const jwtToken = jwt.sign({email:user.email , _id: user._id}, process.env.JWT_SECRET_KEY , {expiresIn: "1d"});
           
           return res.status(200).json({
            message: "User Logged In Successfully",
            success: true,
            error: false,
            jwtToken,
            email,
            name:user.name
           })
        
        }catch(error){
        console.log(error);
        return res.status(401).json({message: "Error in Login",success:false ,error:true});
      }
}

module.exports = {Signup , Login};