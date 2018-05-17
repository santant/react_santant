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
import Index from './index/index'
import Home from './home/index'
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
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/" component={Index}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </CSSTransition>
    </TransitionGroup>
)
