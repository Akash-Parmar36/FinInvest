import React, { useState , useContext} from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import { useOrderRefresh }  from '../context/orderContext';

import "./BuyActionWindow.css";
import { useAuth } from "../context/auth";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0); //you can also use current Stock Price

  const generalContext = useContext(GeneralContext); //read
  const {triggerOrderRefresh} = useOrderRefresh();

  const {auth} = useAuth();

  const handleSellClick = async () => {
    const response = await axios.post("https://fininvest-backend.onrender.com/data/newOrder" , {   //http://localhost:3002/data/newOrder
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    }, {
      headers: {
        'authorization': `${auth.token}`,
        'Content-Type': 'application/json'
      }
    });
   
    // console.log(response);
    triggerOrderRefresh(); 
    generalContext.closeSellWindow(); // Look here
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();// Look here
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
