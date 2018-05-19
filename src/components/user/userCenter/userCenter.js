import React from 'react'
import HanderNav from '../../index/handerNav'
import {Icon} from 'antd-mobile';
import './usercenters.less'

class UserCenter extends React.Component {
    render() {
        return (
            <div id='userCenter'>
                <HanderNav titleName='ACCOUNT'></HanderNav>
                <div className="userInfo">
                    <p className="userName">Jennifer Lawrence
                        {/*<span>Uncertified <i className='iconfont'>&#xe79a;</i></span>*/}
                        <span className='status_ok'> <i className='iconfont'>&#xe67e;</i>Certified</span>
                    </p>
                    <p className="userEmail">E-mail：kianaliu00g@outlook.com</p>
                    <p className='userAddress'><i className='iconfont'>&#xe61f;</i> Recent landing time：2018-03-08
                        IP：162.219.122.32</p>
                </div>
                <ul className='item_group'>
                    <li>
                        <img src={require('./image/rezheng01.png')} alt=""/>
                        <span className='item_center'>Sign In Password</span>
                        <span className='right'>change <i className='iconfont'>&#xe79a;</i></span>
                    </li>
                    <li>
                        <img src={require('./image/rezheng02.png')} alt=""/>
                        <span className='item_center'>API  setting</span>
                        <span className='right'>Setting <i className='iconfont'>&#xe79a;</i></span>
                    </li>
                    <li>
                        <img src={require('./image/rezheng03.png')} alt=""/>
                        <span className='item_center'>Google Authentication</span>
                        <span className='right'>Enble <i className='iconfont'>&#xe79a;</i></span>
                    </li>
                </ul>
                <ol className='addrss_ip_list'>
                   <li>
                       <span>IP:162.219.122.32（ <i className='iconfont'>&#xe61f;</i>Los Angeles United States）</span>
                       <p>2018-01-23  15:52:03   Login success</p>
                   </li>
                    <li>
                        <span>IP:162.219.122.32（ <i className='iconfont'>&#xe61f;</i>Los Angeles United States）</span>
                        <p>2018-01-23  15:52:03   Login success</p>
                    </li>
                    <li>
                        <span>IP:162.219.122.32（ <i className='iconfont'>&#xe61f;</i>Los Angeles United States）</span>
                        <p>2018-01-23  15:52:03   Login success</p>
                    </li>
                    <li>
                        <span>IP:162.219.122.32（ <i className='iconfont'>&#xe61f;</i>Los Angeles United States）</span>
                        <p>2018-01-23  15:52:03   Login success</p>
                    </li>
                </ol>
                <div className='modelFixed'>

                </div>
            </div>
        )
    }
}

export default UserCenter