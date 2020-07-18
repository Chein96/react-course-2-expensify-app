import authReducer from '../../reducers/auth';

test('Should set default state', () => {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
});

test('Should set uid from login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('Should remove uid from logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: '123' }, action);
    expect(state).toEqual({});
});