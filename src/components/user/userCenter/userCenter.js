import React from 'react'
import HanderNav from '../../index/handerNav'
import {Icon} from 'antd-mobile'
import './usercenters.less'
import ServerApi from "../../api";

class UserCenter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nuserName:'',
            email:'',
            status:'',
            ipList:[],
            firstIp:{
                created_at:'',
                ip_address:''
            },
            modelFixed: false // 遮照是否隐藏
        }
    }

    componentDidMount() {
        ServerApi.user.getUserstatus(null).then(res => {
            let result = res.data.data;
                this.setState({
                    nuserName: result.username,
                    email: result.email,
                    status: result.identity_state
                })

        })

        ServerApi.user.getIplist(null).then(res => {
            let result = res.data.data;
            if(result&&result.length>0){
                let resultData = [];
                for (let i = 0, len = result.length; i < len; i++) {
                    resultData.push({
                        "created_at": this.timestampToTime(result[i].created_at),
                        "type": result[i].type,
                        "ip_address": result[i].ip_address,
                        'extra': result[i].extra.location
                    });
                }
                this.setState({
                    ipList:[...resultData],
                    firstIp:{
                        created_at:resultData[0].created_at,
                        ip_address:resultData[0].ip_address,
                    }
                })
            }
        })

    }

    submit() {
        alert('1')
    }

    modelFixedChange() { // 隐藏显示遮照
        this.setState({
            modelFixed: !this.state.modelFixed
        })
    }
    timestampToTime = (timestamp) => {
        let date = new Date(timestamp);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return Y + '/' + M + '/' + D  + '   ' + h +  m + s;
    }

    render() {
        let {ipList,firstIp}=this.state;
        return (
            <div id='userCenter'>
                <HanderNav titleName='ACCOUNT'></HanderNav>
                <div className="userInfo">
                    <p className="userName">{this.state.nuserName}

                        <span style={{display:this.state.status!=='pass'?'block':'none'}}>{this.state.status} <i className='iconfont'>&#xe79a;</i></span>
                        <span style={{display:this.state.status==='pass'?'block':'none'}} className='status_ok'> <i className='iconfont'>&#xe67e;</i>Certified</span>
                    </p>
                    <p className="userEmail">E-mail：{this.state.email}</p>
                    <p className='userAddress'><i className='iconfont'>&#xe61f;</i>
                            Recent landing time：{firstIp.created_at}IP：{firstIp.ip_address}

                        </p>
                </div>
                <ul onClick={this.modelFixedChange.bind(this)} className='item_group'>
                    <li>
                        <img src={require('./image/rezheng01.png')} alt=""/>
                        <span className='item_center'>Sign In Password</span>
                        <span className='right'>change <i className='iconfont'>&#xe79a;</i></span>
                    </li>
                    <li className="gray">
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
                    {ipList && ipList.length > 0 ? ipList.map((item, index) =>
                        <li key={index}>
                            <span>IP:{item.ip_address}（ <i className='iconfont'>&#xe61f;</i>{item.extra}）</span>
                            <p>2018-01-23 15:52:03 {item.type}</p>
                        </li>
                    ) : ''}
                    {/*<li>*/}
                        {/*<span>IP:162.219.122.32（ <i className='iconfont'>&#xe61f;</i>Los Angeles United States）</span>*/}
                        {/*<p>2018-01-23 15:52:03 Login success</p>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<span>IP:162.219.122.32（ <i className='iconfont'>&#xe61f;</i>Los Angeles United States）</span>*/}
                        {/*<p>2018-01-23 15:52:03 Login success</p>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<span>IP:162.219.122.32（ <i className='iconfont'>&#xe61f;</i>Los Angeles United States）</span>*/}
                        {/*<p>2018-01-23 15:52:03 Login success</p>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<span>IP:162.219.122.32（ <i className='iconfont'>&#xe61f;</i>Los Angeles United States）</span>*/}
                        {/*<p>2018-01-23 15:52:03 Login success</p>*/}
                    {/*</li>*/}
                </ol>
                <div className={
                    !this.state.modelFixed ? 'modelFixed modelFixedHide' : 'modelFixed'
                }>
                    <div className='Fixed_box'>
                        <Icon  onClick={this.modelFixedChange.bind(this)}  className='close' type="cross"/>
                        <img src={require('./image/rezheng01_max.png')} alt=""/>
                        <p>请前往Fcoin官网完成高级认证</p>
                        <div className='submit'>Submit</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCenter