import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Dropdown from '../../components/Dropdown';
import Filter from '../../components/Filter';
import RestaurantInfo from '../../components/RestaurantInfo';
import Pagination from '../../components/Pagination';
import logo from '../../assets/images/logo.png';
import './restaurants.scss';

class RestaurantsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onFilter = this.onFilter.bind(this);
    this.onSort = this.onSort.bind(this);
    this.state = {
      restaurants: [],
      filteredRestaurants: [],
    };
  }

  componentDidMount() {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          restaurants: data,
          filteredRestaurants: data,
        });
        const { sort, filter, value } = queryString.parse(this.props.location.search);
        if (filter) {
          this.onFilter({ field: filter, value });
        }
        if (sort) {
          this.onSort(sort);
        }
      });
  }

  onSort(field) {
    const filteredRestaurants = this.state.filteredRestaurants.sort(
      (a, b) => a[field].toString().localeCompare(b[field].toString()),
    );
    this.setState({
      filteredRestaurants,
    });
  }

  onFilter(query) {
    const { field, value } = query;
    const filteredRestaurants = this.state.restaurants.filter(
      restaurant => restaurant[field].toString().includes(value),
    );
    this.setState({
      filteredRestaurants,
    });
  }

  render() {
    const { filteredRestaurants } = this.state;
    const { history } = this.props;
    return (
      <div className="restaurants">
        <a href="/" className="restaurants__logo">
          <img className="restaurants__logo-img" src={logo} alt="Delivery Hero Logo" />
        </a>
        <div className="restaurants__list">
          <div className="restaurants__list-filters">
            <Dropdown
              name="sort"
              title="Sort"
              onChange={this.onSort}
              options={[
                { value: 'name', label: 'Name' },
                { value: 'rating', label: 'Rating' },
                { value: 'location', label: 'Location' },
                { value: 'categories', label: 'Categories' },
              ]}
            />
            <Filter
              className="restaurants__filter"
              onFilter={this.onFilter}
              fields={[
                { value: 'name', label: 'Name' },
                { value: 'rating', label: 'Rating' },
                { value: 'location', label: 'Location' },
                { value: 'categories', label: 'Categories' },
              ]}
            />
          </div>
          <div className="restaurants__list-restaurants">
            { filteredRestaurants.map(restaurant => (
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
