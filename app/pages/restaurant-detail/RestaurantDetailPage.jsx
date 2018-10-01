import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RestaurantInfo from '../../components/RestaurantInfo';
import RestaurantItems from '../../components/RestaurantItems';
import './restaurant-detail.scss';

class RestaurantDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    fetch(`/api/restaurants/${id}`)
      .then(response => response.json())
      .then(data => this.setState({
        info: data,
      }));
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
        {info && <RestaurantInfo
          className="restaurant-detail__info"
          logo={info.logoUri}
          title={info.name}
          rating={info.rating}
          location={info.location}
          categories={info.categories}
        />}
        {info && <RestaurantItems sections={info.sections} />}
      </div>
    );
  }
}

RestaurantDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(RestaurantDetailPage);
