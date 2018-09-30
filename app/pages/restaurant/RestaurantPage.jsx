import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from '../../components/RestaurantInfo';
import RestaurantItems from '../../components/RestaurantItems';
import './restaurant.scss';

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/restaurants/${id}`)
      .then(response => response.json())
      .then(data => this.setState({
        info: data,
      }));
  }

  render() {
    const { info } = this.state;
    return (
      <div className="restaurant">
        {info.name && <SearchItem
          logo={info.logoUri}
          title={info.name}
          rating={info.rating}
          location={info.location}
          categories={info.categories}
        />}
        {info.name && <RestaurantItems sections={info.sections} />}
      </div>
    );
  }
}

RestaurantPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default RestaurantPage;
