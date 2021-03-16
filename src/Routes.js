import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ClayUI from './ClayUI';

const routes = [{
    path: '/',
    Component: Home,
    exact: true,
}, {
    path: '/clayui',
    Component: ClayUI,
}];

function Home() {
    return <h2>Home</h2>;
  }
  

export const Routes = () => {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/clayui">ClayUI</Link>
                </li>
            </ul>
            <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                >
                    <route.Component />
                </Route>
            ))}
            </Switch>
        </Router>
    );
}