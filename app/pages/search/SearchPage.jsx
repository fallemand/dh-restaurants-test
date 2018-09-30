import React from 'react';
import { Redirect } from 'react-router-dom';

import Dropdown from '../../components/Dropdown';
import RestaurantInfo from '../../components/RestaurantInfo';
import Pagination from '../../components/Pagination';
import './search.scss';

import logo from '../../assets/images/logo.png';
import pizzaLogo from '../../assets/images/pizza-logo.png';

const restaurantsEndpoint = '/api/restaurants';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      redirectId: null,
    };
  }

  componentDidMount() {
    fetch(restaurantsEndpoint)
      .then(response => response.json())
      .then(data => this.setState({
        restaurants: data.data,
      }));
  }

  render() {
    const { restaurants, redirectId } = this.state;
    return (
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
            { restaurants.map(restaurant => (
              <RestaurantInfo
                onClick={() => (this.setState({ redirectId: restaurant.id }))}
                logo={restaurant.general.logo_uri}
                title={restaurant.general.name}
                rating={restaurant.rating.average}
                location={
                  `${restaurant.address.street_name} ${restaurant.address.street_number} - ${restaurant.address.city}`
                }
                categories={restaurant.general.categories[0].split(',')}
              />
            ))}
          </div>
          <Pagination total={50} show={10} />
          {redirectId && <Redirect to={`/items/${redirectId}`} />}
        </div>
      </div>
    );
  }
}

export default SearchPage;
