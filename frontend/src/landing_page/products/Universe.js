import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5">
        <p className="mt-5 fs-2 fw-medium text-muted">The Zerodha Universe</p>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            className=""
            style={{ width: "50%" }}
          />
          <p className="mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5 ps-5">
          <img
            src="media/images/sensibullLogo.svg"
            className=""
            style={{ width: "60%" }}
          />
          <p className="pt-2 mt-4 text-muted" style={{ fontSize: "0.9rem" }}>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 mt-4 pt-3">
          <img
            src="media/images/tijori.svg"
            className=""
            style={{ width: "40%" }}
          />
          <p className="mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/images/streakLogo.png"
            className=""
            style={{ width: "50%" }}
          />
          <p className="mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 mt-5 ps-5">
          <img
            src="media/images/smallcaseLogo.png"
            className=""
            style={{ width: "60%" }}
          />
          <p className="pt-2 mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-4 pt-3">
          <img
            src="media/images/dittoLogo.png"
            className=""
            style={{ width: "35%" }}
          />
          <p className="mt-4 pt-2 text-muted" style={{ fontSize: "0.9rem" }}>
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
        <Link to="/signup" ><button className='btn text-white fs-5 mb-5 mt-5' style={{width:"17%",margin:"0 auto",backgroundColor:"#387ED1"}}>Sign up for free</button></Link>
      </div>
    </div>
  );
}

export default Universe;
