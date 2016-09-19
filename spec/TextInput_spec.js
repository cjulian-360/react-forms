import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import TextInput from '../source/TextInput'

describe('TextInput', ()=>{
    var component;

    beforeEach(()=>{
        component = ReactTestUtils.renderIntoDocument(<TextInput/>);
    })

    it('should be defined', ()=>{
        expect(TextInput).toBeDefined();
    });

    it('should render the title "My App"', ()=>{
        var h1 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h1');
        expect(h1.innerHTML).toEqual('My App');
    });

});