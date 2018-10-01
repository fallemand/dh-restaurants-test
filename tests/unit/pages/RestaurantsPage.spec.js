import React from 'react';
import RestaurantsPage from '../../../app/pages/restaurants/RestaurantsPage';

jest.mock('react-router-dom', () => ({ withRouter: Component => Component }));
const restaurantsInfo = [{
  id: 1,
  logoUri: '__LOGOURI__',
  name: '__TITLE__',
  rating: '__RATING__',
  location: '__LOCATION__',
  categories: ['__CAT1__', '__CAT2__'],
  className: '__CLASSNAME__',
}];
global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(restaurantsInfo) }));

describe('RestaurantsPage', () => {
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
});
