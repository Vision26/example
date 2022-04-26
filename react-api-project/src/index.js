import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { APIContextProvider } from "./APIContext"


ReactDOM.render(
  <Router>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </Router>
  , document.getElementById('root'))