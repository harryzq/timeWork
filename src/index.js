/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import timeLine from './pages/timeLine';
import newEmployee from './pages/newEmployee';
import {Router,BrowserRouter,Route,Redirect,HashRouter} from 'react-router-dom'
import "antd/dist/antd.css";
import Nav from './containers/layout';
import { Provider } from 'react-redux'
import store from './store'
// 环境
let ENV = process.env.NODE_ENV
if (ENV==='development') {
  // console.log('')
}

// ========================================================
// Store and History Instantiation
// ========================================================
const initialState = {};
// const store = createStore(initialState);
// const routes = require('./routes/index.js').default(store);

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');
// 渲染
ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
          <Nav/>
          <Route exact path="/timeLine" component={timeLine} />
          <Route exact path="/newEmployee" component={newEmployee} />
    </BrowserRouter>
  </Provider>
  ,
  MOUNT_NODE
);
