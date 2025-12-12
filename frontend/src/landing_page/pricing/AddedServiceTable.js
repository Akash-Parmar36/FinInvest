import React from 'react'



function AddedServiceTable() {
    return (
        <div className='container-lg px-4 px-lg-2 px-xl-5 pt-sm-5'>
        <div className="row pt-5 px-sm-2">
        <h2 className="col-12 px-0 mb-4 text-center text-sm-start" style={{color:"#424242" , fontSize:"1.5rem" , lineHeight:"1.4"}}>Charges for optional value added services</h2>  
        <table className="">
          <thead>
            <tr >
              <th>Service</th>
              <th>Billing Frquency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody className="table_row">
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr className="rowColor">
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Historical: 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>  
    );
}

export default AddedServiceTable;