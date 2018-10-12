import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RestaurantInfo from '../../components/RestaurantInfo';
import RestaurantItems from '../../components/RestaurantItems';
import restaurantsService from '../../services/restaurants.service';
import './restaurant-detail.scss';
import actions from '../../flow/actions';


class RestaurantDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    };
  }

  componentWillMount() {
    const { match, increment } = this.props;
    const { id } = match.params;
    console.log(this.props);
    increment();
    restaurantsService.restaurantDetail(id).then((data) => {
      this.setState({
        info: data,
      });
    });
  }

  render() {
    const { info } = this.state;
    const { history } = this.props;
    return (
      <div className="restaurant-detail">
        <button
          className="restaurant-detail__back"
          type="button"
          onClick={() => history.goBack()}
        >
          &lt; Back
        </button>

        {info && (
          <RestaurantInfo
            className="restaurant-detail__info"
            logo={info.logoUri}
            title={info.name}
            rating={info.rating}
            location={info.location}
            categories={info.categories}
          />
        )}
        {info && <RestaurantItems sections={info.sections} />}
      </div>
    );
  }
}

RestaurantDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(null, actions)(withRouter(RestaurantDetailPage));
