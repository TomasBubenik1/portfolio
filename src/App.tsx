import React from "react";
import "./App.css";
import { NavbarWrapper } from "./components/Navbar/NavbarWrapper";

function App() {
  return (
    <div className=" bg-black w-screen h-screen flex flex-col justify-center items-center">
      <NavbarWrapper></NavbarWrapper>
    </div>
  );
}

export default App;
