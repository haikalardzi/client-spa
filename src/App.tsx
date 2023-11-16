import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="login" element={<AuthPage />} />
          <Route path="register" element={<AuthPage/>}/>
          {/* <Route path="myprofile" element={<MyProfile />} />
          <Route path="product" element={<Product />} /> */}
          {/* TODO: Make a not found page (like below) */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
