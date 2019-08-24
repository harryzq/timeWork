import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import timeLine from './timeLine';
import newEmployee from './newEmployee';
import {BrowserRouter , Route} from 'react-router-dom'
import "antd/dist/antd.css";
import Nav from './routes/index';
ReactDOM.render(
  <BrowserRouter>
        <Nav/>
        <Route exact path="/" component={App} />
        <Route  path="/timeLine" component={timeLine} />
        <Route  path="/newEmployee" component={newEmployee} />
  </BrowserRouter>,
  document.getElementById('root')
);
