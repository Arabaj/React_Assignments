import React, { useState } from "react";
import ShoppingCart from './component/ShoppingCart'
import './App.css'
import QuizApp from "./component/QuizApp";
import Tempconvrt from "./component/Tempconvrt";
function App(){

  return (
    <>
    
    <ShoppingCart />
    <hr/>
    <QuizApp />
    <hr/>
    <Tempconvrt/>
    </>
  );
}

export default App;
