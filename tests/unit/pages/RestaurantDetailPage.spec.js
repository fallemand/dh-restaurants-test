import React from 'react';
import RestaurantDetailPage from '../../../app/pages/restaurant-detail/RestaurantDetailPage';

jest.mock('../../../app/services/restaurants.service', () => ({ restaurantDetail: () => Promise.resolve(null) }));

describe('RestaurantsPage', () => {
  const props = {
    history: { goBack: jest.fn() },
    match: { params: { id: 1 } },
  };
  const restaurantInfo = {
    id: 1,
    logoUri: '__LOGOURI__',
    name: '__TITLE__',
    rating: '__RATING__',
    location: '__LOCATION__',
    categories: ['__CAT1__', '__CAT2__'],
    sections: [],
    className: '__CLASSNAME__',
  };

  it('render component', () => {
    const component = shallow(<RestaurantDetailPage {...props} />);
    component.setState({ info: restaurantInfo });
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('Button should go back', () => {
    const component = shallow(<RestaurantDetailPage {...props} />);
    component.find('.restaurant-detail__back').simulate('click');
    expect(props.history.goBack).toHaveBeenCalled();
  });
});
