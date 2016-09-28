import { expect } from 'chai';
import counterReducer from '../../../src/dataStore/reducers/counter';
import * as counterActions from '../../../src/dataStore/actions/counter';

describe('counter reducer', ()=>{
    it('has an initial state of 0', ()=>{
        expect(counterReducer(undefined, {}).count).to.equal(0);
    });

    it('should increment its count by 1 when receiving an INCREMENT action', ()=>{
        let state = counterReducer(undefined, {});
        state = counterReducer(state, counterActions.increment());
        expect(state.count).to.equal(1);
    });

    it('should decrement its count by 1 when receiving an DECREMENT action', ()=>{
        let state = counterReducer(undefined, {});
        state = counterReducer(state, counterActions.decrement());
        expect(state.count).to.equal(-1);
    });
});