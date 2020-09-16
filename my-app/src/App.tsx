import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Api from './api/Api';

function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Switch>

          <Route path="/" component={Home} />

        </Switch>

      </BrowserRouter>

      <Api />
      <div className="fb-like" data-href="https://questionanswers.azurewebsites.net/" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>
    </div>
  );
}

export default App;
