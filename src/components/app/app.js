import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages/';


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
        swapiService: new SwapiService()
    };

  render() {


    return (
      <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
              <div className="stardb-app">
                  <Header onServiceChange={this.onServiceChange}/>
                  <RandomPlanet/>

                  <PeoplePage />

                  <PlanetsPage />

                  <StarshipsPage />


              </div>
          </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
