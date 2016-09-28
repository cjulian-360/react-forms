import { expect } from 'chai';
import * as counter from '../../../src/dataStore/actions/counter';

describe('counter actions', ()=>{
    describe('increment', ()=>{
       it('is a function that returns an INCREMENT action type', ()=>{
           expect(typeof counter.increment).to.equal('function');
           expect(counter.increment().type).to.equal(counter.actionTypes.INCREMENT);
       });
    });
    describe('decrement', ()=>{
        it('is a function that returns an DECREMENT action type', ()=>{
            expect(typeof counter.decrement).to.equal('function');
            expect(counter.decrement().type).to.equal(counter.actionTypes.DECREMENT);
        });
    });
});