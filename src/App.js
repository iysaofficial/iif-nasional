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
import FormExample from "./Pages/FormExample";
import Faq from "./Pages/Faq";
import lowtahun from "./Pages/LoW/lowtahun";
import kategori from "./Pages/LoW/2024/kategori";
import jenjangonline from "./Pages/LoW/2024/jenjangonline";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/react-hooks" component={ReactHooks} />
            <Route exact path="/ui-ux" component={UiUx} />
            <Route exact path="/form-example" component={FormExample} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/Lowtahun" component={lowtahun} />
            <Route exact path="/kategori24" component={kategori} />
            <Route exact path="/jenjangonl24" component={jenjangonline} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
