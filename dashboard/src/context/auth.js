import { useState , useEffect , createContext , useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth , setAuth] = useState({
        user: null,
        token:""
    });
    
    //isInitialLoading to clarify it's for initial auth check
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    // For controlling the full-screen spinner during the login and logout delay
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem("authInfo");
        // console.log("Before parsing = " , storedAuth);
        if (storedAuth) {
           const parseData = JSON.parse(storedAuth);
        //    console.log("After parsing = ", parseData);
           setAuth({user: parseData.name , token: parseData.jwtToken});
        }

        setIsInitialLoading(false);
      }, []);

    return <AuthContext.Provider value={{auth , setAuth , isInitialLoading , isLoading , setIsLoading}}>
        {children}
    </AuthContext.Provider>
}


const useAuth = () => useContext(AuthContext);

export {useAuth , AuthProvider};