import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useAuth } from "../context/auth";
import { Toaster } from "react-hot-toast";

const Home = () => {
  
  const { isLogoutLoading } = useAuth();

  if(isLogoutLoading){
     return   ( <div className="loading-screen">
                   <div className="loader"></div>
                   <Toaster />
               </div> ) 
  }

  return (
    <>
      <TopBar/>
      <Dashboard />
    </>
  );
};

export default Home;


// const Home = () => {
  
//   const { auth , setAuth } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//       setAuth({user: null , token: ""});
//       localStorage.removeItem("auth");
//       navigate("/login");    
//   }

//   return (
//     <div>
//           {JSON.stringify(auth)}
//           <button onClick={handleLogout}> Logout</button>
//     </div>
//   );
// };

// export default Home;
