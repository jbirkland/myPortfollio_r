import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'Header'
import Footer from 'Footer'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <div> 
    <Header/>,
    <App />,
    <Footer/>,
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

