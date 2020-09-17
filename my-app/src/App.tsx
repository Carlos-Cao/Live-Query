import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Mainpage';
import Header from './components/Header';
import Api from './api/GETApi';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/form" component={Form} />
      </Switch >
    </BrowserRouter>
  );
}

export default App;
