import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import queryString from 'query-string';
import actions from '../../flow/actions';
import Filter from '../../components/Filter';
import Sort from '../../components/Sort';
import RestaurantInfo from '../../components/RestaurantInfo';
import Pagination from '../../components/Pagination';
import logo from '../../assets/images/logo.png';
import './restaurants.scss';

class RestaurantsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSortChange = this.onSortChange.bind(this);
    this.onFilterSubmit = this.onFilterSubmit.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.setQueryParams = this.setQueryParams.bind(this);
    this.getParamsFromUrl = this.getParamsFromUrl.bind(this);
    this.loadData = this.loadData.bind(this);
    this.pageSize = 7;
  }

  componentWillMount() {
    const params = this.getParamsFromUrl();
    this.loadData(params);
  }

  onSortChange(data) {
    const { field, order } = data;
    if (field) {
      this.loadData({ sort: field, sortOrder: order });
    }
  }

  onFilterSubmit(query) {
    const { field, value } = query;
    if (field) {
      this.loadData({ filter: field, value, page: 1 });
    }
  }

  onFilterChange(data) {
    const { field, value } = data;
    const { changeFilter } = this.props;
    changeFilter({ filter: field, value });
  }

  onPageChange(pageNumber) {
    this.loadData({ page: pageNumber });
  }

  setQueryParams(query) {
    const { location, history } = this.props;
    const queryParams = queryString.parse(location.search);
    const newQueryParams = Object.assign({}, queryParams, query);
    if (JSON.stringify(queryParams) !== JSON.stringify(newQueryParams)) {
      const queryParamsString = `?${queryString.stringify(newQueryParams)}`;
      history.push({
        pathname: '/restaurants',
        search: queryParamsString,
      });
    }
  }

  getParamsFromUrl() {
    const { location } = this.props;
    const params = queryString.parse(location.search);
    return params;
  }

  completeSearchParams(params) {
    const { pageSize, props: { filter, sort, sortOrder, page, value } } = this;
    return {
      filter,
      sort,
      sortOrder,
      page,
      pageSize,
      value,
      ...params,
    };
  }

  loadData(params) {
    const completeParams = this.completeSearchParams(params);
    this.setQueryParams(params);
    const { fetchRestaurants } = this.props;
    fetchRestaurants(completeParams);
  }

  render() {
    const { restaurants, sort, sortOrder, filter, total, page, loading, history, value } = this.props;
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
          <div className={classnames(
            'restaurants__list-restaurants',
            { 'restaurants__list-restaurants--loading': loading },
          )}
          >
            { restaurants.map(restaurant => (
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
          { total > 1 && (
            <Pagination
              active={parseInt(page, 10)}
              total={total}
              show={this.pageSize}
              onChange={this.onPageChange}
            />
          )}
        </div>
      </div>
    );
  }
}

RestaurantsPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  fetchRestaurants: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  restaurants: PropTypes.array,
  sort: PropTypes.string,
  sortOrder: PropTypes.string,
  filter: PropTypes.string,
  value: PropTypes.string,
  page: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  total: PropTypes.number,
  loading: PropTypes.bool,
};

RestaurantsPage.defaultProps = {
  restaurants: [],
  total: 0,
  sort: '',
  sortOrder: '',
  filter: '',
  value: '',
  loading: false,
  page: 1,
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  sort: state.sort,
  sortOrder: state.sortOrder,
  filter: state.filter,
  value: state.value,
  total: state.total,
  page: state.page,
  loading: state.loading,
});

export default connect(mapStateToProps, actions)(withRouter(RestaurantsPage));
