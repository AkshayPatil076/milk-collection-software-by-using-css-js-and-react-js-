import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {useHistory} from 'react-router-use-history'
import Login from './page/Login';
import Homepage from './page/Homepage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

