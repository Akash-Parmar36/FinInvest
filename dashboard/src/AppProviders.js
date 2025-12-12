import { AuthProvider } from "./context/auth";
import { GeneralContextProvider } from "./components/GeneralContext";
import { OrderProvider } from "./context/orderContext";

const AppProviders = ({ children }) => {
    return (
      <AuthProvider>
          <OrderProvider>
               <GeneralContextProvider>
                 {children}
               </GeneralContextProvider>
          </OrderProvider>
      </AuthProvider>
    );
  };
  
export default AppProviders;