import React from 'react'
import {Tabs, Badge} from 'antd-mobile';
import './finance.less'

const tabs = [
    {title: <Badge>DEPOSIT</Badge>},
    {title: <Badge>WITHDRAWAL</Badge>},
    {title: <Badge>DETALLS</Badge>},
]
class financeHistory extends React.Component {

    render() {

        return (
            <div id='financeHistory'>
                <div className="history_title">
                    HISTORY
                </div>
                <Tabs tabs={tabs}
                      initialPage={0}
                      tabBarBackgroundColor='#2e3d45'
                      tabBarActiveTextColor='#fff'
                      tabBarInactiveTextColor='#7391a1'
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                </Tabs>
                <div className='tabs_content'>
                   <div className='content_padding'>
                       <div className='time_status'>
                           <span>28/03/18  18:35:35</span>
                           <span>In Review</span>
                       </div>
                       <p className='price'>USDT 2000.0000</p>
                       <p className='key'>Address:1NKwUjGw1rqacC8ymk61pq1NKwUjGw1rq</p>
                       <p className='key_msg'>小金的神操作无敌风火轮钱包地址</p>
                   </div>
                    <div className='content_padding'>
                        <div className='time_status'>
                            <span>28/03/18  18:35:35</span>
                            <span>In Review</span>
                        </div>
                        <p className='price'>USDT 2000.0000</p>
                        <p className='key'>Address:1NKwUjGw1rqacC8ymk61pq1NKwUjGw1rq</p>
                        <p className='key_msg'>小金的神操作无敌风火轮钱包地址</p>
                    </div>
                    <div className='content_padding'>
                        <div className='time_status'>
                            <span>28/03/18  18:35:35</span>
                            <span>In Review</span>
                        </div>
                        <p className='price'>USDT 2000.0000</p>
                        <p className='key'>Address:1NKwUjGw1rqacC8ymk61pq1NKwUjGw1rq</p>
                        <p className='key_msg'>小金的神操作无敌风火轮钱包地址</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default financeHistory