import React, { Component } from "react";
import "./App.css";
import Header from './components/header'
import Carousels from './components/main'
import Content from './components/content'
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
class App extends Component {
  render() {
    return (
    <>
    <Header/>
   <Content />
   <Carousels items={items} active={0}/>
    </>
       
    )
  }
}
export default App;

