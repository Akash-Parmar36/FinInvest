import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  productURL,
  redirectName,
}) {
  return (
         <div className="container">
                   <div className="row">
                         <div className="col-6 mt-5 px-5 pt-4">
                              <h2 className="mt-5 pt-5 px-5 mx-5 text-muted">{productName}</h2>
                              <p className="mt-4 px-5 mx-5" style={{lineHeight:"1.8rem" , fontSize:"1.1rem"}}>{productDescription}</p>
                              <a href={productURL} style={{textDecoration:"none"}} className="px-5 mx-5">{redirectName} <i className="fa-solid fa-arrow-right ms-2"></i></a>
                         </div>
                         {productName=="Console" && <div className="col-6">
                               <img src={imageURL} alt="product Image"/>
                         </div>}
                         {productName=="Kite Connect API" && <div className="col-6 mt-5 pt-5">
                               <img src={imageURL} alt="product Image"/>
                         </div>}
                   </div>
         </div>
  );
}

export default RightSection;
