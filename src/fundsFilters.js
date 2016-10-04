import React from 'react';
import Dropdown from 'react-dropdown';
import Input from 'react-input';
import '../sass/dropdown.scss';

let yearOptions = [
    { value: '2015', label: '2015' },
    { value: '2016', label: '2016' }
];

let fundsOptions = [
    { value: 'some Fund', label: 'some Fund' },
    { value: 'lots of money', label: 'lots of money' }
];

class FundsFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="funds-filters">
            <h3>FundsFilters</h3>
            <div className="fund-year-dropdown dropdown-wrapper">
                <div>Fund Year</div>
                <Dropdown options={yearOptions} value="-" placeholder="Select an option" />
            </div>

            <div className="fund-name-dropdown dropdown-wrapper">
                <div>Fund</div>
                <Dropdown options={fundsOptions} value="sdfsdf" placeholder="Select an option" />
            </div>

            <div className="fund-name-dropdown dropdown-wrapper">
                <div>Trade Customer</div>
                <Input fields={[{key: "search", placeholder: 'Ender a Trade Customer Number'}]}/>
            </div>
          </div>
      );
    }
}

export default FundsFilters;