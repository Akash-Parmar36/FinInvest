import toast from "react-hot-toast";

const handleLogout = (setAuth , navigate , setIsLogoutLoading) => {
    
    setIsLogoutLoading(true);

    toast.success("Logged out successfully! Redirecting..." , {
        duration: 2500
    });

 
    setTimeout(() => {
        setAuth({user: null , token: ""});
        localStorage.removeItem("authInfo");
        setIsLogoutLoading(false); 
        navigate("/login", {replace : true}); 
    }, 2500); 
}

export default handleLogout;