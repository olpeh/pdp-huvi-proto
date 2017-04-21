import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  render() {
    return (
      <div className="ItemList">
        {this.props.items.map(item => (
          <Item
            key={item.key}
            name={item.name}
            model={item.model}
            sizes={item.sizes}
            description={item.description}
            material={item.material}
            img={item.img}
          />
        ))}
      </div>
    );
  }
}

export default ItemList;
