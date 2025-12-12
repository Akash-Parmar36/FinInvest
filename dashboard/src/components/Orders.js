import React , {useState , useEffect} from "react";
import axios from "axios";
import { useOrderRefresh } from "../context/orderContext";
import {useAuth} from "../context/auth";

const Orders = () => {

  const [allOrders , setallOrders] = useState([]);
  const {auth} = useAuth();
  const { refreshTrigger } = useOrderRefresh(); 
 
  useEffect(() => {
           axios.get("http://localhost:3002/data/allOrders", {
            headers: {
              'authorization': `${auth.token}`,
              'Content-Type': 'application/json'
          }
          }).then((res) => {
                // console.log("Orders Data ",res.data);
                setallOrders(res.data);
           });
  }, [refreshTrigger]);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>  

      <div className="order-table">
        <table>
          <tr>
            <th>Stock Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {  
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
