import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from '../pages/';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {StarshipDetails } from "../sw-components";

import './app.css';




export default class App extends Component {

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        });
    };


    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {

        this.setState({isLoggedIn: true})
    };

  render() {

    const {isLoggedIn} = this.state;

    return (
      <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
              <Router>
                  <div className="stardb-app">
                      <Header onServiceChange={this.onServiceChange}/>
                      <RandomPlanet />

                      <Switch>
                          <Route path="/" exact render={() => <h2>Welcome to STAR→DB</h2>}/>
                          <Route path="/people/:id?" component={PeoplePage} />
                          <Route path="/planets" component={PlanetsPage} />
                          <Route path="/starships" exact component={StarshipsPage} />
                          <Route path="/starships/:id"
                             render={({match}) => {
                                return <StarshipDetails itemId={match.params.id}/>
                             }} />

                          <Route path="/login"
                                 render={() => (
                                     <LoginPage
                                         isLoggedIn={isLoggedIn}
                                         onLogin={this.onLogin} />

                                 )} />

                          <Route path="/secret"
                                 render={() => (
                                     <SecretPage isLoggedIn={isLoggedIn}/>
                                 )} />

                          <Route render={() => <div><h1>404 ERROR</h1>
                          <h4>Page not found</h4></div>}/>
                      </Switch>



                  </div>
              </Router>
          </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
