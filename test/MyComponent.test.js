import { expect } from 'chai'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import jsdom from 'jsdom'
import MyComponent from '../source/MyComponent'

describe('MyComponent', ()=>{
    let renderer;
    let renderOutput;
    jsdom.env('<div id="dom"></div>', ()=>{});

    before(()=>{
        renderer = TestUtils.createRenderer();
    });
    beforeEach(()=>{
        renderer.render(<MyComponent/>)
        renderOutput = renderer.getRenderOutput();
    });

    it('renders a div', ()=>{
        expect(renderOutput.type).to.equal('div');
    });

    describe('text input field', ()=>{
        let input;

        beforeEach(()=>{
            input = Object.assign({}, renderOutput.props.children[0]);
        });

        it('renders a text input with default value of "foo"', ()=>{
            expect(input.type).to.equal('input');
            expect(input.props.type).to.equal('text');
        });
    })
});