import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container m-4 p-4">
      <div className="row p-5">
               <div className="col-2"></div>
               <div className="col-4 mt-5 pt-5">
                     <h1 className=" text-muted mt-5 pt-5 fs-4">404</h1>
                     <h1 className="mt-4" style={{color:"#333333"}}>Kiaan couldn’t find that page</h1>
                     <h2 className="mt-3 fs-5 text-muted">We couldn’t find the page you were looking for. Visit <Link className="text-decoration-none" to={"/"}>Zerodha’s home page</Link></h2>
               </div>
               <div className="col-1"></div>
               <div className="col-5" >
                  <img src="media/images/kiaan404.jpg" alt="kiaana" />
               </div>
      </div>
    </div>
  );
}

export default NotFound;
