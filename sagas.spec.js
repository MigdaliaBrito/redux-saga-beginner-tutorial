// SAGA TEST
import test from 'tape';

import {put, call} from 'redux-saga/effects';
import { incrementAsync, delay } from './sagas';

test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync();

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000), // saga calls delay
    );

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}) // dispatches increment action
    );


    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        // saga is done
    );


    assert.end()
  
});