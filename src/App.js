import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import background from "./background.jpg";
import Display from "./Component/Display";
import NavBar from "./Component/NavBar";
import Faq from "./Component/Faq";
import FileUpload from "./Component/FileUpload";

function App() {
  return (
    <div>
      <img id="image" alt="" src={background}></img>
      <BrowserRouter>
        <NavBar className="header"></NavBar>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/display" element={<Display />}></Route>
          <Route path="/Faq's" element={<Faq />}></Route>
          <Route path="/FileUpload" element={<FileUpload />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
