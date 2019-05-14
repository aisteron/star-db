import React, { Component } from 'react';
import Spinner from '../spinner';
import './random-planet.css';
import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();


  state = {
      planet: {},
      loading: true,
      error: false
  };

  constructor() {
      super();
      this.updatePlanet();
  }
  onPlanetLoaded = (planet) =>
  {
      this.setState({planet, loading: false})
  };

  onError = (err) =>
  {
        this.setState({
            error: true,
            loading: false
        })
  }
  updatePlanet() {
      const id = 11;
      this.swapiService
          .getPlanet(id)
          .then(this.onPlanetLoaded)
          .catch(this.onError);
  };



  render() {
      const {planet: {id, name, population, rotationPeriod, diameter}, loading, error } = this.state;

      if (error) {
          return (
              <div className="random-planet jumbotron rounded spinnered">
                  <p className="errP">Извините, произошла ошибка загрузки...</p>
              </div>
          );
      }
      if (loading) {
          return (
              <div className="random-planet jumbotron rounded spinnered">
                  <Spinner/>
              </div>
          );
      }





    return (

      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt = {name}/>
        <div>
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population:</span>
              <span>{ population }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period:</span>
              <span>{ rotationPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter:</span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
      </div>);
  }
}
