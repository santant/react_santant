import React from 'react'
import './currency.less'
import { Icon } from 'antd-mobile';

class currencySearch extends React.Component {

    render() {
        return (
            <div id='currencySearch'>
                <div className='search_box'>
                    <dl className=''>
                        <dd>
                            <input placeholder='search' type="text"/>
                            <Icon  type="search" />
                        </dd>
                        <dt>
                            BTC
                        </dt>
                        <dt>
                            BTH
                        </dt>
                        <dt className='data_length_null'>
                            <img src={require('../../assets/images/data_length_null.png')} alt=""/>
                        </dt>
                    </dl>
                </div>
            </div>
        )
    }
}

export default currencySearch