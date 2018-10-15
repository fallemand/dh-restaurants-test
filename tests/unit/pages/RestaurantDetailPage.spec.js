import React from 'react';
import RestaurantDetailPage from '../../../app/pages/restaurant-detail/RestaurantDetailPage';

jest.mock('../../../app/services/restaurants.service', () => ({ restaurantDetail: () => Promise.resolve(null) }));

describe('RestaurantsPage', () => {
  const props = {
    history: { goBack: jest.fn() },
    match: { params: { id: 1 } },
    restaurant: {
      id: 1,
      logoUri: '__LOGOURI__',
      name: '__TITLE__',
      rating: 3,
      location: '__LOCATION__',
      categories: ['__CAT1__', '__CAT2__'],
      sections: [],
      className: '__CLASSNAME__',
    },
    fetchRestaurant: jest.fn(),
  };

  it('render component', () => {
    const component = shallow(<RestaurantDetailPage {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('Button should go back', () => {
    const component = shallow(<RestaurantDetailPage {...props} />);
    component.find('.restaurant-detail__back').simulate('click');
    expect(props.history.goBack).toHaveBeenCalled();
  });
});
