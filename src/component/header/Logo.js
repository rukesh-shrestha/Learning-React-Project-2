import React from "react";
import logo from "./logo.svg";
import "./css/Header.css";

export default function Logo() {
  return (
    <img
      src={logo}
      style={{ width: "100px", height: "70px" }}
      className="App-logo"
      alt="logo"
    />
  );
}
