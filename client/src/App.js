// import react, router and all the pages

import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IndexPage from "./pages/IndexPage";

import SearchPage from "./pages/SearchPage";

import DatabasePage from "./pages/DatabasePage";

import JobApi from "./pages/JobApi";

import EditPage from "./pages/EditPage";



// routing

function App() {
   
  return (  
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/pesa" component={SearchPage} />
        <Route exact path="/view/pesa" component={DatabasePage} />
        <Route exact path="/view/pesa/:id" component={EditPage} />
        <Route exact path="/jobs" component={JobApi} />
      </Switch>
    </div>
  </Router>
  )
    
}



export default App;