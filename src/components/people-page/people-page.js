import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import './people-page.css';


const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
};


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };



  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
        <ItemList
            onItemSelected={this.onPersonSelected}
            getData ={this.swapiService.getAllPeople}

        >
        {(i) => (
            `${i.name} (${i.gender})`
        )}
        </ItemList>
    );

    const personDetails = (
        <PersonDetails
            personId={this.state.selectedPerson}
            getData ={this.swapiService.getAllPeople}
        />
    );

    return (
        <ErrorBoundry>
          <Row left={itemList} right={personDetails} />
        </ErrorBoundry>
    );
  }
}
