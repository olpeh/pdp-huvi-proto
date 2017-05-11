import React from 'react';
import StoreData from '../static/data/store_data_new.json';
import ItemList from './ItemList';

class Store extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: StoreData,
    };
  }

  render() {
    return (
      <div className="Store">
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default Store;
