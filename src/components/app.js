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
                            <Route path="/user-login" component={UserLogin}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </CSSTransition>
    </TransitionGroup>
)
