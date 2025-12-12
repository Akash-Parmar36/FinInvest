import React , {useContext} from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

  
import GeneralContext from "./GeneralContext";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const Dashboard = () => {
  
  const general = useContext(GeneralContext);

  return (
    <div className="dashboard-container">
        <WatchList />
        {general.isBuyWindowOpen && <BuyActionWindow uid={general.selectedStockUID} />}
        {general.isSellWindowOpen && <SellActionWindow uid={general.selectedStockUID} />}
  
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
