import React from 'react';
import RestaurantInfo from '../../../app/components/RestaurantInfo';

describe('RestaurantInfo', () => {
  const props = {
    logo: '__LOGOURI__',
    title: '__TITLE__',
    rating: 3,
    location: '__LOCATION__',
    categories: ['__CAT1__', '__CAT2__'],
    className: '__CLASSNAME__',
  };

  it('render component', () => {
    const component = shallow(<RestaurantInfo {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('render clickeable component', () => {
    const component = shallow(<RestaurantInfo {...props} onClick={jest.fn()} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
