import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row/row';
import './people-page.css';





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
        <ItemDetails
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
