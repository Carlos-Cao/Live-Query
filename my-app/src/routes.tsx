import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Mainpage';
import Forms from './components/Form'

const src: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form" exact component={Forms} />
        </Switch>

    );
}

export default src;