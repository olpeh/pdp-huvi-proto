import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  render() {
    return (
      <div className="ItemList">
        {this.props.items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            model={item.model}
            description={item.description}
            img={item.img}
            price={item.price}
            sizes={item.sizes}
          />
        ))}
      </div>
    );
  }
}

export default ItemList;
