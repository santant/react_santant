import React from 'react'
import {
    Link
} from 'react-router-dom'
import './loginstate.less'

class LoginState extends React.Component {
    render() {
        return (
            <div id='LoginState' className='LoginState'>
                <ul className='login_state_group'>
                    <li><Link to=''>sign in</Link></li>
                  <li>sign up</li>
                </ul>
                <div className='userInfo'>
                  <p className='userName'>Jennifer Lawrence</p>
                  <p className='userEmail'>E-mail：kianaliu00g@outlook.com</p>
                </div>
                <div className='list-group'>
                    <ol>
                        <li className='active'>
                            Home
                        </li>
                        <li>
                            Exchange
                        </li>
                        <li>
                            FT White paper
                        </li>
                    </ol>
                </div>
                <div className='LogOut'>
                    Log Out
                </div>
            </div>
        )
    }
}

export default LoginState