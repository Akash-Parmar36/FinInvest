import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Login = () => {
 const [showPassword, setShowPassword] = useState(false);
 
 const [inputValue, setInputValue] = useState({
   email: "",
   password: "",
 });

 const navigate = useNavigate();
 const { setAuth , isLoading , setIsLoading} = useAuth();

 const handleOnChange = (e) => {
   setInputValue({
     ...inputValue,
     [e.target.name]: e.target.value,
   });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();
   const {email , password} = inputValue;
  
   try{  
    setIsLoading(true);

        //  const response = await axios.post("http://localhost:3002/auth/login" , {email , password});
         const response = await axios.post("https://fininvest-backend.onrender.com/auth/login" , {email , password});
        //  console.log(response.data);
          
        //  if(response.data.success){
        //    toast.success(response.data.message , {
        //     duration: 2500
        //    });
        //  }
         
          if(response.data.success){
            toast.success(response.data.message);
          }

         setAuth({user: response.data.name , token: response.data.jwtToken});
         localStorage.setItem("authInfo" , JSON.stringify(response.data));
         
         setTimeout(() => {
          document.body.classList.add("fade-out");
    
          // ⏱️ Wait for fade animation
          setTimeout(() => {
             navigate("/"); 
          }, 500);
        }, 1500);

        //  setTimeout(() => {
        //      setIsLoading(false);
        //      navigate("/"); 
        //  }, 2800);

   }catch(error){
      console.log(error);
      setIsLoading(false);
      toast.error(error.response.data.message);
   }
 };

return (
  isLoading ? (   <div className="loading-screen">
    <div className="loader"></div>
    <Toaster />
  </div> ) :

   ( <div className="LoginContainer">
 
    <div className="Container">
      <div id="header">
        <img src="./media/images/kite_logo.png" alt="kite product logo" />
      </div>
      <form onSubmit={handleSubmit} className="Loginform">
        <div className="form-header">Login to Kite</div>
        <div className="input-group">
          <input
            id="userId" 
            type="email" 
            placeholder=" " 
            name="email"
            value={inputValue.email}
            onChange={handleOnChange}
            required
          />
          <label htmlFor="userId" className="input-label">
            enter your email
          </label>
        </div>
        <div className="input-group">
          <input
           type={showPassword ? "text" : "password"} 
           placeholder=" " 
           name="password"
           value={inputValue.password}
           onChange={handleOnChange}
           required
           />
          <label htmlFor="userId" className="input-label">
            password
          </label>
          <span onClick={() => setShowPassword(!showPassword)}>
            <img
              src={
                showPassword
                  ? "/media/images/eye-off-outline-svgrepo-com.svg"
                  : "/media/images/eye-outline-svgrepo-com.svg"
              }
            />
          </span>
        </div>
        <div className="Loginbutton">
          <button>Login</button>
        </div>
      </form>
    </div>

    <div className="LoginFooter">
      <div className="app-icons">
        <a>
          <img
            src="/media/images/android_playstore.svg"
            alt="playstore_Logo"
          />
        </a>
        <a>
          <img src="/media/images/apple.svg" alt="apple_Logo" />
        </a>
      </div>
      <p className="zerodha_logo">
        <a>
          <img src="/media/images/zerodha-logo-2.svg" alt="zerodha_Logo" />
        </a>
      </p>
      <p className="zerodha_account">
        <a href="https://fininvest-frontend.onrender.com/signup">
          Don't have an account? Signup now!
        </a>
      </p>
      <p className="zerodha_broking">
        Zerodha Broking Limited: Member of NSE, BSE, MCX ‐ SEBI Reg. no.
        INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Smart Online
        Dispute Resolution | SEBI SCORES
      </p>
      <p className="zerodha_broking">v3.0.0</p>
    </div>
   </div>
   )
);
};

export default Login;


//http://localhost:3000/signup