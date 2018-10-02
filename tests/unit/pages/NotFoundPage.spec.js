import React from 'react';
import NotFoundPage from '../../../app/pages/not-found/NotFoundPage';

jest.mock('react-router-dom', () => ({ withRouter: Component => Component }));

describe('NotFoundPage', () => {
  const props = {
    history: { push: jest.fn() },
    match: { params: { id: 1 } },
  };

  it('render component', () => {
    const component = shallow(<NotFoundPage {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
    component.find('.not-found__button').simulate('click');
    expect(props.history.push).toHaveBeenCalledWith('/restaurants');
  });

  it('Button should redirect to Restaurants List', () => {
    const component = shallow(<NotFoundPage {...props} />);
    component.find('.not-found__button').simulate('click');
    expect(props.history.push).toHaveBeenCalledWith('/restaurants');
  });
});
