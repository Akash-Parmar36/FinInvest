import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row mt-5 pt-5 ms-xl-5 px-xl-5 justify-content-center">
        <div className="col-10 col-md-8 col-lg-6 mb-3 mb-lg-0 ">
          <img src="media/images/largestBroker.svg" alt="largestBroker" className="img-fluid" />
        </div>
        <div className="mt-5 pt-5 mt-lg-0 pt-lg-0 col-lg-6 ">
          <h1 className="zerodha-heading">Largest stock broker in India</h1>
          <p className="mb-5 mt-3 zerodha-subtext text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 p-0">
              <ul>
                <li>
                  <p className="zerodha-subtext text-muted">Futures and Options</p>
                </li>
                <li>
                  <p className="zerodha-subtext text-muted">Commodity derivatives</p>
                </li>
                <li>
                  <p className="zerodha-subtext text-muted">Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 p-0">
              <ul>
                <li>
                  <p className="zerodha-subtext text-muted">Stocks & IPOs</p>
                </li>
                <li>
                  <p className="zerodha-subtext text-muted">Direct mutual funds</p>
                </li>
                <li>
                  <p className="zerodha-subtext text-muted">Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="pressLogos" style={{ maxHeight:"27px" }} className="mt-4 mt-xl-5 img-fluid"/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
 

// import React from "react";

// function Awards() {
//   return (
//     <div className="container mt-5">
//       <div className="row align-items-center mt-5 justify-content-center">
//         {/* Left: Image */}
//         <div className="col-10 col-md-6 mb-4 mb-lg-0 text-center">
//           <img
//             src="media/images/largestBroker.svg"
//             alt="largestBroker"
//             className="img-fluid"
//             style={{ maxHeight: "340px" }}
//           />
//         </div>

//         {/* Right: Text and List */}
//         <div className="col-12 col-md-10 col-lg-6 text-start">
//           <h2 className="zerodha-heading">Largest stock broker in India</h2>
//           <p className="zerodha-subtext mt-3 mb-4">
//             2+ million Zerodha clients contribute to over 15% of all retail
//             order volumes in India daily by trading and investing in:
//           </p>

//           <div className="row">
//             <div className="col-6">
//               <ul className="list-unstyled">
//                 <li>Futures and Options</li>
//                 <li>Commodity derivatives</li>
//                 <li>Currency derivatives</li>
//               </ul>
//             </div>
//             <div className="col-6">
//               <ul className="list-unstyled">
//                 <li>Stocks & IPOs</li>
//                 <li>Direct mutual funds</li>
//                 <li>Bonds and Govt. Securities</li>
//               </ul>
//             </div>
//           </div>

//           <img
//             src="media/images/pressLogos.png"
//             alt="pressLogos"
//             className="img-fluid mt-4"
//             style={{ maxHeight: "27px" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Awards;
