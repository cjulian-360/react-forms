import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid';
import FundsFilters from './fundsFilters';
//import data from './stub';
import { connect } from "react-redux";
 
import { fundsFetch } from "./dataStore/actions/funds";

@connect((store) => {
  return {
    data: store
  };
})
class Funds extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
      this.props.dispatch(fundsFetch())
    }

    render() {
      console.log(this.props);
        return (
          <div >
            <FundsFilters/>
            <Grid data={this.props.data} />
          </div>
      );
    }
}

export default Funds;