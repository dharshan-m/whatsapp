import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Link from './component/link';
import Home from './component/home';
import Profile from './component/profile';
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter,} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={App}/>
      <Route path="/link" element={<Link />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
