import React , {useState} from "react";
 

function TableQuantity() {
     
  const [activeTab , setActiveTab] = useState("Equity")
    
  return (
    <div className="container-lg px-sm-4 px-lg-0 px-xl-5">
      <div className="d-flex justify-content-between justify-content-md-start flex-row flex-wrap tabs">
        <div className="fw-medium tab-button" style={{color: activeTab==="Equity" ? "#424242" : "#387DE1" , borderBottom: activeTab==="Equity" && "3px Solid #387DE1" }} onClick={() => setActiveTab("Equity")}>Equity</div>
        <div className="fw-medium tab-button FO" style={{color: activeTab==="F&O" ? "#424242" : "#387DE1" , borderBottom: activeTab==="F&O" && "3px Solid #387DE1" }} onClick={() => setActiveTab("F&O")}>F&amp;O</div>
        <div className="fw-medium tab-button" style={{color: activeTab==="Currency" ? "#424242" : "#387DE1", borderBottom: activeTab==="Currency" && "3px Solid #387DE1" }} onClick={() => setActiveTab("Currency")}>Currency</div>
        <div className="fw-medium tab-button" style={{color: activeTab==="Commodity" ? "#424242" : "#387DE1", borderBottom: activeTab==="Commodity" && "3px Solid #387DE1" }} onClick={() => setActiveTab("Commodity")}>Commodity</div>
      </div>
     
     {activeTab === "Equity" &&
      <div className="">
        <table className="" >
          <thead >
            <tr>
              <th></th>
              <th className="">Equity delivery</th>
              <th className="">Equity intraday</th>
              <th className="hide-on-mobile">F&O - Futures</th>
              <th className="hide-on-mobile">F&O - Options</th>
            </tr>
          </thead>
          <tbody className="table_row">
            <tr>
              <td className="">Brokerage</td>
              <td className="">Zero Brokerage</td>
              <td>
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="hide-on-mobile">
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="hide-on-mobile">Flat Rs. 20 per executed order</td>
            </tr>

            <tr className="rowColor">
              <td className="">STT/CTT</td>
              <td className="">0.1% on buy & sell</td>
              <td className="">0.025% on the sell side</td>
              <td className="hide-on-mobile">0.02% on the sell side</td>
              <td className="hide-on-mobile">
                <ul className=""> 
                  <li className="mb-2">
                    0.125% of the intrinsic value on options that are
                    bought and exercised
                  </li>
                  <li className="mb-2">0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="">Transaction charges</td>
              <td className="">
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td className="">
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td className="hide-on-mobile">
                NSE: 0.00173% <br />
                BSE: 0
              </td>
              <td className="hide-on-mobile">
                NSE: 0.03503% (on premium) <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>

            <tr className="rowColor">
              <td className="">GST</td>
              <td className="">
              18% on (brokerage + SEBI charges + transaction  charges)
              </td>
              <td className="">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="hide-on-mobile">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="hide-on-mobile">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>

            <tr>
              <td className="">SEBI charges</td>
              <td className="">
              &#8377;10 &#8725; crore
              </td>
              <td className="">
              &#8377;10 &#8725; crore
              </td>
              <td className="hide-on-mobile">
              &#8377;10 &#8725; crore
              </td>
              <td className="hide-on-mobile">
              &#8377;10 &#8725; crore
              </td>
            </tr>

            <tr className="rowColor">
              <td className="">Stamp charges</td>
              <td className="">
              0.015% or ₹1500 / crore on buy side
              </td>
              <td className="">
              0.003% or ₹300 / crore on buy side
              </td>
              <td className="hide-on-mobile">
              0.002% or ₹200 / crore on buy side
              </td>
              <td className="hide-on-mobile">
              0.003% or ₹300 / crore on buy side
              </td>
            </tr>
          </tbody>
        </table>
      </div> }

     

     {activeTab === "F&O" && 
      <div className="">
                      <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>F&amp;O - Futures</th>
                                    <th>F&amp;O - Options</th>
                                </tr>
                            </thead>
                            <tbody className="table_row">
                                <tr>
                                    <td>Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>Flat Rs. 20 per executed order</td>
                                </tr>

                                <tr className="rowColor">
                                    <td>STT/CTT</td>
                                    <td>0.02% on the sell side</td>
                                    <td>
                                        <ul className="ps-3 ps-sm-4">
                                            <li className="mb-2">
                                                0.0125% of the intrinsic value on options that are bought and exercised
                                            </li>
                                            <li className="mb-2">
                                                0.1% on sell side (on premium)
                                            </li>
                                        </ul>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Transaction charges</td>
                                    <td>NSE: 0.00173% BSE: 0</td>
                                    <td>NSE: 0.03503% (on premium) BSE: 0.0325% (on premium)</td>
                                </tr>

                                <tr className="rowColor">
                                    <td>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>

                                <tr>
                                    <td>SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                
                                <tr className="rowColor">
                                    <td>Stamp charges</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
      </div>}

   
      {activeTab === "Currency" &&
      <div className="">
        <table className="">
          <thead >
            <tr >
              <th scope=""></th>
              <th scope="" className="">Currency futures</th>
              <th scope="" className="">Currency options</th>
            </tr>
          </thead>
          <tbody className="table_row">
            <tr>
              <td className="">Brokerage</td>
              <td className="">0.03% or &#8377; 20 &#8725; executed order whichever is lower</td>
              <td className="">
              &#8377; 20 &#8725; executed order
              </td>
            </tr>
            <tr className="rowColor">
              <td className="">STT/CTT</td>
              <td className="">No STT</td>
              <td className="">No STT</td> 
            </tr>
            <tr>
              <td className="">Transaction <br /> charges</td>
              <td className="">
              NSE: 0.00035% <br />
              BSE: 0.00045%
              </td>
              <td className="">
              NSE: 0.0311% <br />
              BSE: 0.001%
              </td>
            </tr>
            <tr className="rowColor">
              <td className="">GST</td>
              <td className="">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td className="">SEBI charges</td>
              <td className="">
              &#8377;10 &#8725; crore
              </td>
              <td className="">
              &#8377;10 &#8725; crore
              </td>
            </tr>
            <tr className="rowColor">
              <td className="">Stamp charges</td>
              <td className="">
              0.0001% or &#8377;10 &#8725; crore on buy side
              </td>
              <td className="">
              0.0001% or &#8377;10 &#8725; crore on buy side
              </td>  
            </tr>
          </tbody>
        </table>
      </div> }



      {activeTab === "Commodity" &&
      <div className="">
        <table className="">
          <thead >
            <tr >
              <th scope=""></th>
              <th scope="" className="">Commodity futures</th>
              <th scope="" className="">Commodity options</th>
            </tr>
          </thead>
          <tbody className="table_row">
            <tr>
              <td className="">Brokerage</td>
              <td className="">	0.03% or &#8360;. 20 &#8725; executed order whichever is lower</td>
              <td className="">
              &#8377; 20 &#8725; executed order
              </td>
            </tr>
            <tr className="rowColor">
              <td className="">STT/CTT</td>
              <td className="">	0.01% on sell side (Non-Agri)</td>
              <td className="">0.05% on sell side</td> 
            </tr>
            <tr>
              <td className="">Transaction charges</td>
              <td className="">
              MCX: 0.0021% <br />
NSE: 0.0001%
              </td>
              <td className="">
              MCX: 0.0418% <br />
NSE: 0.001%
              </td>
            </tr>
            <tr className="rowColor">
              <td className="">GST</td>
              <td className="">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td className="">
              18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td className="">SEBI charges</td>
              <td className="">
              Agri: <br />
              &#8377;1 &#8725; crore <br />
Non-agri: <br />
&#8377;10 &#8725; crore
              </td>
              <td className="">
              &#8377;10 &#8725; crore
              </td>
            </tr>
            <tr className="rowColor">
              <td className="">Stamp charges</td>
              <td className="">
              0.002% or &#8377;200 &#8725; crore on buy side
              </td>
              <td className="">
              0.0003% or &#8377;300 &#8725; crore on buy side
              </td>  
            </tr>
          </tbody>
        </table>
      </div> }
     
      <div className="text-center fs-5 mt-4 mb-4" style={{color:"#424242"}}><a href="#" className="text-decoration-none" style={{color:"#387ED1"}}>Calculate your costs upfront</a>&nbsp;using our brokerage calculator</div>
    </div>
  );
}

export default TableQuantity;





 








// import React , {useState} from "react";
 

// function TableQuantity() {
     
//     const [activeTab , setActiveTab] = useState("Equity")

//   return (
//     <div className="container-xl px-3 px-lg-5">
//       <div className="d-flex flex-row flex-wrap tabs">
//         <div className="fw-medium tab-button" style={{color: activeTab==="Equity" ? "#424242" : "#387DE1" , borderBottom: activeTab==="Equity" && "3px Solid #387DE1" }} onClick={() => setActiveTab("Equity")}>Equity</div>
//         <div className="fw-medium tab-button" style={{color: activeTab==="Currency" ? "#424242" : "#387DE1", borderBottom: activeTab==="Currency" && "3px Solid #387DE1" }} onClick={() => setActiveTab("Currency")}>Currency</div>
//         <div className="fw-medium tab-button" style={{color: activeTab==="Commodity" ? "#424242" : "#387DE1", borderBottom: activeTab==="Commodity" && "3px Solid #387DE1" }} onClick={() => setActiveTab("Commodity")}>Commodity</div>
//       </div>
     
//      {activeTab == "Equity" &&
//       <div className="row px-2" >
//         <table className="table border" >
//           <thead >
//             <tr>
//               <th scope="col"></th>
//               <th scope="col" className="py-3">Equity delivery</th>
//               <th scope="col" className="py-3">Equity intraday</th>
//               <th scope="col" className="py-3">F&O - Futures</th>
//               <th scope="col" className="py-3">F&O - Options</th>
//             </tr>
//           </thead>
//           <tbody className="table_row">
//             <tr>
//               <td className="pt-3">Brokerage</td>
//               <td className="pt-3">Zero Brokerage</td>
//               <td>
//                 0.03% or Rs. 20/executed order whichever is lower
//               </td>
//               <td>
//                 0.03% or Rs. 20/executed order whichever is lower
//               </td>
//               <td className="pt-3">Flat Rs. 20 per executed order</td>
//             </tr>

//             <tr className="rowColor">
//               <td className="pt-5">STT/CTT</td>
//               <td className="pt-5">0.1% on buy & sell</td>
//               <td className="pt-5">0.025% on the sell side</td>
//               <td className="pt-5">0.02% on the sell side</td>
//               <td className="pt-4">
//                 <ul>
//                   <li>
//                     0.125% of the intrinsic value on options that are
//                     bought and exercised
//                   </li>
//                   <li className="pt-2">0.1% on sell side (on premium)</li>
//                 </ul>
//               </td>
//             </tr>

//             <tr>
//               <td className="py-3">Transaction charges</td>
//               <td className="py-3">
//                 NSE: 0.00297% <br />
//                 BSE: 0.00375%
//               </td>
//               <td className="py-3">
//                 NSE: 0.00297% <br />
//                 BSE: 0.00375%
//               </td>
//               <td className="py-3">
//                 NSE: 0.00173% <br />
//                 BSE: 0
//               </td>
//               <td className="py-3">
//                 NSE: 0.03503% (on premium) <br />
//                 BSE: 0.0325% (on premium)
//               </td>
//             </tr>

//             <tr className="rowColor">
//               <td className="pt-5">GST</td>
//               <td className="py-4">
//               18% on (brokerage + SEBI charges + transaction  charges)
//               </td>
//               <td className="py-4">
//               18% on (brokerage + SEBI charges + transaction charges)
//               </td>
//               <td className="py-4">
//               18% on (brokerage + SEBI charges + transaction charges)
//               </td>
//               <td className="py-4">
//               18% on (brokerage + SEBI charges + transaction charges)
//               </td>
//             </tr>

//             <tr>
//               <td className="py-3">SEBI charges</td>
//               <td className="py-3">
//               &#8377;10 &#8725; crore
//               </td>
//               <td className="py-3">
//               &#8377;10 &#8725; crore
//               </td>
//               <td className="py-3">
//               &#8377;10 &#8725; crore
//               </td>
//               <td className="py-3">
//               &#8377;10 &#8725; crore
//               </td>
//             </tr>

//             <tr className="rowColor">
//               <td className="pt-4">Stamp charges</td>
//               <td className="py-3">
//               0.015% or ₹1500 / crore on buy side
//               </td>
//               <td className="py-3">
//               0.003% or ₹300 / crore on buy side
//               </td>
//               <td className="py-3">
//               0.002% or ₹200 / crore on buy side
//               </td>
//               <td className="pt-4">
//               0.003% or ₹300 / crore on buy side
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div> }

     

//       {activeTab == "Currency" &&
//       <div className="row px-2">
//         <table className="table border">
//           <thead >
//             <tr >
//               <th scope="col"></th>
//               <th scope="col" className="py-3">Currency futures</th>
//               <th scope="col" className="py-3">Currency options</th>
//             </tr>
//           </thead>
//           <tbody className="table_row">
//             <tr>
//               <td className="py-3">Brokerage</td>
//               <td className="pt-3">0.03% or &#8377; 20 &#8725; executed order whichever is lower</td>
//               <td className="pt-3">
//               &#8377; 20 &#8725; executed order
//               </td>
//             </tr>
//             <tr className="rowColor">
//               <td className="py-3">STT/CTT</td>
//               <td className="pt-3">No STT</td>
//               <td className="pt-3">No STT</td> 
//             </tr>
//             <tr>
//               <td className="py-3">Transaction <br /> charges</td>
//               <td className="py-3">
//               NSE: 0.00035% <br />
//               BSE: 0.00045%
//               </td>
//               <td className="py-3">
//               NSE: 0.0311% <br />
//               BSE: 0.001%
//               </td>
//             </tr>
//             <tr className="rowColor">
//               <td className="py-3">GST</td>
//               <td className="pt-3">
//               18% on (brokerage + SEBI charges + transaction charges)
//               </td>
//               <td className="pt-3">
//               18% on (brokerage + SEBI charges + transaction charges)
//               </td>
//             </tr>
//             <tr>
//               <td className="py-3">SEBI charges</td>
//               <td className="py-3">
//               &#8377;10 &#8725; crore
//               </td>
//               <td className="py-3">
//               &#8377;10 &#8725; crore
//               </td>
//             </tr>
//             <tr className="rowColor">
//               <td className="py-3">Stamp charges</td>
//               <td className="py-3">
//               0.0001% or &#8377;10 &#8725; crore on buy side
//               </td>
//               <td className="py-3">
//               0.0001% or &#8377;10 &#8725; crore on buy side
//               </td>  
//             </tr>
//           </tbody>
//         </table>
//       </div> }



//       {activeTab == "Commodity" &&
//       <div className="row px-2">
//         <table className="table border">
//           <thead >
//             <tr >
//               <th scope="col"></th>
//               <th scope="col" className="py-3">Commodity futures</th>
//               <th scope="col" className="py-3">Commodity options</th>
//             </tr>
//           </thead>
//           <tbody className="table_row">
//             <tr>
//               <td className="py-3">Brokerage</td>
//               <td className="pt-3">	0.03% or &#8360;. 20 &#8725; executed order whichever is lower</td>
//               <td className="pt-3">
//               &#8377; 20 &#8725; executed order
//               </td>
//             </tr>
//             <tr className="rowColor">
//               <td className="py-3">STT/CTT</td>
//               <td className="pt-3">	0.01% on sell side (Non-Agri)</td>
//               <td className="pt-3">0.05% on sell side</td> 
//             </tr>
//             <tr>
//               <td className="py-4">Transaction charges</td>
//               <td className="pt-3">
//               MCX: 0.0021% <br />
// NSE: 0.0001%
//               </td>
//               <td className="pt-3">
//               MCX: 0.0418% <br />
// NSE: 0.001%
//               </td>
//             </tr>
//             <tr className="rowColor">
//               <td className="py-3">GST</td>
//               <td className="pt-3">
//               18% on (brokerage + SEBI charges + transaction charges)
//               </td>
//               <td className="pt-3">
//               18% on (brokerage + SEBI charges + transaction charges)
//               </td>
//             </tr>
//             <tr>
//               <td className="py-5">SEBI charges</td>
//               <td className="pt-3">
//               Agri: <br />
//               &#8377;1 &#8725; crore <br />
// Non-agri: <br />
// &#8377;10 &#8725; crore
//               </td>
//               <td className="pt-5">
//               &#8377;10 &#8725; crore
//               </td>
//             </tr>
//             <tr className="rowColor">
//               <td className="py-3">Stamp charges</td>
//               <td className="py-3">
//               0.002% or &#8377;200 &#8725; crore on buy side
//               </td>
//               <td className="py-3">
//               0.0003% or &#8377;300 &#8725; crore on buy side
//               </td>  
//             </tr>
//           </tbody>
//         </table>
//       </div> }
     
//      <div className="text-center fs-4 px-5"><a href="#" className="text-decoration-none tab-button" style={{color:"#387ED1"}}>Calculate your costs upfront</a> using our brokerage calculator</div>
//     </div>
//   );
// }

// export default TableQuantity;