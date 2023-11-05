import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Link from './component/link';
import Home from './component/home';
import Profile from './component/profile';
import Community from './component/community';
import Status from './component/status';
import Channel from './component/channel';
import Group from './component/group';
import Settings from './component/settings';
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
      <Route path="/community" element={<Community />} />
      <Route path="/status" element={<Status />} />
      <Route path="/channel" element={<Channel />} />
      <Route path="/group" element={<Group />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
