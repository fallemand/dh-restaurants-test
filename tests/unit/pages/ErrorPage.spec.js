import React from 'react';
import ErrorPage from '../../../app/pages/error/ErrorPage';

describe('ErrorPage', () => {
  const props = {
    history: { push: jest.fn() },
    match: { params: { id: 1 } },
  };

  global.window = { location: { reload: jest.fn() } };

  it('render component', () => {
    const component = shallow(<ErrorPage />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('Button should redirect to Restaurants List', () => {
    const component = shallow(<NotFoundPage {...props} />);
    component.find('.not-found__button').simulate('click');
    expect(global.window.location.reload).toHaveBeenCalled();
  });
});
