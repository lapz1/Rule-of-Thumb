import React  from "react"; 
import {BrowserRouter} from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Main from "./components/layout/main";
import "normalize.css";
import "./styles/style.scss";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};