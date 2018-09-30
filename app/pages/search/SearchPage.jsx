import React from 'react';
import './search.scss';
import Dropdown from '../../components/Dropdown';
import RestaurantInfo from '../../components/RestaurantInfo';
import Pagination from '../../components/Pagination';

import logo from '../../assets/images/logo.png';
import pizzaLogo from '../../assets/images/pizza-logo.png';

const SearchPage = () => (
  <div className="search">
    <a href="/" className="search__logo">
      <img className="search__logo-img" src={logo} alt="Delivery Hero Logo" />
    </a>
    <div className="search__list">
      <div className="search__list-filters">
        <Dropdown
          name="filter"
          title="Filter"
          options={[
            { value: 'value1', label: 'Value1' },
            { value: 'value1', label: 'Value1' },
            { value: 'value1', label: 'Value1' },
          ]}
        />
        <Dropdown
          name="sort"
          title="Sort"
          options={[
            { value: 'value1', label: 'Value1' },
            { value: 'value1', label: 'Value1' },
            { value: 'value1', label: 'Value1' },
          ]}
        />
      </div>
      <div className="search__list-restaurants">
        <RestaurantInfo
          clickeable
          logo={pizzaLogo}
          title="El Mono Loco Pizzas"
          rating="6.76"
          location="Edimburg 65 St 24"
          categories={['Category A', 'Category B']}
        />
        <RestaurantInfo
          clickeable
          logo={pizzaLogo}
          title="El Mono Loco Pizzas"
          rating="6.76"
          location="Edimburg 65 St 24"
          categories={['Category A', 'Category B']}
        />
        <RestaurantInfo
          clickeable
          logo={pizzaLogo}
          title="El Mono Loco Pizzas"
          rating="6.76"
          location="Edimburg 65 St 24"
          categories={['Category A', 'Category B']}
        />
      </div>

      <Pagination total={50} show={10} />
    </div>
  </div>
);

export default SearchPage;
