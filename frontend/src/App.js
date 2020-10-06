import React  from "react"; 
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AuthProvider} from './contexts/AuthContext';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Main from "./components/layout/main";
import PastTrial from "./components/layout/past-trials";
import HowWorks from "./components/layout/how-works";
import TermsConditions from "./components/layout/terms-conditions";
import PrivacyPolicy from "./components/layout/privacy-policy";
import ContactUs from "./components/layout/contact-us";
import "normalize.css";
import "./styles/style.scss";

export default () => {
  return (
    <BrowserRouter>
      <AuthProvider>
		  <Header />
		  <Switch> {/* The Switch decides which component to show based on the current URL.*/}
			<Route exact path='/' component={Main}></Route>
			<Route exact path='/past-trials' component={PastTrial}></Route>
			<Route exact path='/how-works' component={HowWorks}></Route>
			<Route exact path='/terms-conditions' component={TermsConditions}></Route>
			<Route exact path='/privacy-policy' component={PrivacyPolicy}></Route>
			<Route exact path='/contact-us' component={ContactUs}></Route>
		  </Switch>
		  <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};