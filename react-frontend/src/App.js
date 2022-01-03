import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import ListTaskComponent from "./components/ListTaskComponent";
import CreateTaskComponent from "./components/CreateTaskComponent";
import ViewTaskComponent from "./components/ViewTaskComponent";

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 

                          <Route path= "/tasks" component={ListTaskComponent}></Route>
                          <Route path= "/" component={ListTaskComponent}></Route>

                          <Route path = "/add-task/:id" component={CreateTaskComponent}></Route>

                          <Route path = "/view-task/:id" component={ViewTaskComponent}></Route>

                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
