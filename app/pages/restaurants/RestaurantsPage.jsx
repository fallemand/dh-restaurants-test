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
    this.setQueryParams = this.setQueryParams.bind(this);
    this.handleUrlParams = this.handleUrlParams.bind(this);
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
        this.handleUrlParams();
      });
  }

  onSort(field) {
    this.setQueryParams({ sort: field });
    const { filteredRestaurants } = this.state;
    const newFilteredRestaurants = filteredRestaurants.sort(
      (a, b) => a[field].toString().localeCompare(b[field].toString()),
    );
    this.setState({
      filteredRestaurants: newFilteredRestaurants,
    });
  }

  onFilter(query) {
    const { field, value } = query;
    if (value) {
      this.setQueryParams(query);
    }
    const { restaurants } = this.state;
    const filteredRestaurants = restaurants.filter(
      restaurant => restaurant[field].toString().includes(value),
    );
    this.setState({
      filteredRestaurants,
    });
  }

  setQueryParams(query) {
    const { location, history } = this.props;
    const queryParams = queryString.parse(location.search);
    Object.assign(queryParams, query);
    history.push({
      pathname: '/restaurants',
      search: `?${queryString.stringify(queryParams)}`,
    });
  }

  handleUrlParams() {
    const { location } = this.props;
    const { sort, filter, value } = queryString.parse(location.search);
    if (filter) {
      this.onFilter({ field: filter, value });
      this.setState({ filter });
    }
    if (sort) {
      this.onSort(sort);
      this.setState({ sort });
    }
  }

  render() {
    const { filteredRestaurants, sort, filter } = this.state;
    const { history } = this.props;
    return (
      <div className="restaurants">
        <a href="/" className="restaurants__logo">
          <img className="restaurants__logo-img" src={logo} alt="Delivery Hero Logo" />
        </a>
        <div className="restaurants__list">
          <div className="restaurants__list-actions">
            <Dropdown
              name="sort"
              title="Sort"
              className="restaurants__list-sort"
              onChange={this.onSort}
              options={[
                { value: 'name', label: 'Name', selected: (sort === 'name') },
                { value: 'rating', label: 'Rating', selected: (sort === 'rating') },
                { value: 'location', label: 'Location', selected: (sort === 'location') },
                { value: 'categories', label: 'Categories', selected: (sort === 'categories') },
              ]}
            />
            <Filter
              className="restaurants__list-filter"
              onFilter={this.onFilter}
              fields={[
                { value: 'name', label: 'Name', selected: (filter === 'name') },
                { value: 'rating', label: 'Rating', selected: (filter === 'rating') },
                { value: 'location', label: 'Location', selected: (filter === 'location') },
                { value: 'categories', label: 'Categories', selected: (filter === 'categories') },
              ]}
            />
          </div>
          <div className="restaurants__list-restaurants">
            { filteredRestaurants.map(restaurant => (
              <RestaurantInfo
                key={restaurant.id}
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
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(RestaurantsPage);
