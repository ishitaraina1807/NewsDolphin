import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="general" />} />
          <Route exact path="/Business" element={<News key="business" pageSize={6} country="in" category="business" />} />
          <Route exact path="/Health" element={<News key="health" pageSize={6} country="in" category="health" />} />
          <Route exact path="/Sports" element={<News key="sports" pageSize={6} country="in" category="sports" />} />
          <Route exact path="/Science" element={<News key="science" pageSize={6} country="in" category="science" />} />
          <Route exact path="/Technology" element={<News key="technology" pageSize={6} country="in" category="technology" />} />
          <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" />} />
        </Routes>
      </>
    </div>
  );
}
