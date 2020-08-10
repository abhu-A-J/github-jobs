import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import JobsPage from "./pages/job-page/job-page.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/details/:id" exact component={JobsPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
