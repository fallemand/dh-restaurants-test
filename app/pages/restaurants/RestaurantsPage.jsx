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
    const filteredRestaurants = this.state.filteredRestaurants.sort(
      (a, b) => a[field].toString().localeCompare(b[field].toString()),
    );
    this.setState({
      filteredRestaurants,
    });
  }

  onFilter(query) {
    const { field, value } = query;
    this.setQueryParams(query);
    const filteredRestaurants = this.state.restaurants.filter(
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
    const { sort, filter, value } = queryString.parse(this.props.location.search);
    if (filter) {
      this.onFilter({ field: filter, value });
      this.setState({ filter, value });
    }
    if (sort) {
      this.onSort(sort);
      this.setState({ sort });
    }
  }

  render() {
    const { filteredRestaurants, sort, filter, value } = this.state;
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
                { value: 'name', label: 'Name', selected: (sort === 'name') },
                { value: 'rating', label: 'Rating', selected: (sort === 'rating') },
                { value: 'location', label: 'Location', selected: (sort === 'location') },
                { value: 'categories', label: 'Categories', selected: (sort === 'categories') },
              ]}
            />
            <Filter
              className="restaurants__filter"
              onFilter={this.onFilter}
              defaultValue={value}
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
