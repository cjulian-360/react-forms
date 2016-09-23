import React from 'react'

export default React.createClass({
    bar: function() {
        this.refs.input.value = "bar";
    },
    render: function() {
        return (
            <div className="my-component">
                <input ref="input" type="text" defaultValue="foo" onClick={this.bar}/>
                <div>foo</div>
            </div>
        )
    }
})
