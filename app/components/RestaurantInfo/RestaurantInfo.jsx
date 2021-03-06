import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_restaurant-info.scss';

const RestaurantInfo = ({
  className, logo, title, rating, location, categories, onClick,
}) => (
  <div onClick={onClick} className={classnames(className, 'restaurant-info', { 'restaurant-info--clickable': onClick })}>
    <img className="restaurant-info__logo" src={logo} alt="Restaurant Logo" />
    <div className="restaurant-info__content">
      <h2 className="restaurant-info__title">{title}</h2>
      <span className="restaurant-info__rating">
        {rating}
        <small> /5</small>
      </span>
      <p className="restaurant-info__location">{location}</p>
      <div className="restaurant-info__categories">
        {categories.map(category => <span key={category} className="restaurant-info__category">{category}</span>)}
      </div>
    </div>
  </div>
);

RestaurantInfo.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};

RestaurantInfo.defaultProps = {
  className: null,
  onClick: null,
};

export default RestaurantInfo;
