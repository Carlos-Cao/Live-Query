import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>

          <Route path="/" component={Home} />

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
