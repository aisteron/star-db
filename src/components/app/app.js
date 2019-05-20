import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import Row from '../row';

import './app.css';

import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import ItemDetails from "../item-details/item-details";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    const personDetails = (
          <ItemDetails itemId = {11}/>
      );
    const starshipDetails = (
          <ItemDetails itemId = {5}/>
      );

    return (
      <ErrorBoundry>
      <div className="stardb-app">
        <Header />
        {/*{ planet }*/}

        <Row
        left={personDetails}
        right = {starshipDetails}
        />

          /*{<div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>}*/
        </div>
        </ErrorBoundry>
        /*{<PeoplePage />}*/

      /*{<div className="row mb2">
        <div className="col-md-6">
          <ItemList
              onItemSelected={this.onPersonSelected}
              getData ={this.swapiService.getAllPlanets}
              renderItem = {(item) => item.name}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails
              personId={this.state.selectedPerson}
              getData ={this.swapiService.getAllPlanets}
          />
        </div>
      </div>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
              onItemSelected={this.onPersonSelected}
              getData ={this.swapiService.getAllStarships}
              renderItem = {(item) => item.name}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails
              personId={this.state.selectedPerson}
              getData ={this.swapiService.getAllStarShips}
          />
        </div>
      </div>}*/

    );
  }
}
