import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return  (
     <div className="container px-5 mb-5">
        <div className="row mt-5 pt-5 px-2 mb-5">
               <div className="col-6 ps-5 mb-5">
                   <img src={imageURL} alt="product image"/>
               </div>
               <div className="col-6 mt-5 px-5">
                    <h2 className="mx-5 px-5 text-muted">{productName}</h2>
                    <p className="mx-5 px-5 mt-4" style={{lineHeight:"1.8rem"}}>{productDescription}</p>
                    <div className="mx-5 px-5 mb-4 mt-4">
                          <a href={tryDemo} className="me-5 pe-5" style={{textDecoration:"none"}}>Try demo <i className="fa-solid fa-arrow-right"></i></a>
                          <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mx-5 px-5">
                          <a href={googlePlay} className="me-5"><img src="media/images/googlePlayBadge.svg" /></a>
                          <a href={appStore}><img src="media/images/appstoreBadge.svg" /></a>
                    </div>
                     

               </div>
        </div>
     </div>
  );
}

export default LeftSection;
