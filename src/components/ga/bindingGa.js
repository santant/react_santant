import React from 'react'
import HanderNav from '../index/handerNav'
import ValidateCode from '../index/validateCode'
import './ga.less'

class bindingGa extends React.Component {
    render() {
        return(
            <div id='bindingGa'>
                <HanderNav noBorder isLeft titleName='BUNDING GA AUTHENTICATION' ></HanderNav>
                <ul className='progress_group'>
                    <li>
                        <b>1</b>
                        <span className='title'>Download and Install Google Authentication APP</span>
                        <div className='channel'>
                            <div className='apple'>
                                <i className='iconfont'>&#xe610;</i>App Store
                            </div>
                            <div className='google'><i className='iconfont'>&#xe78c;</i>Google Play</div>
                        </div>
                    </li>
                    <li>
                        <b>2</b>
                        <span className='title'>Use Google Authentication APP to scan or enter this code</span>
                        <div className='googleAuthentication'>
                            <div className='div_weixin'>
                                <img src={require('../../assets/images/weixinImg.jpg')} alt=""/>
                            </div>
                            <div className='code_msg'>
                                This Key will allow you to recover your Google Authentication in case of phone loss.Resetting your Google Authentication requires opening a support ticket and takes at least 7 days to process.
                            </div>
                        </div>
                        <p className='code'>GLMANTTNV756387499</p>
                    </li>
                    <li>
                        <b>3</b>
                        <span className='title'>Google Authentication Code</span>
                        <ValidateCode borderBottom='#415e6d'></ValidateCode>
                    </li>
                </ul>
                <div className='authentication'>Authentication</div>
            </div>
        )
    }
}

export default bindingGa