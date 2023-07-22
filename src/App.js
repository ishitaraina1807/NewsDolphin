import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <>
        <NavBar />
        <News pageSize={6} country ="in" category = "science"/>
        <Routes>
          <Route path="/" element={<News pageSize={6} country="in" category="general" />} />
          <Route path="/Business" element={<News pageSize={6} country="in" category="business" />} />
          <Route path="/Health" element={<News pageSize={6} country="in" category="health" />} />
          <Route path="/Sports" element={<News pageSize={6} country="in" category="sports" />} />
          <Route path="/Science" element={<News pageSize={6} country="in" category="science" />} />
          <Route path="/Technology" element={<News pageSize={6} country="in" category="technology" />} />
          <Route path="/Entertainment" element={<News pageSize={6} country="in" category="entertainment" />} />
        </Routes>
      </>
    </div>
  );
}
