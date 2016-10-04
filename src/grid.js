import React from 'react';

class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      let data = this.props.data;
        return (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>TC Name</th>
                <th>TC</th>
                <th>Fund</th>
                <th>funds accrued</th>
                <th>funds paid</th>
                <th>F Pending</th>
                <th>Funds Available</th>
                <th>F withheld</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((tc) => tc.funds.map((fund) =>{
                  return (
                    <tr>
                      <th scope="row">1</th>
                      <th>{tc.TCName}</th>
                      <th>{tc.TCId}</th>
                      <th>{fund.fundName}</th>
                      <th>{fund.fundDetails.fundsAccrued}</th>
                      <th>{fund.fundDetails.fundsPaid}</th>
                      <th>{fund.fundDetails.FPending}</th>
                      <th>{fund.fundDetails.FundsAvailable}</th>
                      <th>{fund.fundDetails.Fwithheld}</th>
                      <th>{fund.fundDetails.currentAccrualRate}</th>
                    </tr>
                  );
                }
                  
              ))}


            </tbody>
          </table>
      );
    }
}

export default Grid;