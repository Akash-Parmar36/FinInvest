import React, { useState , useContext} from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import { useOrderRefresh }  from '../context/orderContext';

import "./BuyActionWindow.css";
import { useAuth } from "../context/auth";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0); //you can also use current Stock Price

  const generalContext = useContext(GeneralContext); //read
  const {triggerOrderRefresh} = useOrderRefresh();
  
  const {auth} = useAuth();

  const handleBuyClick = async () => {
   const response = await axios.post("http://localhost:3002/data/newOrder" ,{
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    }, {
      headers: {
        'authorization': `${auth.token}`,
        'Content-Type': 'application/json'
      }
    });

    // console.log(response);
    triggerOrderRefresh();
    generalContext.closeBuyWindow(); // Look here
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();// Look here
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
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
