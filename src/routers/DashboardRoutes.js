import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {

    return (
        <Fragment>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect  to="/dc" />
                </Switch>
            </div>
        </Fragment>
    )
}
