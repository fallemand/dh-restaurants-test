import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Filter from '../../components/Filter';
import Sort from '../../components/Sort';
import RestaurantInfo from '../../components/RestaurantInfo';
import Pagination from '../../components/Pagination';
import logo from '../../assets/images/logo.png';
import restaurantsService from '../../services/restaurants.service';
import './restaurants.scss';

class RestaurantsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSortChange = this.onSortChange.bind(this);
    this.onFilterSubmit = this.onFilterSubmit.bind(this);
    this.setQueryParams = this.setQueryParams.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.sort = this.sort.bind(this);
    this.filter = this.filter.bind(this);
    this.loadFilteredAndSortedData = this.loadFilteredAndSortedData.bind(this);
    this.restaurants = [];
    this.state = {
      filteredRestaurants: [],
      sortOrder: false,
    };
  }

  componentWillMount() {
    restaurantsService.restaurantsList().then((data) => {
      this.restaurants = data;
      this.loadFilteredAndSortedData();
    });
  }

  onSortChange(data) {
    const { field, order } = data;
    if (field) {
      this.setState({ sort: field, sortOrder: order });
      this.setQueryParams({ sort: field, sortOrder: order });
      this.sort(field, order);
    }
  }

  onFilterSubmit(query) {
    const { field, value } = query;
    if (field) {
      this.setQueryParams({ filter: field, value });
      this.filter(field, value);
    }
  }

  onFilterChange(data) {
    const { field, value } = data;
    this.setState({ filter: field, value });
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

  filter(field, value) {
    const filteredRestaurants = this.restaurants.filter(
      restaurant => restaurant[field].toString().includes(value),
    );
    this.setState({
      filteredRestaurants,
    });
  }

  sort(field, sortOrder) {
    const { filteredRestaurants } = this.state;
    const newRestaurants = filteredRestaurants;
    newRestaurants.sort((a, b) => {
      let result = a[field].toString().localeCompare(b[field].toString());
      if (sortOrder) {
        result *= (-1);
      }
      return result;
    });
    this.setState({
      filteredRestaurants: newRestaurants,
    });
  }

  loadFilteredAndSortedData() {
    const { location } = this.props;
    const { sort, sortOrder, filter, value } = queryString.parse(location.search);
    if (filter && value) {
      this.filter(filter, value);
      this.setState({ filter, value });
    } else {
      this.setState({ filteredRestaurants: this.restaurants }, () => {
        if (sort) {
          const parsedSortOrder = sortOrder === 'true';
          this.sort(sort, parsedSortOrder);
          this.setState({ sort, sortOrder: parsedSortOrder });
        }
      });
    }
  }

  render() {
    const { filteredRestaurants, sort, sortOrder, filter, value } = this.state;
    const { history } = this.props;
    const sortAndFilterFields = [
      { value: 'name', label: 'Name' },
      { value: 'rating', label: 'Rating' },
      { value: 'location', label: 'Location' },
      { value: 'categories', label: 'Categories' },
    ];
    return (
      <div className="restaurants">
        <a href="/" className="restaurants__logo">
          <img className="restaurants__logo-img" src={logo} alt="Delivery Hero Logo" />
        </a>
        <div className="restaurants__list">
          <div className="restaurants__list-actions">
            <Sort
              name="sort"
              title="Sort"
              field={sort}
              order={sortOrder}
              className="restaurants__list-sort"
              onChange={this.onSortChange}
              fields={sortAndFilterFields}
            />
            <Filter
              className="restaurants__list-filter"
              field={filter}
              value={value}
              onFilter={this.onFilterSubmit}
              onChange={this.onFilterChange}
              fields={sortAndFilterFields}
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
