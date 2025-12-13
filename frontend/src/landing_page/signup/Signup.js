import { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';

const Signup = ({loading , setLoading}) => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    name: "",
  });


  const handleOnChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

     

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email , name , password} = inputValue;

    try{  
          setLoading(true);
          // const response = await axios.post("http://localhost:3002/auth/register" , {email , name , password});
          const response = await axios.post("https://fininvest-backend.onrender.com/auth/register" , {email , name , password});
          // console.log(response.data);

          if(response.data.success){
            toast.success(response.data.message , {
               duration: 2500
            });
          }
          
          setTimeout(() => {
            document.body.classList.add("fade-out");
      
            // ⏱️ Wait for fade animation
            setTimeout(() => {
              window.location.href =
                "https://fininvest-dashboard.onrender.com/login";
            }, 500);
          }, 1500);
          

          // setTimeout(() => {
          //     window.location.href = "https://fininvest-dashboard.onrender.com/login"; 
          // }, 2000);


    }catch(error){
       console.log(error);
       setLoading(false);
       toast.error(error?.response?.data?.message || "Network error. Please try again.");
    }
  };

  return (
    <div className="container mt-5 mt-md-0 px-4 p-sm-3">
      <div className="row justify-content-center justify-content-lg-between justify-content-xl-around">
        <div className="col-lg-6 mt-lg-5 mt-xxl-2 px-0 mb-5 mb-lg-0">
          <img
            src="./media/images/Signup_account_open.svg"
            className="img-fluid "
          />
        </div>
        <div className="col d-md-none ps-0 mt-4 text-center text-sm-start">
              <h1 className="fw-bolder" style={{color:"#424242" , fontSize:"22px" ,lineHeight:"1.3"}}>Open a free demat & trading account online</h1>
        </div>
        <div className="col-lg-5 mt-4 mt-lg-0 col-xl-4 form-container border-top border-bottom border-sm border-black border-1 border-opacity-10 rounded py-5 px-0 px-sm-5 text-center">
                
              <img
                src="media/images/kite_logo.png"
                alt="kite product logo"
                style={{ width: "3.75rem", height: "2.5rem" }}
              />
             
              <h2 className="fw-normal fs-4 mt-3" style={{ color: "#444444" }}>
                Signup to Zerodha
              </h2>
              
              <form onSubmit={handleSubmit} className="mt-3">
                <div className="input-field mb-3">
                  <input
                    type="email"
                    name="email"
                    value={inputValue.email}
                    onChange={handleOnChange}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field mb-3">
                  <input
                    type="text"
                    name="name"
                    value={inputValue.name}
                    onChange={handleOnChange}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    name="password"
                    value={inputValue.password}
                    onChange={handleOnChange}
                    placeholder=" "
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="mt-3 mb-3">
                  <button
                    type="submit"
                    className="w-100 p-2 text-white border rounded"
                    style={{ backgroundColor: "#FF5722" }}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
                <div className="text-center">
                  <a href="https://fininvest-dashboard.onrender.com/login" className="signup-link">   
                    Already have an account? Login!
                  </a>
                </div>
              </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// http://localhost:3001/login