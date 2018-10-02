import React from 'react';
import RestaurantItemsSection from '../../../app/components/RestaurantItems/RestaurantItemsSection';

describe('RestaurantItems', () => {
  const props = {
    className: '__CLASSNAME__',
    name: '__NAME__',
    items: [
      { name: '__ITEMNAME1__', price: 99.99, id: 1 },
      { name: '__ITEMNAME2__', price: 99.99, id: 2 },
      { name: '__ITEMNAME3__', price: 99.99, id: 3 },
    ],
  };

  it('render component', () => {
    const component = shallow(<RestaurantItemsSection {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
