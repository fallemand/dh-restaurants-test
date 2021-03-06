import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import RestaurantItemsSection from './RestaurantItemsSection';
import './_restaurant-items.scss';

const RestaurantItems = ({ className, sections }) => (
  <div className={classnames(className, 'restaurant-items')}>
    {sections.map(section => <RestaurantItemsSection key={section.name} {...section} />)}
  </div>
);

RestaurantItems.propTypes = {
  className: PropTypes.string,
  sections: PropTypes.array.isRequired,
};

RestaurantItems.defaultProps = {
  className: null,
};

export default RestaurantItems;
