// import React from "react";

// import ImageComponent from "./components/ImageComponent/ImageComponent";
import { Routes, Route } from "react-router-dom";

// import Homepage from "./components/homepage/homepage";
import { Homepage } from "./components/Homepage/Homepage";
import { Lost } from "./pages/Lost";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Lost" element={<Lost />} />
      </Routes>
    </>
  );
};

export default App;
