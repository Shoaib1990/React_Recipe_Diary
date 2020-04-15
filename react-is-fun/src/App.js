import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';

import './App.css';
import Demo from './index'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Create from './Create/Create'
import Nav from './Nav/Nav'
import {Router} from '@reach/router'



function App() {
  return (
    <Router>
      
        <Demo path="/"/>
        <Create path="/create"/>
      
      
    </Router>
    



  );
}

export default App;
