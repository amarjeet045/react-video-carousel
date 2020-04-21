import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slider from './components/carousel'
import Header from './components/header'
class App extends Component {
  render() {
    return (
    <>
    <Header/>
    <Slider/>
    </>
       
    )
  }
}
export default App;

