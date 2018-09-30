import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './restaurant-info.scss';

const RestaurantInfo = ({ className, logo, title, rating, location, categories, clikeable }) => (
  <div className={classnames(className, 'restaurant-info', { 'restaurant-info--clickeable': clikeable })}>
    <img className="restaurant-info__logo" src={logo} alt="Restaurant Logo" />
    <div className="restaurant-info__content">
      <h2 className="restaurant-info__title">{title}</h2>
      <span className="restaurant-info__rating">
        {rating}
        <small>/10</small>
      </span>
      <p className="restaurant-info__location">{location}</p>
      {categories.map(category => <span className="restaurant-info__category">{category}</span>)}
    </div>
  </div>
);

RestaurantInfo.propTypes = {
  className: PropTypes.string,
  clikeable: PropTypes.bool,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};

RestaurantInfo.defaultProps = {
  className: null,
  clikeable: false,
};

export default RestaurantInfo;
