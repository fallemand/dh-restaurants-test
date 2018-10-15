import React from 'react';
import RestaurantsPage from '../../../app/pages/restaurants/RestaurantsPage';

jest.mock('../../../app/services/restaurants.service', () => ({ restaurantsList: () => Promise.resolve([]) }));

describe('RestaurantsPage', () => {
  const restaurantsInfo = [{
    id: 1,
    logoUri: '__LOGOURI__',
    name: '__TITLE__',
    rating: 3,
    location: '__LOCATION__',
    categories: ['__CAT1__', '__CAT2__'],
    className: '__CLASSNAME__',
  }];
  const props = {
    history: { push: jest.fn() },
    location: { search: '' },
    restaurants: restaurantsInfo,
    total: 1,
    page: 1,
    loading: false,
    fetchRestaurants: jest.fn(),
    changeFilter: jest.fn(),
  };

  it('render component', () => {
    const component = shallow(<RestaurantsPage {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('render component with filter', () => {
    const component = shallow(<RestaurantsPage filter="name" value="__TEST__" {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('render component with sort', () => {
    const component = shallow(<RestaurantsPage sort="name" sortOrder="false" {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('click on restaurant should redirect to restaurant page', () => {
    const component = shallow(<RestaurantsPage {...props} />);
    component.setState({
      paginatedResults: restaurantsInfo,
    });
    component.find('.restaurants__list-restaurants :first-child').simulate('click');
    expect(props.history.push).toHaveBeenCalledWith('/restaurants/1');
  });
});
