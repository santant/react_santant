import axios from 'axios'
import qs from 'qs'

const HSOT = 'https://exchange-sandbox.fcoin.com/api/'
const LOGIN = 'https://uc-api-sandbox.fcoin.com/users/v1/dev/login'
axios.defaults.retry = 0;
axios.defaults.retryDelay = 1000;
axios.defaults.timeout = 500000;
var loadinginstace
const URL = 'http://beta.artup.com/artup-build/builder/sku.do?format=json&ignore=true&client=pc&category=xiaoshiguang&parameter=xiaoshiguang.xiaoshiguang.blue.170X235.32'
axios.interceptors.request.use(config => {
    let userTocken = sessionStorage.getItem('token') || '';
    config.headers['Content-Type'] = 'application/json';
    // config.headers.Authorization = userTocken;
    // config.headers.cache = false;
    return config
}, error => {
    alert('加载超时')

    return Promise.reject(error)
});

axios.interceptors.response.use(function (data) {
    return data
}, function axiosRetryInterceptor(err) {
    console.log('ssss=', err)
    var config = err.config;
    alert('加载失败')
    // 设置变量以跟踪重试计数 如果配置不存在，或者重试选项没有设置，则拒绝
    if (!config || !config.retry) return Promise.reject(err);

    // 或者重试选项没有设置，则拒绝
    config.__retryCount = config.__retryCount || 0;

    // 检查我们是否已经完成了重试的总数
    if (config.__retryCount >= config.retry) {

        return Promise.reject(err);
    }

    // 增加重试计数
    config.__retryCount += 1;

    // 创造新的承诺来处理指数回退
    var backoff = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, config.retryDelay || 1);
    });

    // 返回让axios重新尝试请求的承诺
    return backoff.then(function () {
        return axios(config);
    });
});

export default {
    logoin: (data) => {
        return axios.post(LOGIN, data)
    }

}