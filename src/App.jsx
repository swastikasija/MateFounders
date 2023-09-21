import { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Counter";
import MakeHeading from "./components/Main-Heading";
import FetchNews from "./components/News";
import Animatedcursor from "./components/Animatedcursor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Organize from "./components/Organize";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Animatedcursor />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={FetchNews} />
          <Route path="/organize-event" Component={Organize} />
        </Routes>
      </BrowserRouter>
      {/* <Organize /> */}
    </>
  );
}

export default App;
