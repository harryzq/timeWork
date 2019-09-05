// index.js

// applyMiddleware: redux通过该函数来使用中间件
// createStore: 用于创建store实例
import { applyMiddleware, createStore } from 'redux'
// 利用redux-logger打印日志
import {createLogger} from 'redux-logger'
// 使用日志打印方法， collapsed让action折叠，看着舒服。
let loggerMiddleware = createLogger({collapsed: true});
// 中间件，作用：如果不使用该中间件，当我们dispatch一个action时，需要给dispatch函数传入action对象；但如果我们使用了这个中间件，那么就可以传入一个函数，这个函数接收两个参数:dispatch和getState。这个dispatch可以在将来的异步请求完成后使用，对于异步action很有用
import thunk from 'redux-thunk'

// 引入reducer
import reducers from './reducer.js'

// 环境
let ENV = process.env.NODE_ENV
let middleList= [thunk]
if (ENV==='development') {
  middleList.push(loggerMiddleware)
}

// 创建store实例
let store = createStore(
  reducers,
  applyMiddleware(...middleList)
)

export default store