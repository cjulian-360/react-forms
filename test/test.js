import { expect } from 'chai'
describe('Array', ()=>{
    describe('#indexOf()', ()=>{
        it('should return -1 when the value is not present', function() {
            expect([1,2,3].indexOf(4)).to.equal(-1);
        });
    });
});

import Calculator from '../source/Calculator'
describe('Calculator', ()=>{
    it('should add two numbers', function() {
        let c = new Calculator();
        let sum = c.add(1,1);
        let difference = c.add(1,1);
        expect(sum).to.equal(2);
        expect(difference).to.equal(0);
    });
});