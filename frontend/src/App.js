import React  from "react"; 
import {BrowserRouter, Route} from "react-router-dom";
import {AuthProvider} from './contexts/AuthContext';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Main from "./components/layout/main";
import "normalize.css";
import "./styles/style.scss";

export default () => {
  return (
    <BrowserRouter>
      <AuthProvider>
		  <Header />
		  <Main />
		  <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};