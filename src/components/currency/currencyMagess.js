import React from 'react'
import HanderNav from '../index/handerNav'
import './currency.less'

class currencyMagess extends React.Component {

    render() {
        return (
            <div id='currencyMagess'>
                <HanderNav isLeft titleName='BHC' address></HanderNav>
                <div className="price">
                    <span className="Value">Estimated Value</span>
                    <span className="btc">15.10768112 BTC</span>
                    <span className="usd">$170982.87 USD</span>
                </div>
                <div className='price_msg'>
                    <ul>
                        <li>
                            <span>可用</span>
                            <p>0.103777347</p>
                        </li>
                        <li>
                            <span>冻结</span>
                            <p>0.2877347</p>
                        </li>
                    </ul>
                    <div className='btn_box'>
                        <div>Deposit</div>
                        <div>Withdraw</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default currencyMagess