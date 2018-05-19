import React from 'react'
import HanderNav from '../index/handerNav'
import './entrusts.less'


class EntrustDeal extends React.Component {
    render() {
        return (
            <div id='EntrustDeal'>
                <HanderNav  isLeft titleName='ORDER HISTORY'>

                </HanderNav>

                <ul className='tab_box'>
                    <li className='item_tab'>
                        <span><b>Buy</b>SMT/USDT</span>
                        <span className='time'>28/03/18  18:35:35</span>
                    </li>
                    <li className='tab'>
                        <span>price(SMT)</span>
                        <span>0.073999</span>
                    </li>
                    <li className='tab'>
                        <span>amount(SMT)</span>
                        <span>11.173.999</span>
                    </li>
                    <li className='tab'>
                        <span>Total(SMT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='tab'>
                        <span>Average Price(USDT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='tab'>
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                </ul>
                <ul className='tab_box'>

                    <li className='tab'>
                        <span>Date</span>
                        <span>0.073999</span>
                    </li>
                    <li className='tab'>
                        <span>price(SMT)</span>
                        <span>0.073999</span>
                    </li>
                    <li className='tab'>
                        <span>amount(SMT)</span>
                        <span>11.173.999</span>
                    </li>
                    <li className='tab'>
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                </ul>
                <div className="data_length_null">
                    <img src={require('./data_length_null.png')} alt=""/>
                </div>

            </div>
        )
    }
}

export default EntrustDeal