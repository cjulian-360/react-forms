import { expect } from 'chai';
import Calculator from '../src/Calculator';
describe('Calculator', ()=>{
    it('can add two numbers', function() {
        let c = new Calculator();
        let sum = c.add(1,1);
        expect(sum).to.equal(2);
    });
    it('can subtract two numbers', function() {
        let c = new Calculator();
        let difference = c.subtract(1,1);
        expect(difference).to.equal(0);
    });
});