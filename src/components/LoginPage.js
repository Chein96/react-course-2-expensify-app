import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
        Welcome to the Expensify App
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDisaptchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDisaptchToProps)(LoginPage);