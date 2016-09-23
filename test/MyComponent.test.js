import { expect } from 'chai'
import React from 'react'
import { shallow, mount } from 'enzyme'
import MyComponent from '../source/MyComponent'
import jsdom from 'jsdom'

describe('MyComponent', ()=>{
    const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.document = doc;
    global.window = doc.defaultView;
    let wrapper = mount(<MyComponent/>);

    it('renders', ()=>{
        expect(wrapper.find('div.my-component')).to.have.length(1);
    });

    it('contains an text input field', ()=>{
        expect(wrapper.find('input[type="text"]')).to.have.length(1);
    });

    describe('text input field', ()=>{
        let input;

        beforeEach(()=>{
            wrapper = mount(<MyComponent/>);
            input = wrapper.find('input[type="text"]');
        });

        it('renders', ()=>{
            expect(input).to.exist;
        });

        it('has a default value of "foo"', ()=>{
            expect(input.node.value).to.equal('foo');
        });

        it('has a value of "bar" after being clicked', ()=>{
            input.simulate('click');
            expect(input.node.value).to.equal('bar');
        });
    })
});