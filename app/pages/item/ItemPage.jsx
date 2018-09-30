import React from 'react';
import SearchItem from '../../components/RestaurantInfo';
import RestaurantItems from '../../components/RestaurantItems';
import pizzaLogo from '../../assets/images/pizza-logo.png';
import './item.scss';

const ItemPage = () => (
  <div className="restaurant">
    <SearchItem
      logo={pizzaLogo}
      title="El Mono Loco Pizzas"
      rating="6.76"
      location="Edimburg 65 St 24"
      categories={['Category A', 'Category B']}
    />
    <RestaurantItems sections={[
      {
        title: 'Burgers',
        items: [
          { id: 22, name: 'Max Burger super cheese bacon', price: '55,28' },
          { id: 22, name: 'Max Burger super cheese bacon', price: '55,28' },
          { id: 22, name: 'Max Burger super cheese bacon', price: '55,28' },
        ],
      },
      {
        title: 'Salads',
        items: [
          { id: 22, name: 'Max Burger super cheese bacon', price: '55,28' },
          { id: 22, name: 'Max Burger super cheese bacon', price: '55,28' },
          { id: 22, name: 'Max Burger super cheese bacon', price: '55,28' },
        ],
      },
      {
        title: 'Burgers',
        items: [
          { id: 22, name: 'Max Burger super cheese bacon', price: '55,28' },
          { id: 22, name: 'Max Burger super cheese bacon', price: '55,28' },
          { id: 22, name: 'Max Burger super cheese bacon', price: '55,28' },
        ],
      },
    ]}
    />
  </div>
);

export default ItemPage;
