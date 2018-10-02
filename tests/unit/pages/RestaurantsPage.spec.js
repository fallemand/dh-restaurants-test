import React from 'react';
import RestaurantsPage from '../../../app/pages/restaurants/RestaurantsPage';

jest.mock('../../../app/services/restaurants.service', () => ({ restaurantsList: () => Promise.resolve([]) }));

describe('RestaurantsPage', () => {
  const restaurantsInfo = [{
    id: 1,
    logoUri: '__LOGOURI__',
    name: '__TITLE__',
    rating: '__RATING__',
    location: '__LOCATION__',
    categories: ['__CAT1__', '__CAT2__'],
    className: '__CLASSNAME__',
  }];
  const props = {
    history: { push: jest.fn() },
    location: { search: '' },
  };

  it('render component', () => {
    const component = shallow(<RestaurantsPage {...props} />);
    component.setState({
      filteredRestaurants: restaurantsInfo,
    });
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('click on restaurant should redirect to restaurant page', () => {
    const component = shallow(<RestaurantsPage {...props} />);
    component.setState({
      filteredRestaurants: restaurantsInfo,
    });
    component.find('.restaurants__list-restaurants :first-child').simulate('click');
    expect(props.history.push).toHaveBeenCalledWith('/restaurants/1');
  });
});
