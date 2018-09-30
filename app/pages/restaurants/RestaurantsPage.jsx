import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dropdown from '../../components/Dropdown';
import RestaurantInfo from '../../components/RestaurantInfo';
import Pagination from '../../components/Pagination';
import logo from '../../assets/images/logo.png';
import './restaurants.scss';

class RestaurantsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then(data => this.setState({
        restaurants: data,
      }));
  }

  render() {
    const { restaurants } = this.state;
    const { history } = this.props;
    return (
      <div className="restaurants">
        <a href="/" className="restaurants__logo">
          <img className="restaurants__logo-img" src={logo} alt="Delivery Hero Logo" />
        </a>
        <div className="restaurants__list">
          <div className="restaurants__list-filters">
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
          <div className="restaurants__list-restaurants">
            { restaurants.map(restaurant => (
              <RestaurantInfo
                onClick={() => (history.push(`/restaurants/${restaurant.id}`))}
                logo={restaurant.logoUri}
                title={restaurant.name}
                rating={restaurant.rating}
                location={restaurant.location}
                categories={restaurant.categories}
              />
            ))}
          </div>
          <Pagination total={50} show={10} />
        </div>
      </div>
    );
  }
}

RestaurantsPage.propTypes = {
  history: PropTypes.func.isRequired,
};

export default withRouter(RestaurantsPage);
