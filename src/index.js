/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import timeLine from './pages/timeLine';
import newEmployee from './pages/newEmployee';
import {BrowserRouter , Route,Redirect} from 'react-router-dom'
import "antd/dist/antd.css";
import Nav from './routes/index';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import AppContainer from './containers/AppContainer'
// 环境
let ENV = process.env.NODE_ENV
if (ENV==='development') {
  // console.log(ENV)
}

// 渲染
ReactDOM.render(
  <BrowserRouter>
        <Nav/>
        <Route exact path="/timeLine" component={timeLine} />
        <Route exact path="/newEmployee" component={newEmployee} />
        <Redirect from="/*" to="/newEmployee"></Redirect>
  </BrowserRouter>,
  document.getElementById('root')
);
