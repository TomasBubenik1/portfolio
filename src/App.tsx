import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className=" bg-black w-screen h-screen flex flex-col justify-center items-center">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
