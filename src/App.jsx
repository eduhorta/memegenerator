import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./Nav";
import Meme from "./Meme";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Meme />
  </React.StrictMode>,
  document.getElementById("root")
);
