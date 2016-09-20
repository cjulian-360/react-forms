import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import MyStatelessComponent from '../source/MyStatelessComponent'

describe('MyStatelessComponent', ()=>{
    var result;

    beforeEach(()=>{
        var renderer = ReactTestUtils.createRenderer();
        renderer.render(<MyStatelessComponent/>);
        result = renderer.getRenderOutput();
        // console.log(JSON.stringify(result));
    });

    it('should render in a div', ()=>{
        expect(result.type).toEqual('div');
    });

    it('should have the class "hello"', ()=>{
        expect(result.props.className).toEqual('hello');
    });
});