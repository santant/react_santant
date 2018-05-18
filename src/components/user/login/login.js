import React from 'react'
import './user.less'
import verifyURL1 from './images/verify01.png';
import verifyURL2 from './images/verify02.png';


class Login extends React.Component {
    render() {
        return (
            <div className='login'>
                <div className="login-box">
                    <div className="login-title">
                        Sign in to FCoin
                    </div>
                    <ul className="login-form">
                        <li className="change">
                            <span className="login-regular-default">Username or Email</span>
                            <div className="login-box">
                                <input type="text" name="nsername" value="" placeholder="Username or Email" className="login-input"/>
                                <span className="forgot">Forgot?</span>
                            </div>

                        </li>
                        <li>
                            <span className="login-regular-active">Password</span>
                            <div className="login-box">
                                <input type="password" name="password" value="" placeholder="Password" className="login-input"/>

                            </div>

                        </li>
                    </ul>
                    <div className="login-verify">
                        Click the button to verify
                        <div className="left">
                            <img src={verifyURL1 } />
                        </div>
                        <div className="right">
                            <img src={verifyURL2 } />
                        </div>
                    </div>
                    <button className="login-btn">Sign in</button>
                </div>
                <div className="accoun">Create an account</div>
            </div>
        )
    }
}
export default Login