// import React from "react";

// import ImageComponent from "./components/ImageComponent/ImageComponent";
import { Routes, Route } from "react-router-dom";

// import Homepage from "./components/homepage/homepage";
import { Homepage } from "./components/Homepage/Homepage";
import { Lost } from "./pages/Lost/Lost";
import "./App.css";
import { Puppy } from "./pages/Puppy/Puppy";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Lost" element={<Lost />} />
        <Route path="/Puppy" element={<Puppy />} />
      </Routes>
    </>
  );
};

export default App;
