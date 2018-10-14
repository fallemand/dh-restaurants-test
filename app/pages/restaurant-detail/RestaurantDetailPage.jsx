import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RestaurantInfo from '../../components/RestaurantInfo';
import RestaurantItems from '../../components/RestaurantItems';
import './restaurant-detail.scss';
import actions from '../../flow/actions';


class RestaurantDetailPage extends React.Component {
  componentWillMount() {
    const { match, fetchRestaurant } = this.props;
    const { id } = match.params;
    fetchRestaurant(id);
  }

  render() {
    const { history, restaurant } = this.props;
    return (
      <div className="restaurant-detail">
        <button
          className="restaurant-detail__back"
          type="button"
          onClick={() => history.goBack()}
        >
          &lt; Back
        </button>

        {restaurant && (
          <RestaurantInfo
            className="restaurant-detail__info"
            logo={restaurant.logoUri}
            title={restaurant.name}
            rating={restaurant.rating}
            location={restaurant.location}
            categories={restaurant.categories}
          />
        )}
        {restaurant && <RestaurantItems sections={restaurant.sections} />}
      </div>
    );
  }
}

RestaurantDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  restaurant: PropTypes.object,
  fetchRestaurant: PropTypes.func.isRequired,
};

RestaurantDetailPage.defaultProps = {
  restaurant: null,
};

const mapStateToProps = state => ({
  restaurant: state.restaurant,
});

export default connect(mapStateToProps, actions)(withRouter(RestaurantDetailPage));
