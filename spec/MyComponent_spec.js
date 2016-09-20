import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import MyComponent from '../source/MyComponent'

describe('MyComponent', ()=>{
    var component;

    beforeEach(()=>{
        component = ReactTestUtils.renderIntoDocument(<MyComponent/>);
    })

    it('should be defined', ()=>{
        expect(MyComponent).toBeDefined();
    });

    it('should render the title "My App"', ()=>{
        var h1 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h1');
        expect(h1.innerHTML).toEqual('My App');
    });

    it('should render a text input', ()=>{
        var input = component.refs.input;
        expect(input.value).toEqual('foo');
    });

    it('should change text input value to "bar" on click', ()=>{
        var input = component.refs.input;
        ReactTestUtils.Simulate.click(input);
        expect(input.value).toEqual('bar');
    });
});