import React from "react";

function DematAMC() {
  return (
    <div className="container-lg px-4 px-lg-2 px-xl-5 pt-sm-5">
      <div className="row pt-5 px-sm-2">
        <h2
          className="col-12 px-0 mb-4 text-center text-sm-start"
          style={{ color: "#424242", fontSize: "1.5rem", lineHeight: "1.4" }}
        >
          Demat AMC (Annual Maintenance Charge)
        </h2>
        <table>
          <thead>
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>
          <tbody className="table_row">
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span className="badge text-bg-success fs-6">free</span>
              </td>
            </tr>
            <tr className="rowColor">
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quartlerly</td>
            </tr>
          </tbody>
        </table>
        <p className="DematAMC_p px-0 fw-medium">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA, &nbsp;
                    <a
                      href="#"
                      className="text-decoration-none fw-medium"
                      style={{ color: "#387DE1"}}
                    >
                      Click here.
                    </a>
        </p>
      </div>
    </div>
  );
}

export default DematAMC;
