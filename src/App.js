import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";
import Faq from "./Pages/Faq";
import lowtahun from "./Pages/LoW/lowtahun";
import kategori24 from "./Pages/LoW/2024/kategori";
import kategori23 from "./Pages/LoW/2023/kategori";
import jenjangonl24 from "./Pages/LoW/2024/jenjangonline";
import jenjang23 from "./Pages/LoW/2023/jenjangonline";
import kategori25 from "./Pages/LoW/2025/kategori";
import HomeIndo from "./Pages/registration/homeindo";
import IndonesiaOnline from "./Pages/registration/indo-online";
import ThankYouIndo from "./Pages/registration/thankyouindo";

function App() {
  return (
    // <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/react-hooks" component={ReactHooks} />
            <Route exact path="/ui-ux" component={UiUx} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/Lowtahun" component={lowtahun} />
            <Route exact path="/kategori25" component={kategori25} />
            <Route exact path="/kategori24" component={kategori24} />
            <Route exact path="/kategori23" component={kategori23} />
            <Route exact path="/jenjangonl24" component={jenjangonl24} />
            <Route exact path="/jenjang23" component={jenjang23} />
            <Route exact path="/homeindo" component={HomeIndo} />
            <Route exact path="/indo-online" component={IndonesiaOnline} />
            <Route exact path="/thankyou" component={ThankYouIndo} />
            
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    // </React.StrictMode>
  );
}

export default App;
