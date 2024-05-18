import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./component/Login/Login";
import SignupPage from "./component/signup/signup";
import AdminPannel from "./component/AdminPannel/AdminPannel";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/admin-panel" element={<AdminPannel/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;