import React from 'react'
import {
    BrowserRouter,
    Route,
    // NavLink,
    Switch
} from 'react-router-dom'
import {
    TransitionGroup,
    CSSTransition
} from 'react-transition-group'
import Header from './index/header'
import Home from './home/index'
import UserLogin from './user/login/login'
import Verification from './user/login/verification'
import Registered from './user/login/registered'
import FindpwdPassword from './user/login/forgotPassword'
import ResetPassword from './user/login/resetPassword'
import EmaillVerification from './user/login/emaillVerification'
import EditorPassword from './user/personal/editorPassword'

import LoginState from './loginState/loginState'
import AddressList from './address/addressList/addressList'
import Assets from './assets/assets'
import 'antd-mobile/dist/antd-mobile.css'

import '../assets/css/animate.min.css'
import '../app.less'

export default (
    <TransitionGroup>
        <CSSTransition
            key={Math.random()}
            timeout={{
                enter: 500,
                exit: 0
            }}
            classNames={{
                enter: 'animated',
                enterActive: 'tada',
                exit: 'animated',
                exitActive: 'fadeOut'
            }}
        >
            <BrowserRouter>

                <div className='appRouter'>
                    <Header></Header>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/login-state" component={LoginState}/>
                            <Route path="/addressList" component={AddressList}/>
                            <Route path="/assets" component={Assets}/>
                            <Route path="/login" component={UserLogin}/>
                            <Route path="/verification" component={Verification}/>
                            <Route path="/registered" component={Registered}/>
                            <Route path="/findpwdPassword" component={FindpwdPassword}/>
                            <Route path="/resetPassword" component={ResetPassword}/>
                            <Route path="/emaillVerification" component={EmaillVerification}/>
                            <Route path="/editorPassword" component={EditorPassword}/>
                        </Switch>
                </div>
            </BrowserRouter>
        </CSSTransition>
    </TransitionGroup>
)