import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Content from "./components/Body/Content";
import { useDispatch } from "react-redux";
import { dataAction } from "./components/store/data";
const App = () => {
  const dispatch = useDispatch()


  return (
    <>
      <Header />
      <div onClick={() => dispatch(dataAction.closeCart())} className="app">
        <Content />
      </div>
    </>
  )
};

export default App;
