import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Main from "Routes/Main";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Header from "./Header";

export default () => {
    return(
        <Router>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/search" component={Search} />
                    <Route path="/movie/:id" component={Detail} />
                    <Redirect from="*" to="/" />
                </Switch>
            </>
        </Router>
    )
}

