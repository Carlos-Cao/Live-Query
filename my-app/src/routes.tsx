import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Mainpage';
import Forms from './components/Form';
import View from './components/View';

const src: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form" exact component={Forms} />
            <Route path="/view" exact component={View} />
            <Route path="/form/:questionID" exact component={View} />
        </Switch>

    );
}

export default src;