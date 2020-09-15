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

    </div>
  );
}

export default App;
