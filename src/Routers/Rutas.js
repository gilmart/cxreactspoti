import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../Home/Home.js";

export function Rutas() {
  return (

    <div>
       
       <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}