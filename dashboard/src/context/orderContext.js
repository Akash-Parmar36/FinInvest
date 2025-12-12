import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  // This state is toggled to signal a data refresh is needed
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const triggerOrderRefresh = () => setRefreshTrigger(prev => !prev);

  return (
    <OrderContext.Provider value={{ refreshTrigger, triggerOrderRefresh }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderRefresh = () => useContext(OrderContext);
