import React from "react";
import "./App.css";
import {Footer, Header, Whatgpt3, Posibility, Feature, Blog} from "./container";
import { Cta, Navbar, Brand } from "./component";

function App() {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>

      <Brand/>
      <Whatgpt3/>
      <Feature/>
      <Posibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App