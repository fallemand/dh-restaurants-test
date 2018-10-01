import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './restaurant-items.scss';

const RestaurantItemsSection = ({ className, name, items }) => (
  <section className={classnames(className, 'restaurant-items__section')}>
    <h2 className="restaurant-items__section-name">{name}</h2>
    <ul className="restaurant-items__section-items">
      {items.map(item => (
        <li key={item.id} className="restaurant-items__section-item">
          <span className="restaurant-items__item-name">{item.name}</span>
          <span className="restaurant-items__item-price">{`$${item.price}`}</span>
          <a href="#/" className="restaurant-items__item-buy">Add to cart</a>
        </li>
      ))}

    </ul>
  </section>
);

RestaurantItemsSection.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

RestaurantItemsSection.defaultProps = {
  className: null,
};

export default RestaurantItemsSection;
