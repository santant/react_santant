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
import UserLogin from './user/login/login' //
import LoginState from './loginState/loginState' // 登录状态
import AddressList from './address/addressList/addressList' // 地址列表和展开
import Assets from './assets/assets' // 资产中心
import AddressErificationCode from './address/address_add/address_erification_code' // 资产中心

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

                    <div className='container'>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/login-state" component={LoginState}/>
                            <Route path="/addressList" component={AddressList}/>
                            <Route path="/assets" component={Assets}/>
                            <Route path="/user-login" component={UserLogin}/>
                            <Route path="/addresserificationcode" component={AddressErificationCode}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </CSSTransition>
    </TransitionGroup>
)