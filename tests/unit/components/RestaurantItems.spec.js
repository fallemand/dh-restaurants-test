import React from 'react';
import RestaurantItems from '../../../app/components/RestaurantItems';

describe('RestaurantItems', () => {
  const props = {
    className: '__CLASSNAME__',
    sections: [],
  };

  it('render component', () => {
    const component = shallow(<RestaurantItems {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
