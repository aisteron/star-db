import React from 'react';

import './item-list.css';
import {withData} from "../hoc-helpers";

import SwapiService from "../../services/swapi-service";

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel  } = props;

    const items = data.map((item)=>{

        const {id} = item;
        const label = renderLabel(item);


    return (
      <span className="list-group-item list-group-item-action"
        key={id}
        onClick={()=> onItemSelected(id)}

      >
        {label}
      </span>
    );
    });

    return (
        <div className="list-group">
            {items}
        </div>
    );
  };




const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);