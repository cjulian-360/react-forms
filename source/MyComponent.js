import React from 'react'

export default React.createClass({
    bar: function() {
        this.refs.input.value = "bar";
    },
    render: function() {
        return (
            <div>
                <h1>My App</h1>
                <ul>
                    <li>hello</li>
                </ul>
                <input ref="input" type="Text" defaultValue="foo" onClick={this.bar}/>
            </div>
        )
    }
})
