import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";


import {
    PersonDetails, PlanetDetails,
    PersonList, StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;


    return (
      <ErrorBoundry>
          <SwapiServiceProvider value={this.swapiService}>
              <div className="stardb-app">
                  <Header />
                  {planet}
                  <PersonDetails itemId={11} />
                  <PlanetDetails itemId={11} />

                  <PersonList />

                  <StarshipList />


              </div>
          </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
