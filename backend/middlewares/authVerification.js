const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req , res , next) => {
     
    const token = req.headers['authorization']; 
    // console.log("token = " , token);

    if(!token){
        return res.status(401).json({
            message: "Unauthorised",
            success: false,
            error: true
        });
    }

    try{
           const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);
           req.user = decoded;
           next();
    }catch(error){
          // console.log(error);

          if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token.' });
          }

          if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired.' });
          }

          return res.status(401).json(error);
    }
}

module.exports = {ensureAuthenticated};