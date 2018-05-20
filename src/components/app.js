import React from 'react'
import {
    BrowserRouter,
    Route,
    // NavLink,
    HashRouter,
    Switch
} from 'react-router-dom'
import {
    TransitionGroup,
    CSSTransition
} from 'react-transition-group'
import Header from './index/header'
import AddressErificationCode from './address/address_add/address_erification_code' // 资产中心
import BindingGa from './ga/bindingGa' // 绑定ga
import unBindingGa from './ga/unbindingGa' // 解绑ga
import UserLogin from './user/login/login'
import Verification from './user/login/verification'
import Registered from './user/login/registered'
import Findpwd from './user/login/findpwd'
import FinanceHistory from './financeHistory/financeHistory' //
import LoginState from './loginState/loginState' // 登录状态
import AddressList from './address/addressList/addressList' // 地址列表
import Assets from './assets/assets' // 资产中心
import CurrencySearch from './currency/currencySearch' // 币种search
import CurrencyMagess from './currency/currencyMagess' // 币种search详情
import CurrencyRecharge from './currency/CurrencyRecharge' // 币种充值
import CurrentEntrust from './entrust/currentEntrust' // 当前委托(委托筛选等全部界面)
import EntrustDeal from './entrust/EntrustDeal' // 部分成交页面
import UserCenter from './user/userCenter/userCenter' // 个人中心(认证和未认证状态)和高级认证点击提示
import FindpwdPassword from './user/login/forgotPassword'
import ResetPassword from './user/login/resetPassword'
import EmaillVerification from './user/login/emaillVerification'
import EditorPassword from './user/personal/editorPassword'
import 'antd-mobile/dist/antd-mobile.css'
import '../assets/css/animate.min.css'
import '../assets/font/iconfont.css'
import '../app.less'

export default (
    <TransitionGroup>
        <CSSTransition
            key={Math.random()}
            timeout={{
                enter: 500,
                exit: 0
            }}
            classNames={{
                enter: 'animated',
                enterActive: 'tada',
                exit: 'animated',
                exitActive: 'fadeOut'
            }}
        >
            <BrowserRouter>
                <div className='appRouter ov_hidden'>
                    {/*如果userState=1未登录，=2已登录*/}
                    <Header userState='1'></Header>
                    <Switch>
                        <Route path="/login-state" component={LoginState}/>
                        <Route path="/bindingGa" component={BindingGa}/>
                        <Route path="/unBindingGa" component={unBindingGa}/>
                        <Route path="/login" component={UserLogin}/>
                        <Route path="/addressList" component={AddressList}/>
                        <Route path="/assets" component={Assets}/>
                        <Route path="/user-login" component={UserLogin}/>
                        <Route path="/addresserificationcode" component={AddressErificationCode}/>
                        <Route path="/verification" component={Verification}/>
                        <Route path="/registered" component={Registered}/>
                        <Route path="/finance-history" component={FinanceHistory}/>
                        <Route path="/currencySearch" component={CurrencySearch}/>
                        <Route path="/currencyMagess" component={CurrencyMagess}/>
                        <Route path="/currencyRecharge" component={CurrencyRecharge}/>
                        <Route path="/currentEntrust" component={CurrentEntrust}/>
                        <Route path="/entrustDeal" component={EntrustDeal}/>
                        <Route path="/userCenter" component={UserCenter}/>
                        <Route path="/findpwd" component={Findpwd}/>
                        <Route path="/findpwdPassword" component={FindpwdPassword}/>
                        <Route path="/resetPassword" component={ResetPassword}/>
                        <Route path="/emaillVerification" component={EmaillVerification}/>
                        <Route path="/editorPassword" component={EditorPassword}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </CSSTransition>
    </TransitionGroup>
)