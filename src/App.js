import React from "react";
import "./App.css";
import Main from "./NETFLIX/mainPage/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./NETFLIX/loginPage/Login";
import Banner from "./NETFLIX/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Main />} path="/"/>
          <Route element={<Login />} path="/login" />
          <Route element={<Banner />} path="/banner" />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
