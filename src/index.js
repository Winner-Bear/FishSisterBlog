import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Weixin from './Weixin';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter>
    <Routes>
      //默认首页
      <Route path="/" element={<App />}/>
      //一个张微信好友二维码页面
      <Route path="/weixin" element={<Weixin />}/>
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
