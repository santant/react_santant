import React from 'react'
import HanderNav from '../index/handerNav'
// import Sidebar from './sidebar'
import {Tabs, Badge} from 'antd-mobile';
import './entrusts.less'
import {Drawer, List} from 'antd-mobile'

const tabs = [
    {title: <Badge>OPEN ORDERS</Badge>},
    {title: <Badge>ORDER HISTORY</Badge>}
]

class currentEntrust extends React.Component {
    state = {
        open: false
    }

    onOpenChange() {
        console.log(this.state.open)
        this.setState({open: !this.state.open})
    }
    render() {
        const sidebar = (
            <div id='sidebar'>
                <div className='orderState'>
                    Order State
                </div>
                <ul className='btn_box_curess'>
                    <li className='active_li'>Buy</li>
                    <li>Sell</li>
                    <li>Sell</li>
                </ul>
                <dl className='search_input'>
                    <dd className='title_search'>
                        pairs
                    </dd>
                    <dt>

                    </dt>
                </dl>
            </div>
        )
        return (
            <div id='currentEntrust'>
                <HanderNav msg={this.onOpenChange.bind(this)} noBorder titleName='ORDER'>
                    <i style={{fontSize: '20px', top: '0px'}}
                       className='iconfont iconright'>&#xe60c; Filter</i>
                </HanderNav>
                <Tabs tabs={tabs}
                      initialPage={0}
                      tabBarBackgroundColor='#2e3d45'
                      tabBarActiveTextColor='#fff'
                      tabBarInactiveTextColor='#7391a1'
                      onChange={(tab, index) => {
                          console.log('onChange', index, tab);
                      }}
                      onTabClick={(tab, index) => {
                          console.log('onTabClick', index, tab);
                      }}
                >
                </Tabs>
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
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='cancel'>
                        <span></span>
                        <span>Cancel</span>
                    </li>
                </ul>
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
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='cancel'>
                        <span></span>
                        <span>Cancel</span>
                    </li>
                </ul>
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
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='cancel'>
                        <span></span>
                        <span>Cancel</span>
                    </li>
                </ul>
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
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='cancel'>
                        <span></span>
                        <span>Cancel</span>
                    </li>
                </ul>
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
                        <span>executed(SMT)</span>
                        <span>1273.999</span>
                    </li>
                    <li className='cancel'>
                        <span></span>
                        <span>Cancel</span>
                    </li>
                </ul>
                <Drawer
                    className={
                        this.state.open ? 'my-drawer dis' : 'my-drawer'
                    }
                    style={{minHeight: document.documentElement.clientHeight}}
                    enableDragHandle
                    position='right'
                    sidebar={sidebar}
                    contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange.bind(this)}
                >
                    <i></i>
                </Drawer>


            </div>
        )
    }
}

export default currentEntrust