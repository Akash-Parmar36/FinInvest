import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 ">
        <h2 className="text-center ms-5 ps-5">People</h2>
      </div>
      <div
        className="row pb-5"
        style={{ fontSize: "1.05rem", lineHeight: "1.9rem" }}
      >
        <div className="col-1"></div>
        <div className="col-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="nithinkamath"
            className="rounded-circle w-50 mb-3"
          />
          <h3 className="fs-5 mb-3 fw-normal">Nithin Kamath</h3>
          <p className="text-muted">Founder, CEO</p>
        </div>

        <div className="col-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on <b>Homepage</b> / <b>TradingQnA</b> / <b>Twitter</b></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
