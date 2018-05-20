import React from 'react'
import HanderNav from '../index/handerNav'
import ValidateCode from '../index/validateCode'
import './ga.less'

class unBindingGa extends React.Component {
    render() {
        return(
            <div id='unBindingGa'>
                <HanderNav noBorder isLeft titleName='UNBUNDING GA AUTHENTICATION' ></HanderNav>
                <div className='VerificationName'>
                    GA Verification
                </div>
                <ValidateCode classText='Verification' borderBottom='#283e4a'></ValidateCode>
                <input className='signPassword' placeholder='Sign In Password' type="password"/>
                <div className='submit'>Submit</div>
            </div>
        )
    }
}

export default unBindingGa