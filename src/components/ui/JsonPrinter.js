import React from 'react';

export default class MyComponent extends React.Component {
    render() {
        return (
            <div className="json-printer">
                { JSON.stringify(this.props.state) }
            </div>
        );
    }
}
