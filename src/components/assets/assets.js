import React from 'react'
<<<<<<< HEAD

import {Icon, Checkbox} from 'antd-mobile';
=======
import ServerApi from './../api'
import { Icon, Checkbox} from 'antd-mobile';
>>>>>>> bd8f450c44165aab024f03e0d2d4a0bfae2dd8fc
import './assetslist.less'

class Assets extends React.Component {
<<<<<<< HEAD
    componentDidMount() {

    }

=======
    constructor(props){
        super(props)
    }
    componentDidMount = () => {
        ServerApi.assets.get_assets(null).then(res=>{
            console.log('assets',res)
        })
    }
>>>>>>> bd8f450c44165aab024f03e0d2d4a0bfae2dd8fc
    render() {
        return (
            <div id='assets'>
                <div className='titleName'>
                    <span>ASSETS</span>
                    <img src={require('./image/pieChart.png')} alt=""/>
                    <img className='img_address' src={require('./image/addressList.png')} alt=""/>
                </div>
                <div className='price'>
                    <span className='Value'>Estimated Value</span>
                    <span className='btc'>15.10768112 BTC</span>
                    <span className='usd'>$170982.87 USD</span>
                </div>
                <div className='assets-list'>
                    <dl>
                        <dd className='title-search'>
                            <Checkbox></Checkbox>
                            <span>Hide 0 Balances</span>
                            <Icon className='search' type="search"/>
                        </dd>
                        <dt className='price-title'>
                            <span className="title">Coin</span>
                            <span className="title">可用</span>
                            <span className="title">冻结</span>
                        </dt>
                        <dt className='price-number'>
                            <span className="number number_name">USDT</span>
                            <span className="number">90.98299345</span>
                            <span className="number">90.98299345</span>
                        </dt>
                        <dt className='price-number'>
                            <span className="number number_name">USDT</span>
                            <span className="number">90.98299345</span>
                            <span className="number">90.98299345</span>
                        </dt>
                        <dt className='price-number'>
                            <span className="number number_name">USDT</span>
                            <span className="number">90.98299345</span>
                            <span className="number">90.98299345</span>
                        </dt>
                    </dl>
                </div>
            </div>
        )
    }
}

export default Assets