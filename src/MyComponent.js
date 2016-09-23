import React from 'react'

export default class MyComponent extends React.Component {
    render() {
        return (
            <div className="my-component">
                <input ref="input" type="text" defaultValue="foo" onClick={this.bar.bind(this)}/>
            </div>
        )
    }
    bar() {
        this.refs.input.value = "bar";
    }
}
