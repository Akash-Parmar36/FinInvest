import React from 'react'


function AccountOpeningTable() {
    return ( 
    <div className='container-lg px-4 px-lg-2 px-xl-5 pt-sm-5'>
        <div className="row pt-5 px-sm-2 ">
        <h2 className="col-12 px-0 mb-4 text-center text-sm-start" style={{color:"#424242" , fontSize:"1.5rem" , lineHeight:"1.4"}}>Charges for account opening</h2>  
        <table>
          <thead >
            <tr >
              <th>
              Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody className="table_row">
            <tr>
              <td>Online account</td>
              <td><span className="badge text-bg-success fs-6">free</span></td>
            </tr>
            <tr className="rowColor">
              <td>Offline account</td>
              <td><span className="badge text-bg-success fs-6">free</span></td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>&#8377; 500</td>
            </tr>
            <tr className="rowColor">
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>&#8377; 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>  
    );
}

export default AccountOpeningTable;